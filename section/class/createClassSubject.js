import { Card, Container, FormControl, FormLabel, TextField,Select,MenuItem, InputLabel, Button, Box, Typography } from '@mui/material'
import React from 'react'

export default function createClassSubject() {
    return (
        <Container maxWidth='lg'  >
            <Typography variant='h4' sx={{ mt: 2, textAlign: 'center', fontWeight: 'fontWeightBold' }} >
                Create Class Subject
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Card sx={{p:4,maxWidth:'860px',width:'100%'}}>
                <FormControl fullWidth >
                    <FormLabel sx={{mb:2}} >ClassName</FormLabel>
                    <TextField value={'Class 12'} disabled />


                   
                </FormControl>
                <FormControl fullWidth sx={{mt:4}} >
                <FormLabel sx={{mb:2}} >SubjectName</FormLabel>
                    <Select  // onChange={handleChange}
                    >
                        
                        <MenuItem value={10}>Tamil</MenuItem>
                        <MenuItem value={20}>English</MenuItem>
                        <MenuItem value={30}>Computer science</MenuItem>
                    </Select>
                </FormControl>
                <Box textAlign={'center'}>
                       <Button  variant='contained'  sx={{
                            mt:2,
                            background:theme => theme.palette.common.black,
                            width:'120px',
                            ':hover':{
                                background:theme => theme.palette.common.black,
                                opacity:.8
                            }
                        }} >Sumbit</Button>
                       </Box>
                
            </Card>
            </Box>
           
        </Container>
    )
}
