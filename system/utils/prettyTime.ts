const prettyTime = (value: string) => {
    const date = new Date(value)

    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')

    const result = `${hours}:${minutes}:${seconds}`

    return result
}

export default prettyTime
