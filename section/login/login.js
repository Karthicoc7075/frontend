
import { Stack, TextField, Button, Container, FormLabel, Typography, CircularProgress, Box } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../features/auth/actions/authActions';
import { loadingSelector } from '../../features/auth/selectors/authSelector';
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const loading = useSelector(loadingSelector)
    const dispatch = useDispatch();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
//          if(!username || !password) {
// alert('Please enter username and password');
//         }

        dispatch(login(username, password));
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
                    
                    <Box sx={{display:'flex',justifyContent:'center',mt:4}} >
                        
                        {
                       loading ?
                       <CircularProgress />
                       :
                       <Button variant="contained" sx={{p:1,width:'100%', background: 'linear-gradient(310deg, #2152FF, #21D4FD)', }} onClick={handleLogin} >
                        Login
                    </Button>
                    } 
                     </Box>
                </Stack>
            </Container>
        </Stack>
    );
}

export default Login;