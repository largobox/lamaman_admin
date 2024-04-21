import React from 'react'
import { Outlet } from 'react-router-dom'

import { AppLayout, PageLayout } from 'layouts'
import { TracksTable, TracksTopPanel } from 'unique'


const TracksListPage = () => {
    return (
        <AppLayout>
            <PageLayout>
                <TracksTopPanel />

                <TracksTable />

                <Outlet />
            </PageLayout>
        </AppLayout>
    )
}

export default TracksListPage
