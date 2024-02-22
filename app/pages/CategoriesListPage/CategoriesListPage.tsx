import React from 'react'

import { TableSorting } from 'uikit'
import { AppLayout, PageLayout, TableSortingsBox } from 'layouts'
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
            <PageLayout>
                <CategoriesTopPanel />

                <TableSortingsBox>
                    {sortings.map((item) => (
                        <TableSorting
                            key={item.name}
                            name={item.name}
                            label={item.label}
                            onChange={item.onChange}
                        />
                    ))}
                </TableSortingsBox>

                <CategoriesTable />
            </PageLayout>
        </AppLayout>
    )
}

export default CategoriesListPage
