import React from 'react';

import { Typography } from '@mui/material';
import MainLayout from '../../components/MainLayout/MainLayout';
import MainPageToolbar from '../../components/MainPageToolbar/MainPageToolbar';


export default function Home(): React.ReactElement {

    return (
        <MainLayout>
            <MainPageToolbar
                title={'Потребители'}
                subTitle={'Менажиране на потребители'}
                buttonTitle={'ДЕЙСТВИЕ'}
            />

            <Typography paragraph>Home..</Typography>
        </MainLayout>
    );
}
