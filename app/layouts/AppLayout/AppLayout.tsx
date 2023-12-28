import React from "react"
import { Props } from "./AppLayout.types"
import Box from "./AppLayout.styles"
import { NavigationMenu } from "unique"


const AppLayout = (props: Props) => {
	const { children } = props

	return (
		<Box>
			<NavigationMenu />

			{children}
		</Box>
	)
}

export default AppLayout
