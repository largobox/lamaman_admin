import React from 'react'

import { PageLayout } from 'layouts'
import { PerformersTable, PerformersTopPanel } from 'unique'
import { Outlet } from 'react-router-dom'


const PerformersListPage = () => {
    return (
        <PageLayout>
            <PerformersTopPanel />

            <PerformersTable />

            <Outlet />
        </PageLayout>
    )
}

export default PerformersListPage
