import React from 'react'
// import logger from 'logger'
// import { API_LAYER } from 'consts'
import { ErrorPage } from 'pages'
import { Props, State } from './ErrorBoundary.types'


class ErrorBoundary extends React.Component<Props, State> {
    state: State = {
        hasError: false,
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    /*
      ToDo. Как минимум Uncaught ошибки не доходят сюда,
      мб это норм, подумать нужно
    */

    // componentDidCatch(error: Error, errorInfo: any) {
    //   logger.error({
    //       error,
    //       layer: API_LAYER,
    //   })
    // }

    render() {
        if (this.state.hasError) {
            return <ErrorPage />
        }

        return this.props.children
    }
}

export default ErrorBoundary
