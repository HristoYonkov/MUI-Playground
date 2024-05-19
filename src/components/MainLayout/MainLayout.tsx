import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import DifferenceOutlinedIcon from '@mui/icons-material/DifferenceOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import logoBG from '../../images/logo_bg.png';

const drawerWidth = 304;

interface MainLayoutProps {
    // title: string; // Add more props here..
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps): React.ReactElement {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const hrefMap: { [key: number]: string } = {
        0: '/users',
        1: '/zones',
        2: '/providers',
        3: '/roles',
        4: '/goods-types',
        5: '/type-difference'
    };

    const drawer = (
        <div>
            <Toolbar component={'a'} href='/' sx={{ gap: '16px', padding: '0 16px 0 16px', height: '73.22px', textDecoration: 'none' }} disableGutters>
                <img style={{ height: '40px', width: '40px', borderRadius: '50%' }} src={logoBG} alt='logo' />
                <Typography sx={{ color: 'black' }} variant='h6' fontWeight={600}>
                    Intercars Bulgaria
                </Typography>
            </Toolbar>
            <Divider />
            <List>
                {['Потребители', 'Зони', 'Доставчици', 'Роли', 'Видове Стока', 'Тип Разлика'].map((text, index) => (
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
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position='fixed'
                sx={{
                    width: { lg: `calc(100% - ${drawerWidth}px)` },
                    height: '48px',
                    ml: { lg: `${drawerWidth}px` },
                    backgroundColor: 'white',
                    justifyContent: 'center',
                }}
            >
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <IconButton
                        aria-label='open drawer'
                        edge='start'
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { lg: 'none' } }}
                    >
                        <MenuIcon sx={{ color: 'black' }} />
                    </IconButton>
                    <Box></Box>
                    <div>
                        <Button
                            id='demo-positioned-button'
                            aria-controls={open ? 'demo-positioned-menu' : undefined}
                            aria-haspopup='true'
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            sx={{ color: 'black', textTransform: 'none' }}
                        >
                            <Box
                                sx={{
                                    marginRight: '10px',
                                    boxShadow: '0px 0px 8px 0px #00000040',
                                }}
                            >
                                <Box sx={{ width: '30px', height: '6px' }} />
                                <Box sx={{ width: '30px', height: '6px', background: 'green' }} />
                                <Box sx={{ width: '30px', height: '6px', background: 'red' }} />
                            </Box>
                            {'Kristian Malamov'}
                            <KeyboardArrowDownIcon
                                sx={{
                                    fontSize: '30px',
                                    marginBottom: '3px',
                                    textAlign: 'center',
                                }}
                            />
                        </Button>
                        <Menu
                            id='demo-positioned-menu'
                            aria-labelledby='demo-positioned-button'
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
            <Box
                component='nav'
                sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 } }}
                aria-label='mailbox folders'
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    // container={container}
                    variant='temporary'
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', lg: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant='permanent'
                    sx={{
                        display: { xs: 'none', lg: 'block' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component='main'
                sx={{
                    backgroundColor: 'lightgrey',
                    height: '790px',
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)`, padding: '24px 0 0 0' },
                    paddingTop: '50px'
                }}
            >
                {children}
            </Box>
        </Box>
    );
}