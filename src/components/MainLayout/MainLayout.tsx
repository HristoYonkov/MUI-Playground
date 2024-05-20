import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

import MainPageDropdown from '../MainPageDropdown/MainPageDropdown';
import CustomDrawer from '../CustomDrawer/CustomDrawer';

const drawerWidth = 304;

interface MainLayoutProps {
    // title: string; // Add more props here..
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps): React.ReactElement {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);


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
                    <MainPageDropdown></MainPageDropdown>
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
                    {<CustomDrawer />}
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
                    {<CustomDrawer />}
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