import React from 'react'
import { createRoot } from 'react-dom/client'

import { ROOT_DIV_ID } from 'utils'
import App from './App'

const rootElement = document.getElementById(ROOT_DIV_ID)

createRoot(rootElement).render(<App />)
