import { useEffect, useState } from 'react'


const useRequestDebounce = (value: boolean) => {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        if (!value) {
            setDebouncedValue(false)

            return
        }

        if (value) {
            const handler = setTimeout(() => {
                setDebouncedValue(true)
            }, 700)

            return () => {
                clearTimeout(handler)
            }
        }
    }, [value])

    return debouncedValue
}

export default useRequestDebounce
