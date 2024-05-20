import React from "react";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Button, Menu, MenuItem } from "@mui/material";

export default function MainPageDropdown(): React.ReactElement {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
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
    );
}