import { Box, Button, Card, Container, FormControl, FormLabel, Menu, MenuItem, OutlinedInput, Select, Typography } from '@mui/material'
import React from 'react'

export default function createVersion() {
  return (
   <Container maxWidth='xl'>
    <Typography variant='h4' sx={{ mt: 2, textAlign: 'center', fontWeight: 'fontWeightBold' }} > Create Version</Typography>
        <Card sx={{ boxShadow: (theme) => theme.shadows[4], my: 2,p:3 }}>
            <FormControl fullWidth sx={{mb:2}}>
                <FormLabel variant="subtitle1" sx={{ color: 'text.secondary', fontWeight: 'fontWeightSemiBold', mt: 3, mb: 1 }}>Version Title</FormLabel>
                <OutlinedInput/>
            </FormControl>
            <FormControl fullWidth>
                <FormLabel variant="subtitle1" sx={{ color: 'text.secondary', fontWeight: 'fontWeightSemiBold', mt: 3, mb: 1 }}>Version Code</FormLabel>
                <OutlinedInput/>
            </FormControl>
            <FormControl fullWidth>
                <FormLabel variant="subtitle1" sx={{ color: 'text.secondary', fontWeight: 'fontWeightSemiBold', mt: 3, mb: 1 }}>Version Description</FormLabel>
                <OutlinedInput/>
            </FormControl>
            <FormControl fullWidth>
                <FormLabel variant="subtitle1" sx={{ color: 'text.secondary', fontWeight: 'fontWeightSemiBold', mt: 3, mb: 1 }}>Version Status</FormLabel>
                <Select defaultValue={'active'} >
                    <MenuItem value='active'>Active</MenuItem>
                    <MenuItem value='inactive'>Inactive</MenuItem>
                </Select>
            </FormControl>
            <Box  sx={{textAlign:'center'}} >
           <Button variant='contained' sx={{ bgcolor: 'linear-gradient(90deg, #2979ff 0%, #2979ff 100%)', p: 1.2,mt:4 }}  >Create Version</Button>

            </Box>
        </Card>
    </Container>

  )
}