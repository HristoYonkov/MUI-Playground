import { Typography } from '@mui/material';
import MainLayout from '../../components/MainLayout/MainLayout';
import MainPageToolbar from '../../components/MainPageToolbar/MainPageToolbar';


export default function Home() {

    return (
        <MainLayout>
            <MainPageToolbar
                title={'Потребители'}
                subTitle={'Менажиране на потребители'}
                buttonTitle={'ДЕЙСТВИЕ'}
            />

            <Typography paragraph>PAGES..</Typography>
        </MainLayout>
    );
}
