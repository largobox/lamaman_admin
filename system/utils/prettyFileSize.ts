const prettyFileSize = (sizeInBytes: number) => {
    const sizeInMb = (sizeInBytes / 1000000).toFixed(2)
    const label = `${sizeInMb}Мб`

    return label
}

export default prettyFileSize
