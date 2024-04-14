const prettyDate = (value: string) => {
    const date = new Date(value)

    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth()).padStart(2, '0')
    const year = date.getFullYear()

    const result = `${day}.${month}.${year}`

    return result
}

export default prettyDate
