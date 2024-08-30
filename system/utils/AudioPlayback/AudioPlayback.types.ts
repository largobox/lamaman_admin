export type OnChunkLoadedFunc = (ms: number) => void
export type OnEndFunc = () => void
export type onNextChunkNeeded = () => void
export type OnTickFunc = (ms: number) => void

export type AudioPlaybackInitOptions = {
    onChunkLoaded: OnChunkLoadedFunc
    onEnd: OnEndFunc
    onNextChunkNeeded: onNextChunkNeeded
    onTick: OnTickFunc
    size: number
}

export type ChunkItem = {
    buffer: ArrayBuffer
    offset: number
}
