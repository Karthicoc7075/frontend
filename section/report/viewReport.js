import { Box, Button, Card, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

export default function ViewReport() {


  const reports = [
    {
      title: 'Class 12',
      category: 'This is a notification',
      message: 'This is a notification',
      date: '2021-09-24',
    },
    {
      title: 'Class 11',
      category: 'This is a notification',
      message: 'This is a notification',
      date: '2021-09-24',
    }
  ]


  return (
    <Container maxWidth="xl" >
      <Typography variant='h4' sx={{ fontWeight: 'bold', my: 2 }}>Reports</Typography>
      <Card
        sx={{
          boxShadow: (theme) => theme.shadows[4],
          my: 2
        }}
      >
        <TableContainer component={Paper} sx={{ p: 2 }}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead >
              <TableRow >
                <TableCell >Title</TableCell>
                <TableCell align='center'>Categories</TableCell>
                <TableCell align='center'>Message</TableCell>
                <TableCell align='center'>Date</TableCell>
                <TableCell align='center'>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reports.map((item, index) => (
                <ReportItem key={index} item={item} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Container>
  )
}



function ReportItem({ item }) {
  return (
    <TableRow key={item.title}>
      <TableCell component="th" scope="row">
        {item.title}
      </TableCell>
      <TableCell align='center'>{item.category}</TableCell>
      <TableCell align='center'>{item.message}</TableCell>
      <TableCell align='center'>{item.date}</TableCell>
      <TableCell align='center'>
        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }} >
          <Button variant='contained' sx={{ bgcolor: 'linear-gradient(90deg, #ff1744 0%, #ff1744 100%)', p: 1.2 }}  >Approve</Button>
          <Button variant='contained' sx={{ bgcolor: 'linear-gradient(90deg, #ff1744 0%, #ff1744 100%)', p: 1.2 }}  >Delete</Button>
        </Box>
      </TableCell>
    </TableRow>
  );
}

