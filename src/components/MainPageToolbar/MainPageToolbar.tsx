import React from "react";

import { Box, Toolbar, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import MyButton from "../partials/MyButton/MyButton";

interface MainPageToolbarProps {
    title: string,
    subTitle: string,
    buttonTitle: string,
    buttonFn: Function
}

export default function MainPageToolbar({ title, subTitle, buttonTitle, buttonFn }: MainPageToolbarProps): React.ReactElement {
    
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
            <MyButton title={buttonTitle} buttonFn={buttonFn} icon={<AddIcon />} />
        </Toolbar>
    )
}