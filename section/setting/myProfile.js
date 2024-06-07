import React from 'react'
import { Box,FormControl,FormLabel,OutlinedInput,Button } from '@mui/material'

function myProfile() {
  return (
    <Box  maxWidth={700} width={'100%'}>
    <FormControl fullWidth>
    <FormLabel sx={{mb:1,mt:2}} >User Name</FormLabel>
    <OutlinedInput />
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

export default myProfile