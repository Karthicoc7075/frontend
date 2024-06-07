import React from 'react'
import { Box,FormControl,FormLabel,OutlinedInput,Select,MenuItem,Button } from '@mui/material'
function appSetting() {
  return (
    <Box  maxWidth={700} >
    <FormControl fullWidth>
    <FormLabel sx={{mb:1,mt:2}} >App Name</FormLabel>
    <OutlinedInput />
    </FormControl>
    <FormControl fullWidth>
    <FormLabel  sx={{mb:1,mt:2}} >Maintance Mode</FormLabel>
    <Select defaultValue={false} >
       <MenuItem value={true}>On</MenuItem>
       <MenuItem value={false}>Off</MenuItem>
    </Select>
    </FormControl>
    <FormControl fullWidth>
    <FormLabel  sx={{mb:1,mt:2}} >Firebase Legacy server key</FormLabel>
    <OutlinedInput/>
    </FormControl>
    <FormControl fullWidth>
    <FormLabel  sx={{mb:1,mt:2}} >App Link</FormLabel>
    <OutlinedInput/>
    </FormControl>
    <FormControl fullWidth>
    <FormLabel  sx={{mb:1,mt:2}} >Privacy Policy</FormLabel>
    <textarea aria-label="empty textarea" placeholder="Empty" style={{maxWidth:'100%'}} />
    </FormControl>
    <Box sx={{my:2,textAlign:'center'}}>
    <Button  variant='contained' sx={{ p: 1.2, bgcolor: 'linear-gradient(90deg, #2979ff 0%, #2979ff 100%)' }}  >Update</Button>

    </Box>
 </Box> 
  )
}

export default appSetting