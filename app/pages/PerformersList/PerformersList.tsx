import React from 'react'

import { AppLayout, PageLayout } from 'layouts'
import { PerformersTable, PerformersTopPanel } from 'unique'
import { Outlet } from 'react-router-dom'


const PerformersListPage = () => {
    return (
        <AppLayout>
            <PageLayout>
                <PerformersTopPanel />

                <PerformersTable />

                <Outlet />
            </PageLayout>
        </AppLayout>
    )
}

export default PerformersListPage
