import { useEffect, useRef } from 'react'


const useDebounceCallback = (
    clb: (value: string) => void,
    initialValue: string,
) => {
    const timerRef = useRef<ReturnType<typeof setTimeout>>()

    useEffect(() => {
        const currentValue = initialValue

        if (timerRef.current) {
            clearTimeout(timerRef.current)
        }

        timerRef.current = setTimeout(() => {
            clb(currentValue)
        }, 500)

        return () => {
            clearTimeout(timerRef.current)
        }
    }, [initialValue])
}

export default useDebounceCallback
