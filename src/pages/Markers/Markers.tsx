import React from 'react';

import { Typography } from '@mui/material';
import MainLayout from '../../components/MainLayout/MainLayout';
import MainPageToolbar from '../../components/MainPageToolbar/MainPageToolbar';
import DataTable from '../../components/DataTable/DataTable';


export default function Markers(): React.ReactElement {

    return (
        <MainLayout>
            <MainPageToolbar
                title={'Title'}
                subTitle={'Subtitle'}
                buttonTitle={'Създай Маркер'}
                buttonFn={() => {}}
            />

            <DataTable
            >
                
            </DataTable>
        </MainLayout>
    );
}