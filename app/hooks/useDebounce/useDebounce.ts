import { useEffect, useState } from 'react'

import { UseDebounceHookValue } from './useDebounce.types'


const useDebounce = (value: UseDebounceHookValue, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    }, [value])

    return debouncedValue
}

export default useDebounce
