import { useEffect, useState } from 'react'


const useKeyPress = (targetKey: string) => {
    const [isPressed, setIsPressed] = useState(false)

    const upHandler = (event: KeyboardEvent) => {
        if (event.key === targetKey) {
            setIsPressed(false)
        }
    }

    function downHandler(event: KeyboardEvent) {
        if (event.key === targetKey) {
            setIsPressed(true)
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', downHandler)
        window.addEventListener('keyup', upHandler)

        return () => {
            window.removeEventListener('keydown', downHandler)
            window.removeEventListener('keyup', upHandler)
        }
    }, [])

    return isPressed
}

export default useKeyPress
