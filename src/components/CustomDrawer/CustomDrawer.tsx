import React from 'react'

import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import DifferenceOutlinedIcon from '@mui/icons-material/DifferenceOutlined';

import logoBG from '../../images/logo_bg.png';

const hrefMap: { [key: number]: string } = {
    0: '/users',
    1: '/zones',
    2: '/providers',
    3: '/roles',
    4: '/goods-types',
    5: '/type-difference',
    6: 'markers',
};

const CustomDrawer: React.FC = () => {

    return (
        <div>
            <Toolbar component={'a'} href='/' sx={{ gap: '16px', padding: '0 16px 0 16px', height: '73.22px', textDecoration: 'none' }} disableGutters>
                <img style={{ height: '40px', width: '40px', borderRadius: '50%' }} src={logoBG} alt='logo' />
                <Typography sx={{ color: 'black' }} variant='h6' fontWeight={600}>
                    Intercars Bulgaria
                </Typography>
            </Toolbar>
            <Divider />
            <List>
                {['Потребители', 'Зони', 'Доставчици', 'Роли', 'Видове Стока', 'Тип Разлика', 'Маркери'].map((text, index) => (
                    <ListItem
                        key={text}
                        disablePadding
                        sx={{
                            '&:hover': {
                                background: '#BB002133',
                                color: '#C9022D',
                                '& .MuiSvgIcon-root, & .MuiSvgIcon-fontSizeMedium, & .css-wg28wd-MuiSvgIcon-root': {
                                    color: '#C9022D',
                                },
                            },
                        }}
                    >
                        <ListItemButton LinkComponent={'a'} href={hrefMap[index] || ''}>
                            <ListItemIcon>
                                {index === 0 ? <PeopleAltOutlinedIcon sx={{ color: 'black' }} /> : null}
                                {index === 1 ? <AccountTreeOutlinedIcon sx={{ color: 'black' }} /> : null}
                                {index === 2 ? <LocalShippingOutlinedIcon sx={{ color: 'black' }} /> : null}
                                {index === 3 ? <ManageAccountsOutlinedIcon sx={{ color: 'black' }} /> : null}
                                {index === 4 ? <Inventory2OutlinedIcon sx={{ color: 'black' }} /> : null}
                                {index === 5 ? <DifferenceOutlinedIcon sx={{ color: 'black' }} /> : null}
                                {index === 6 ? <DifferenceOutlinedIcon sx={{ color: 'black' }} /> : null}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

export default CustomDrawer