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
import { AppLayout, AuthenticationLayout } from 'layouts'


const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <ProtectedRoute>
                <AppLayout />
            </ProtectedRoute>
        ),
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/performers',
                element: <PerformersListPage />,
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
                element: <TracksCollectionsListPage />,
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
                element: <TracksListPage />,
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
                path: '/sandbox', // Местечко для тестов
                element: <SandboxPage />,
            },
            {
                path: '/',
                element: <Navigate to='/tracks' />,
            },
        ],
    },
    {
        path: '/authorization',
        element: <AuthenticationLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'login',
                element: <AuthorizationLoginPage />,
            },
        ],
    },
    {
        path: '/*',
        element: <NotFoundPage />,
    },
])

export default router
