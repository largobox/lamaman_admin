import React from "react"
import Box from "./NavigationMenuItem.styles"
import { Props } from "./NavigationMenuItem.types"
import { Typography } from "uikit"
import { useNavigate, useLocation } from "react-router-dom"


const NavigationMenuItem = (props: Props) => {
    const { label, value } = props
    const navigate = useNavigate()
    const location = useLocation()
    const isSelected = location.pathname.includes(value)

    const clickHandler = () => {
        navigate(`/${value}`)
    }

    return (
        <Box
            onClick={clickHandler}
            $isSelected={isSelected}
        >
            <Typography
                text={label}
            />
        </Box>
    )
}

export default NavigationMenuItem
