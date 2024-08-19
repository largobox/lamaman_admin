const prettyDuration = (duration: number) => {
    const totalSeconds = Math.floor(duration)
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds - hours * 3600) / 60)
    const seconds = totalSeconds - hours * 3600 - minutes * 60

    const minutesLabel = String(minutes).padStart(2, '0')
    const secondsLabel = String(seconds).padStart(2, '0')
    const label = `${minutesLabel}:${secondsLabel}`

    return label
}

export default prettyDuration
