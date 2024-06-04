import React from "react";

import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Toolbar } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

interface TableToolbarProps {
    numSelected: number;
}

const TableToolbar: React.FC<TableToolbarProps> = (props) => {
    const { numSelected } = props;
    const [role, setRole] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setRole(event.target.value as string);
    };

    return (
        <Toolbar
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                pt: { xs: 2, sm: 2 },
                pb: { xs: 2, sm: 2 },
            }}
        >
            <Box sx={{ position: 'relative' }}>
                <SearchIcon sx={{ position: 'absolute', top: '15px', left: '5px' }} />
                <TextField
                    id='outlined-basic'
                    label='Търсене'
                    variant='outlined'
                    sx={{ width: '328px' }}
                    InputProps={{ sx: { '& input': { paddingLeft: '30px' } } }}
                    InputLabelProps={{
                        sx: {
                            paddingLeft: '20px',
                            color: 'black',
                            '&.Mui-focused': {
                                paddingLeft: '0px',
                            },
                        },
                    }}
                />
            </Box>
            <Box width={'199px'}>
                <FormControl fullWidth>
                    <InputLabel sx={{ color: 'black' }} id='demo-simple-select-label'>
                        Филтър по Роля
                    </InputLabel>
                    <Select
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        value={role}
                        label='Филтър по Роля'
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Admin</MenuItem>
                        <MenuItem value={20}>Courier</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Toolbar>
    );
}

export default TableToolbar;