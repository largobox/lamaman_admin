import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'

import { ProtectedRoute } from 'uikit'
import {
    TracksCollectionAddPage,
    TracksCollectionsListPage,
    AuthorizationLoginPage,
    NotFound,
    TracksListPage,
    TracksCollectionEditPage,
} from 'pages'


const router = createBrowserRouter([
    {
        path: '/tracks-collections',
        element: (
            <ProtectedRoute>
                <TracksCollectionsListPage />
            </ProtectedRoute>
        ),
        children: [
            {
                path: 'add',
                element: <TracksCollectionAddPage />,
            },
            {
                path: ':id/edit',
                element: <TracksCollectionEditPage />,
            },
        ],
    },
    {
        path: '/tracks',
        element: (
            <ProtectedRoute>
                <TracksListPage />
            </ProtectedRoute>
        ),
    },
    {
        path: '/login',
        element: <AuthorizationLoginPage />,
    },
    {
        path: '/',
        element: <Navigate to='/tracks-collections' />,
    },
    {
        path: '/*',
        element: <NotFound />,
    },
])

export default router
