
import { Stack, TextField, Button, Container, FormLabel, Typography } from '@mui/material';
import React, { useState } from 'react';


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        // Perform login logic here
    };

    return (
        <Stack sx={{ background: '#e9ecef', height: '100vh' }} >
            <Container maxWidth='md' sx={{ display: 'flex', justifyContent: 'center' }} >
                <Stack sx={{
                    background: '#fff', mt: '8rem', maxWidth: '420px', width: '100%', p: 3,
                    boxShadow: (theme) => theme.shadows[4],
                    borderRadius: 2,
                }} >
                    <Typography variant='h3' sx={{
                        fontWeight: 'bold',
                        backgroundImage: 'linear-gradient(310deg, #2152FF, #21D4FD)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>Welcome back</Typography>
                    
                    <Typography variant='body2' sx={{ mb: 1, mt: 3, fontWeight: 'fontWeightSemiBold', color: 'black' }} >Username</Typography>
                    <TextField
                        variant="outlined"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                    <Typography variant='body2' sx={{ mb: 1, mt: 3, fontWeight: 'fontWeightSemiBold', color: 'black' }} >Password</Typography>
                    <TextField

                        variant="outlined"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <Button variant="contained" sx={{ mt: 5,p:1, background: 'linear-gradient(310deg, #2152FF, #21D4FD)', }} onClick={handleLogin} >
                        Login
                    </Button>
                </Stack>
            </Container>
        </Stack>
    );
}

export default Login;