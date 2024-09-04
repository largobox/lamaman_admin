import {
    AudioPlaybackInitOptions,
    ChunkItem,
    OnChunkLoadedFunc,
    OnEndFunc,
    onNextChunkNeeded,
    OnTickFunc,
} from './AudioPlayback.types'


const msBeforeNextChunkNeeded = 2000

class AudioPlayback {
    static audioContext: AudioContext = null
    static chunksArr: ChunkItem[] = []
    static lastLoadedTimeInMs = 0
    static onChunkLoaded: OnChunkLoadedFunc = null
    static onEnd: OnEndFunc = null
    static onNextChunkNeeded: onNextChunkNeeded = null
    static onTick: OnTickFunc = null
    static pausedAt = 0
    static size = 0
    static sourceNode: AudioBufferSourceNode = null
    static startedAt = 0
    static tickTimerId: ReturnType<typeof setTimeout> = null

    static async addChunk(chunk: ArrayBuffer, start: number) {
        AudioPlayback.chunksArr.push({
            buffer: chunk,
            offset: start,
        })

        const nextSourceNode = await AudioPlayback.getNextSourceNode()

        AudioPlayback.lastLoadedTimeInMs = nextSourceNode.buffer.duration * 1000
        AudioPlayback.onChunkLoaded(AudioPlayback.lastLoadedTimeInMs)

        if (AudioPlayback.sourceNode !== null) {
            const playedAt =
                AudioPlayback.audioContext.currentTime - AudioPlayback.startedAt
            AudioPlayback.sourceNode.stop()

            AudioPlayback.sourceNode = nextSourceNode
            AudioPlayback.sourceNode.start(0, playedAt)

            return
        }

        AudioPlayback.sourceNode = nextSourceNode
        AudioPlayback.play()
    }

    static clear() {
        AudioPlayback.endTick()

        if (AudioPlayback.sourceNode !== null) {
            AudioPlayback.sourceNode.removeEventListener(
                'onended',
                AudioPlayback.sourceNode.onended,
            )
        }

        if (AudioPlayback.startedAt > 0) {
            AudioPlayback.sourceNode.stop()
        }

        AudioPlayback.audioContext = null
        AudioPlayback.chunksArr = []
        AudioPlayback.lastLoadedTimeInMs = 0
        AudioPlayback.onChunkLoaded = null
        AudioPlayback.onEnd = null
        AudioPlayback.onNextChunkNeeded = null
        AudioPlayback.onTick = null
        AudioPlayback.pausedAt = 0
        AudioPlayback.size = 0
        AudioPlayback.sourceNode = null
        AudioPlayback.startedAt = 0
        AudioPlayback.tickTimerId = null
    }

    static endTick() {
        clearTimeout(AudioPlayback.tickTimerId)
    }

    static getConcatenateChunksArr() {
        if (AudioPlayback.chunksArr.length === 0) {
            return new ArrayBuffer(0)
        }

        const resultBuffer = new ArrayBuffer(AudioPlayback.size)

        for (const item of AudioPlayback.chunksArr) {
            if (!item.buffer || item.buffer.byteLength === 0) {
                continue
            }

            const uint8View = new Uint8Array(
                resultBuffer,
                item.offset,
                item.buffer.byteLength,
            )
            const srcUint8View = new Uint8Array(item.buffer)

            uint8View.set(srcUint8View)
        }

        return resultBuffer
    }

    static async getNextSourceNode() {
        if (AudioPlayback.sourceNode !== null) {
            AudioPlayback.sourceNode.removeEventListener(
                'onended',
                AudioPlayback.handleEnded,
            )
        }

        const nextSourceNode = AudioPlayback.audioContext.createBufferSource()

        nextSourceNode.addEventListener('onended', AudioPlayback.handleEnded)

        const decodedAudioBuffer =
            await AudioPlayback.audioContext.decodeAudioData(
                AudioPlayback.getConcatenateChunksArr(),
            )

        nextSourceNode.buffer = decodedAudioBuffer
        nextSourceNode.connect(AudioPlayback.audioContext.destination)

        return nextSourceNode
    }

    static handleEnded() {
        AudioPlayback.onEnd()
        AudioPlayback.endTick()
    }

    static init(options: AudioPlaybackInitOptions) {
        const { onChunkLoaded, onEnd, onNextChunkNeeded, onTick, size } =
            options
        const audioContext = new window.AudioContext()

        AudioPlayback.audioContext = audioContext
        AudioPlayback.onChunkLoaded = onChunkLoaded
        AudioPlayback.onEnd = onEnd
        AudioPlayback.onNextChunkNeeded = onNextChunkNeeded
        AudioPlayback.onTick = onTick
        AudioPlayback.size = size
    }

    static async pause() {
        AudioPlayback.endTick()

        const nextSourceNode = await AudioPlayback.getNextSourceNode()
        const pausedAt =
            AudioPlayback.audioContext.currentTime - AudioPlayback.startedAt

        AudioPlayback.sourceNode.stop()
        AudioPlayback.pausedAt += pausedAt
        AudioPlayback.sourceNode = nextSourceNode
    }

    static play() {
        AudioPlayback.endTick()

        AudioPlayback.sourceNode.start(0, AudioPlayback.pausedAt)
        AudioPlayback.startedAt = AudioPlayback.audioContext.currentTime

        AudioPlayback.startTick()
    }

    static startTick() {
        AudioPlayback.tick()
    }

    static tick() {
        if (typeof AudioPlayback.onTick !== 'function') {
            throw new Error('AudioPlayback. onTick must be a function')
        }

        AudioPlayback.tickTimerId = setTimeout(() => {
            const durationInSeconds =
                AudioPlayback.audioContext.currentTime - AudioPlayback.startedAt
            const playedTimeInMs = durationInSeconds * 1000

            AudioPlayback.onTick(playedTimeInMs)
            AudioPlayback.tick()

            const isNextChunkNeeded =
                AudioPlayback.lastLoadedTimeInMs - playedTimeInMs <
                msBeforeNextChunkNeeded

            if (isNextChunkNeeded) {
                AudioPlayback.onNextChunkNeeded()
            }
        }, 1000)
    }
}

export default AudioPlayback
