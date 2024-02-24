import React, { useMemo } from 'react'
import Box from './NavigationMenu.styles'
import { NavigationMenuItem } from 'unique'


const NavigationMenu = () => {
    const items = useMemo(() => {
        return [
            { label: 'Коллекции', value: 'tracks-collections' },
            { label: 'Исполнители', value: 'performers' },
            { label: 'Трэки', value: 'tracks' },
            { label: 'Коллекции', value: 'collections' },
            { label: 'Поисковые запросы', value: 'search-requests' },
            { label: 'Пользователи', value: 'users' },
            { label: 'Статистика', value: 'statistics' },
        ]
    }, [])

    return (
        <Box>
            {items.map((item) => (
                <NavigationMenuItem
                    key={item.value}
                    label={item.label}
                    value={item.value}
                />
            ))}
        </Box>
    )
}

export default NavigationMenu
