import { Box, Button, Card, Container, Paper, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const versions = [
  {
    title: 'Version 1.0',
    code: '1.0',
    desc: 'This is a notification',
    status: true,
  },
  {
    title: 'Version 2.0',
    code: '2.0',
    desc: 'This is a notification',
    status: false,
  }
]

export default function ViewVersion() {

    
    
  return (
    <Container  maxWidth='xl'>  
       <Box sx={{display:'flex',my:2}}>
        <Typography variant='h5' sx={{ flexGrow: 1 }} >Versions</Typography>
        <Button component={Link} to='/version/create'  variant='contained' sx={{ bgcolor: 'linear-gradient(90deg, #2979ff 0%, #2979ff 100%)', p: 1.2 }}  >Add Version</Button>

        </Box>

      <Card sx={{ boxShadow: (theme) => theme.shadows[4], my: 2 }}>
        <TableContainer component={Paper} sx={{ p: 2 }}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead >
              <TableRow >
                <TableCell >Version title</TableCell>
                <TableCell align='center'>Code</TableCell>
                <TableCell align='center'>Message</TableCell>
                <TableCell align='center'>Status</TableCell>
                <TableCell align='center'>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
             {versions.map((item, index) => (
                <VersionItem key={index} item={item} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Card>
    </Container>
  )
}

function VersionItem({ item }) {
  return (
    <TableRow key={item.title}>
      <TableCell >
        {item.title}
      </TableCell>
      <TableCell align='center'>{item.code}</TableCell>
      <TableCell align='center'>{item.desc}</TableCell>
      <TableCell align='center' sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Box sx={{ my:1,py:.4,px:1.2,background:'#000',color:'#fff',fontSize:'12px' ,fontWeight:'bold',borderRadius:1.4,width:'fit-content' }} >
            {item.status ? 'Active' : 'Inactive'}
        </Box>
      </TableCell>
      <TableCell align='center'>
        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }} >
          <Button variant='contained' sx={{ bgcolor: 'linear-gradient(90deg, #ff1744 0%, #ff1744 100%)', p: 1.2 }}  >Approve</Button>
          <Button variant='contained' sx={{ bgcolor: 'linear-gradient(90deg, #ff1744 0%, #ff1744 100%)', p: 1.2 }}  >Delete</Button>
        </Box>
      </TableCell>
    </TableRow>
  );
}