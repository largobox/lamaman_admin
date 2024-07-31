import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'

import { ProtectedRoute } from 'uikit'
import {
    AuthorizationLoginPage,
    NotFoundPage,
    PerformerAddPage,
    PerformerEditPage,
    PerformersListPage,
    SandboxPage,
    TracksCollectionAddPage,
    TracksCollectionsListPage,
    TracksListPage,
    TracksCollectionEditPage,
    TrackAddPage,
    TrackEditPage,
    TrackPlayPage,
    ErrorPage,
} from 'pages'
import { AppLayout } from 'layouts'


const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/performers',
                element: (
                    <ProtectedRoute>
                        <PerformersListPage />
                    </ProtectedRoute>
                ),
                children: [
                    {
                        path: 'add',
                        element: <PerformerAddPage />,
                    },
                    {
                        path: ':id/edit',
                        element: <PerformerEditPage />,
                    },
                ],
            },
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
                children: [
                    {
                        path: 'add',
                        element: <TrackAddPage />,
                    },
                    {
                        path: ':id/edit',
                        element: <TrackEditPage />,
                    },
                    {
                        path: ':id/play',
                        element: <TrackPlayPage />,
                    },
                ],
            },
            {
                path: '/login',
                element: <AuthorizationLoginPage />,
            },
            {
                path: '/sandbox',
                element: <SandboxPage />,
            },
            {
                path: '/',
                element: <Navigate to='/tracks' />,
            },
            {
                path: '/*',
                element: <NotFoundPage />,
            },
        ],
    },
])

export default router
