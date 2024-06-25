import { useEffect } from 'react'


const currentLevels: number[] = []

const useEscapeKeyPress = (clb: () => void, level: number) => {
    const upHandler = (event: KeyboardEvent) => {
        const isLevelActive = level === Math.max(...currentLevels)

        if (!isLevelActive) {
            return
        }

        if (event.key === 'Escape') {
            clb()
        }
    }

    useEffect(() => {
        currentLevels.push(level)

        window.addEventListener('keyup', upHandler)

        return () => {
            window.removeEventListener('keyup', upHandler)

            const index = currentLevels.indexOf(level)

            if (index > -1) {
                currentLevels.splice(index, 1)
            }
        }
    }, [level])
}

export default useEscapeKeyPress
