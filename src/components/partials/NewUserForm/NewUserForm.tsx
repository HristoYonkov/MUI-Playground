import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface NewUserFormProps {
    // title: string;
    // icon?: React.ReactNode;
    // buttonFn: Function;
}

const NewUserForm: React.FC<NewUserFormProps> = ({}) => {
    return (
        <Box
            component='form'
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete='off'
        >
            <TextField id='outlined-basic' label='Име' variant='outlined' />
            <TextField id='outlined-basic' label='Имейл' variant='outlined' />
            <TextField id='outlined-basic' label='Телефонен Номер' variant='outlined' />
            <TextField id='outlined-basic' label='Роля' variant='outlined' />
        </Box>
    );
};

export default NewUserForm;
