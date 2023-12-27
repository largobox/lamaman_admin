import React from "react"
import { Props } from "./AppLayout.types"
import Box from "./AppLayout.styles"


const AppLayout = (props: Props) => {
	const { children } = props

	return (
		<Box>
			{children}
		</Box>
	)
}

export default AppLayout
