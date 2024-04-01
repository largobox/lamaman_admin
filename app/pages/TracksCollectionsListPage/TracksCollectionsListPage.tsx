import React from 'react'

import { AppLayout, PageLayout } from 'layouts'
import { TracksCollectionsTable, TracksCollectionsTopPanel } from 'unique'
import { Outlet } from 'react-router-dom'


const TracksCollectionsListPage = () => {
    return (
        <AppLayout>
            <PageLayout>
                <TracksCollectionsTopPanel />

                <TracksCollectionsTable />

                <Outlet />
            </PageLayout>
        </AppLayout>
    )
}

export default TracksCollectionsListPage
