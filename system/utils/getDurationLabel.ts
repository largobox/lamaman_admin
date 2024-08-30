const getDurationLabel = (milliseconds: number | null) => {
    if (milliseconds === null) {
        return '--:--'
    }

    const seconds = Math.round(milliseconds / 1000)
    const secondsPart = seconds % 60
    const minutes = (seconds - secondsPart) / 60
    const minutesPart = minutes % 60

    const minutesLabel = String(minutesPart).padStart(2, '0')
    const secondsLabel = String(secondsPart).padStart(2, '0')

    return `${minutesLabel}:${secondsLabel}`
}

export default getDurationLabel
