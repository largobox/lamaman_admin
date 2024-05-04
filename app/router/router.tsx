import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'

import { ProtectedRoute } from 'uikit'
import {
    TracksCollectionAddPage,
    TracksCollectionsListPage,
    AuthorizationLoginPage,
    NotFoundPage,
    PerformerAddPage,
    PerformerEditPage,
    PerformersListPage,
    TracksListPage,
    TracksCollectionEditPage,
    TrackAddPage,
    TrackEditPage,
} from 'pages'


const router = createBrowserRouter([
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
        ],
    },
    {
        path: '/login',
        element: <AuthorizationLoginPage />,
    },
    {
        path: '/',
        element: <Navigate to='/tracks' />,
    },
    {
        path: '/*',
        element: <NotFoundPage />,
    },
])

export default router
