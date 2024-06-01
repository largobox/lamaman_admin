import { FileMetaData } from 'common-types'


const getFileDescription = (data: FileMetaData | File) => {
    if (data === null) return ''

    if ('type' in data) {
        return `Тип: ${data.type}, Размер: ${data.size} байт`
    }

    return `Тип: ${data.mimetype}, Размер: ${data.size} байт`
}

export default getFileDescription
