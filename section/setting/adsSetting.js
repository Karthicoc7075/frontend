import React from 'react'
import { Box,FormControl,FormLabel,OutlinedInput,Select,MenuItem,Button } from '@mui/material'
function adsSetting() {
  return (
    <Box  maxWidth={700} >
    <FormControl fullWidth>
    <FormLabel sx={{mb:1,mt:2}} >Ads Status</FormLabel>
    <Select defaultValue={true} >
       <MenuItem value={true}>On</MenuItem>
       <MenuItem value={false}>Off</MenuItem>
    </Select>
    </FormControl>
    <FormControl fullWidth>
    <FormLabel  sx={{mb:1,mt:2}} >Admob Banner Id</FormLabel>
    <OutlinedInput/>
    </FormControl>
    <FormControl fullWidth>
    <FormLabel  sx={{mb:1,mt:2}} >FB Banner Id</FormLabel>
    <OutlinedInput/>
    </FormControl>
    <FormControl fullWidth>
    <FormLabel  sx={{mb:1,mt:2}} >Interstitial Type</FormLabel>
    <OutlinedInput/>
    </FormControl>
    <FormControl fullWidth>
    <FormLabel  sx={{mb:1,mt:2}} >Interstitial Click Count</FormLabel>
    <OutlinedInput/>
    </FormControl>
    <FormControl fullWidth>
    <FormLabel  sx={{mb:1,mt:2}} >Admob Native Id</FormLabel>
    <OutlinedInput/>
    </FormControl>
    <FormControl fullWidth>
    <FormLabel  sx={{mb:1,mt:2}} >FB Native Id</FormLabel>
    <OutlinedInput/>
    </FormControl>
    <FormControl fullWidth>
    <FormLabel  sx={{mb:1,mt:2}} >Native Type</FormLabel>
    <OutlinedInput/>
    </FormControl>
    <FormControl fullWidth>
    <FormLabel  sx={{mb:1,mt:2}} >Native Count</FormLabel>
    <OutlinedInput/>
    </FormControl>
    <Box sx={{my:2,textAlign:'center'}}>
    <Button  variant='contained' sx={{ p: 1.2, bgcolor: 'linear-gradient(90deg, #2979ff 0%, #2979ff 100%)' }}  >Update</Button>

    </Box>
 </Box>
  )
}

export default adsSetting