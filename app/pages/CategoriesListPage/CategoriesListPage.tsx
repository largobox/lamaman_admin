import React from 'react'

import { Paper, TableSorting } from 'uikit'
import { AppLayout, TableSortingsBox } from 'layouts'
import { CategoriesTable, CategoriesTopPanel } from 'unique'


const CategoriesListPage = () => {
    const sortings = [
        {
            name: 'name',
            label: 'наименование',
            onChange: () => {
                console.log('Sorting')
            },
        },
        {
            name: 'createdAt',
            label: 'дата создания',
            onChange: () => {
                console.log('Sorting')
            },
        },
    ]

    return (
        <AppLayout>
            <Paper>
                <CategoriesTopPanel />

                <TableSortingsBox>
                    {sortings.map((item) => (
                        <TableSorting
                            name={item.name}
                            label={item.label}
                            onChange={item.onChange}
                        />
                    ))}
                </TableSortingsBox>

                <CategoriesTable />
            </Paper>
        </AppLayout>
    )
}

export default CategoriesListPage
