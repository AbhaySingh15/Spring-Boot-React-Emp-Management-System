import * as React from 'react';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";

export default function AddUserButton() {
    return (
        <Box sx={{my: 2,mb: 7,justifyContent:'center'}}>
            <Button variant='contained' type={'submit'}>
               Add User
            </Button>
        </Box>
    );
}
