const getDurationLabel = (milliseconds: number) => {
    const millisecondsPart = milliseconds % 1000
    const seconds = (milliseconds - millisecondsPart) / 1000
    const secondsPart = seconds % 60
    const minutes = (seconds - secondsPart) / 60
    const minutesPart = minutes % 60

    const minutesLabel = String(minutesPart).padStart(2, '0')
    const secondsLabel = String(secondsPart).padStart(2, '0')

    return `${minutesLabel}:${secondsLabel}`
}

export default getDurationLabel
