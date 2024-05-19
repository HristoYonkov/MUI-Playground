import React from "react";

import { Box, Button, Toolbar, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

interface MainPageToolbarProps {
    title: string,
    subTitle: string,
    buttonTitle: string,
}

export default function MainPageToolbar({ title, subTitle, buttonTitle }: MainPageToolbarProps): React.ReactElement {

    return (
        <Toolbar
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
            }}
        >
            <Box sx={{ textAlign: 'left', marginTop: '15px' }}>
                <Typography sx={{ lineHeight: '12px' }} variant='h5' fontWeight={600}>
                    {title}
                </Typography>
                <Typography sx={{ marginTop: '10px', lineHeight: '15px' }}>
                    {subTitle}
                </Typography>
            </Box>
            <Button variant='contained' sx={{ backgroundColor: 'rgb(218 31 57)' }}>
                <AddIcon />
                <Box width={'10px'}></Box>
                {buttonTitle}
            </Button>
        </Toolbar>
    )
}