import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Index() {
  return (
    <SafeAreaProvider>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
        }}>
        <h1>REGISTER</h1>
      </Box>

      <Box
        component="form"
        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, display: 'flex',
        flexDirection: 'column',
        alignItems: 'center' }}
        noValidate
        autoComplete="off"
        
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="First Name"
            
          />
          <TextField
            required
            id="outlined-required"
            label="Last Name"
            
          />
          <TextField
          required
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            
          />
          <TextField
            required
            id="outlined-required"
            label="Address"
            
          />
          <TextField
            required
            id="outlined-required"
            label="Country"
            
          />
          
        </div>



      </Box>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
        }}>
      <FormControlLabel required control={<Checkbox />} label="Terms and Agreement" />
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
        }}>
      <Button variant="contained" color="primary">
        Register
      </Button>
      </Box>




    </SafeAreaProvider>
  );
}
