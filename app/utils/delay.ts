const delay = (value?: number) => {
    const ms = value || 500

    return new Promise((resolve) => setTimeout(resolve, ms))
}

export default delay
