import React from 'react'

import { AppLayout, PageLayout } from 'layouts'
import { TracksCollectionsTable, TracksCollectionsTopPanel } from 'unique'


const TracksCollectionsListPage = () => {
    return (
        <AppLayout>
            <PageLayout>
                <TracksCollectionsTopPanel />

                <TracksCollectionsTable />
            </PageLayout>
        </AppLayout>
    )
}

export default TracksCollectionsListPage
