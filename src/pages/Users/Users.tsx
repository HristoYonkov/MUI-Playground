import React from 'react';

import { Typography } from '@mui/material';
import MainLayout from '../../components/MainLayout/MainLayout';
import MainPageToolbar from '../../components/MainPageToolbar/MainPageToolbar';
import MyModal from '../../components/MyModal/MyModal';
import useMyModal from '../../hooks/useMyModal';


export default function Users(): React.ReactElement {
    const { open, handleClose, handleOpen } = useMyModal();

    return (
        <MainLayout>
            <MainPageToolbar
                title={'Потребители'}
                subTitle={'Менажиране на потребители'}
                buttonTitle={'нов потребител'}
                buttonFn={() => handleOpen()}
            />
            <MyModal open={open} handleClose={handleClose} />
            <Typography paragraph>Users..</Typography>
        </MainLayout>
    );
}