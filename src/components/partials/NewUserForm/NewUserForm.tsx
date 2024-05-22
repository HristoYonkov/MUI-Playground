import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { Button, InputLabel, MenuItem, Typography } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MyButton from '../MyButton/MyButton';
import AddIcon from '@mui/icons-material/Add';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

interface NewUserFormProps {
    // title: string;
    // icon?: React.ReactNode;
    handleClose: Function;
}

const NewUserForm: React.FC<NewUserFormProps> = ({ handleClose }) => {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    return (
        <Box
            component='form'
            sx={
                {
                    display: 'flex',
                    flexDirection: 'column'
                }
            }
            noValidate
            autoComplete='off'
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <Typography variant='h6' fontWeight={600}>
                    Създаване на потребител
                </Typography>
                <Button variant='text' onClick={() => handleClose()}>
                    <CancelOutlinedIcon sx={{ color: 'black', width: '20px', height: '20px' }} />
                </Button>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: {lg: 'row', xs: 'column'}, gap: '18px', marginBottom: '30px' }}>
                <TextField id='outlined-basic' label='Име' variant='outlined' sx={{width: '328px'}} />
                <TextField id='outlined-basic' label='Имейл' variant='outlined' sx={{width: '328px'}} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: {lg: 'row', xs: 'column'}, gap: '18px', marginBottom: '30px' }}>
                <TextField id='outlined-basic' label='Телефонен Номер' variant='outlined' sx={{width: '328px'}} />
                <FormControl sx={{width: '328px'}}>
                    <InputLabel id='demo-simple-select-label'>Age</InputLabel>
                    <Select
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        value={age}
                        label='Age'
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <div></div>
                <MyButton title='Създаване' icon={<AddIcon />} buttonFn={() => {}} />
            </Box>
        </Box>
    );
};

export default NewUserForm;
