import React from 'react'
import { Outlet } from 'react-router-dom'

import { PageLayout } from 'layouts'
import { TracksTable, TracksTopPanel } from 'unique'


const TracksListPage = () => {
    return (
        <PageLayout>
            <TracksTopPanel />

            <TracksTable />

            <Outlet />
        </PageLayout>
    )
}

export default TracksListPage
