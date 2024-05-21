import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { InputLabel, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MyButton from '../MyButton/MyButton';
import AddIcon from '@mui/icons-material/Add';

interface NewUserFormProps {
    // title: string;
    // icon?: React.ReactNode;
    // buttonFn: Function;
}

const NewUserForm: React.FC<NewUserFormProps> = ({}) => {
    const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
    return (
        <Box
            component='form'
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete='off'
        >
            <Box>
                Title - Button
            </Box>
            <TextField id='outlined-basic' label='Име' variant='outlined' />
            <TextField id='outlined-basic' label='Имейл' variant='outlined' />
            <TextField id='outlined-basic' label='Телефонен Номер' variant='outlined' />
            <FormControl fullWidth>
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
            <Box>
                <MyButton title='Създаване' icon={<AddIcon />} buttonFn={() => {}} />
            </Box>
        </Box>
    );
};

export default NewUserForm;
