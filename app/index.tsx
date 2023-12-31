import React from 'react'
import { createRoot } from 'react-dom/client'

import { ROOT_DIV_ID } from 'app-utils'
import { cssBaseline } from 'system-utils'
import App from './App'

const main = async () => {
    cssBaseline()

    const rootElement = document.getElementById(ROOT_DIV_ID)

    createRoot(rootElement).render(<App />)
}

main()
