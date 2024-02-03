import React from 'react'

import { Paper } from 'uikit'
import { AppLayout } from 'layouts'
import {
    CategoriesTable,
    CategoriesTableSortings,
    CategoriesTopPanel,
} from 'unique'


const CategoriesListPage = () => {
    return (
        <AppLayout>
            <Paper>
                <CategoriesTopPanel />

                <CategoriesTableSortings />

                <CategoriesTable />
            </Paper>
        </AppLayout>
    )
}

export default CategoriesListPage
