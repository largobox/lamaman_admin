import React from 'react'

import { PageLayout } from 'layouts'
import { TracksCollectionsTable, TracksCollectionsTopPanel } from 'unique'
import { Outlet } from 'react-router-dom'


const TracksCollectionsListPage = () => {
    return (
        <PageLayout>
            <TracksCollectionsTopPanel />

            <TracksCollectionsTable />

            <Outlet />
        </PageLayout>
    )
}

export default TracksCollectionsListPage
