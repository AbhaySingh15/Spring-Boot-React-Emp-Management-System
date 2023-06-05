import React, {useState} from 'react';
import { TextField, Button} from '@mui/material';
import Box from "@mui/material/Box";
import axios from "axios";
import {baseURL} from "../employeeApiUrl";

const AddEmployeeForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    // const [dateOfBirth, setDateOfBirth] = useState('')
    // const [password, setPassword] = useState('')

    async function addEmployee(event){
    try{
      const response = await axios.post(baseURL + "/api/employees",{
          firstName: firstName,
          lastName: lastName,
          email: email
      });
      console.log(response);
    }catch (error){
      console.log("couldn't add employee")
    }
  }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(firstName, lastName, email)
        addEmployee(event);
    }

    return (
        <>
            <h2>Register Form</h2>
            <form onSubmit={handleSubmit}>
                {/*<Stack spacing={2} direction="row" sx={{marginBottom: 4}}>*/}
                <Box sx={{display:'flex',justifyContent:'center'}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='primary'
                        label="First Name"
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName}
                        required
                        sx={{mx:2,mb:2}}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='primary'
                        label="Last Name"
                        onChange={e => setLastName(e.target.value)}
                        value={lastName}
                        required
                    />
                </Box>
                {/*</Stack>*/}
                <TextField
                    type="email"
                    variant='outlined'
                    color='primary'
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    required
                    sx={{mb: 2}}
                />
                {/*<TextField*/}
                {/*    type="password"*/}
                {/*    variant='outlined'*/}
                {/*    color='secondary'*/}
                {/*    label="Password"*/}
                {/*    onChange={e => setPassword(e.target.value)}*/}
                {/*    value={password}*/}
                {/*    required*/}
                {/*    fullWidth*/}
                {/*    sx={{mb: 4}}*/}
                {/*/>*/}
                {/*<TextField*/}
                {/*    type="date"*/}
                {/*    variant='outlined'*/}
                {/*    color='secondary'*/}
                {/*    label="Date of Birth"*/}
                {/*    onChange={e => setDateOfBirth(e.target.value)}*/}
                {/*    value={dateOfBirth}*/}
                {/*    fullWidth*/}
                {/*    required*/}
                {/*    sx={{mb: 4}}*/}
                {/*/>*/}
                <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',mb:2}}>
                <Button variant="contained" color="primary" type="submit">Register</Button>
                </Box>
            </form>
        </>
    )
}

export default AddEmployeeForm;
