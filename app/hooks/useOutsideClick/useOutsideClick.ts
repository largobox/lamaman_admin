import { useEffect } from 'react'


const useOutsideClickHook = (
    ref: { current: HTMLDivElement },
    callback: () => void,
) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback()
            }
        }

        document.addEventListener('mouseup', handleClickOutside)
        document.addEventListener('touchend', handleClickOutside)

        return () => {
            document.removeEventListener('mouseup', handleClickOutside)
            document.removeEventListener('touchend', handleClickOutside)
        }
    }, [callback])
}

export default useOutsideClickHook
