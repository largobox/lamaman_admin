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
    static playedTimeInMs = 0
    static size = 0
    static sourceNode: AudioBufferSourceNode = null
    static startedAt = 0
    static tickTimerId: ReturnType<typeof setTimeout> = null

    static async addChunk(chunk: ArrayBuffer, start: number) {
        const nextSourceNode = AudioPlayback.audioContext.createBufferSource()

        nextSourceNode.addEventListener('onended', () => {
            AudioPlayback.onEnd()
            AudioPlayback.endTick()
        })

        AudioPlayback.chunksArr.push({
            buffer: chunk,
            offset: start,
        })

        const decodedAudioBuffer =
            await AudioPlayback.audioContext.decodeAudioData(
                AudioPlayback.getConcatenateChunksArr(),
            )

        AudioPlayback.lastLoadedTimeInMs = decodedAudioBuffer.duration * 1000
        AudioPlayback.onChunkLoaded(AudioPlayback.lastLoadedTimeInMs)

        nextSourceNode.buffer = decodedAudioBuffer
        nextSourceNode.connect(AudioPlayback.audioContext.destination)

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
        AudioPlayback.playedTimeInMs = 0
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

    static pause() {
        AudioPlayback.endTick()

        const pausedAt =
            AudioPlayback.audioContext.currentTime - AudioPlayback.startedAt

        AudioPlayback.sourceNode.stop()
        AudioPlayback.pausedAt = pausedAt
    }

    static play() {
        AudioPlayback.endTick()

        AudioPlayback.sourceNode.start()
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

            AudioPlayback.playedTimeInMs = durationInSeconds * 1000
            AudioPlayback.onTick(AudioPlayback.playedTimeInMs)
            AudioPlayback.tick()

            const isNextChunkNeeded =
                AudioPlayback.lastLoadedTimeInMs -
                    AudioPlayback.playedTimeInMs <
                msBeforeNextChunkNeeded

            if (isNextChunkNeeded) {
                AudioPlayback.onNextChunkNeeded()
            }
        }, 1000)
    }
}

export default AudioPlayback
