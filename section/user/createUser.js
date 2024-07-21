import React, { useState } from 'react'
import { Box, Card, Container, Typography, FormControl,Button,IconButton, alpha, OutlinedInput, CircularProgress, Select, MenuItem} from '@mui/material'


export default function CreateUser() {
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [role,setRole] = useState('user')
    const [active,setActive] = useState('active')


    const createUser = () => {
        console.log(
            username,
            email,
            password,
            role,
            active
        )
    }
return (
    <Container maxWidth='xl' >
    <Typography variant='h4' sx={{ mt: 2, textAlign: 'center', fontWeight: 'fontWeightBold' }} >
            Create User
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }} >

            <Card sx={{ py: 2, px: 3, maxWidth: '860px', width: '100%' }} >

                    <FormControl  fullWidth   >
                            <Typography variant='subtitle1' sx={{ color: 'text.secondary', fontWeight: 'fontWeightSemiBold', mb: 1,mt:3 }}>UserName</Typography>
                            <OutlinedInput
                                    value={username}
                                    onChange={(e)=>setUsername(e.target.value)}
                                    placeholder="Ex: John"
                            />
                         
                         </FormControl>
                            <FormControl  fullWidth  >
                             <Typography variant='subtitle1' sx={{ color: 'text.secondary', fontWeight: 'fontWeightSemiBold', mb: 1,mt:3 }}>Email</Typography>
                             <OutlinedInput
                                        value={email}
                                        onChange={(e)=>setEmail(e.target.value)}
                                        placeholder="Ex: example@example.com"
                             />
                            </FormControl>
                            <FormControl  fullWidth  >
                             <Typography variant='subtitle1' sx={{ color: 'text.secondary', fontWeight: 'fontWeightSemiBold', mb: 1,mt:3 }}>Password</Typography>
                             <OutlinedInput
                                        value={password}
                                        onChange={(e)=>setPassword(e.target.value)}
                                        placeholder="Enter password"
                             />
                            </FormControl>
                            <FormControl  fullWidth  >
                             <Typography variant='subtitle1' sx={{ color: 'text.secondary', fontWeight: 'fontWeightSemiBold', mb: 1,mt:3 }}>Role</Typography>
                             <Select defaultValue={role} onChange={(e)=>setRole(e.target.value)} >
                                <MenuItem value='user'>User</MenuItem>
                                <MenuItem value='admin'>Admin</MenuItem>
                             </Select>
                            </FormControl>
                            <FormControl  fullWidth sx={{mb:2}} >
                             <Typography variant='subtitle1' sx={{ color: 'text.secondary', fontWeight: 'fontWeightSemiBold', mb: 1,mt:3 }}>Status</Typography>
                                <Select defaultValue={active} onChange={(e)=>setActive(e.target.value)} >
                                    <MenuItem value={'active'}>Active</MenuItem>
                                    <MenuItem value={'inactive'}>Inactive</MenuItem>
                                </Select>
                            </FormControl>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center'    ,
                                mb:2
                            }} >
                                <Button variant='contained' sx={{ p: 1.2, bgcolor: 'linear-gradient(90deg, #2979ff 0%, #2979ff 100%)', mt: 2 }} onClick={()=>createUser()} >Create User</Button>
                            </Box>
            </Card>
    </Box>
</Container>
)
}

