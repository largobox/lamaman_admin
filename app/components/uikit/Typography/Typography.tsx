import React from "react"

import { Props } from "./Typography.types"


const Typography = (props: Props) => {
	const { text } = props

	return (
		<div>
			{text}
		</div>
	)
}

export default Typography
