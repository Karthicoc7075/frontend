import React, { useEffect,useState } from 'react'
import { Box,FormControl,FormLabel,OutlinedInput,Button } from '@mui/material'
import { useSelector } from 'react-redux'
import {getAuthSelector} from '../../features/auth/selectors/authSelector'

function MyProfile() {
  const [username, setUsername] = useState('')
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const getUser = useSelector(getAuthSelector)

console.log(getUser);
  useEffect(() => {
   if(getUser){
     setUsername(getUser.user.username)
   }
  }, [getUser])

  return (
    <Box  maxWidth={700} width={'100%'}>
    <FormControl fullWidth>
    <FormLabel sx={{mb:1,mt:2}}  >User Name</FormLabel>
    <OutlinedInput
    value={username ?? ''}
    />
    </FormControl>
    <FormControl fullWidth>
    <FormLabel  sx={{mb:1,mt:2}} >Old Password</FormLabel>
    <OutlinedInput/>
    </FormControl>
    <FormControl fullWidth>
    <FormLabel  sx={{mb:1,mt:2}} >New Password</FormLabel>
    <OutlinedInput/>
    </FormControl>
    <Box sx={{my:2,textAlign:'center'}}>
    <Button  variant='contained' sx={{ p: 1.2, bgcolor: 'linear-gradient(90deg, #2979ff 0%, #2979ff 100%)' }}  >Update</Button>

    </Box>
 </Box> 
  )
}

export default MyProfile