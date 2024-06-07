import { Box, Button, Card, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';




  const notifications = [
    {
      image: 'https://minimal-kit-react.vercel.app/assets/images/products/product_1.jpg',
      title: 'Class 12',
      description: 'This is a notification',
      publishDate: '2021-09-24',
    },
    {
      image: 'https://minimal-kit-react.vercel.app/assets/images/products/product_1.jpg',
      title: 'Class 11',
      description: 'This is a notification',
      publishDate: '2021-09-24',
    }
  ]

export default function ViewNotification() {

  return (
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', my: 2 }}>
        <Typography variant='h5' sx={{ flexGrow: 1 }} >Notifications</Typography>
        <Button component={Link} to='/notification/create' variant='contained' sx={{ bgcolor: 'linear-gradient(90deg, #2979ff 0%, #2979ff 100%)', p: 1.2 }}  >Add Notification</Button>
      </Box>
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
                <TableCell sx={{ pl: 6 }} >Image</TableCell>
                <TableCell align='center'>Title</TableCell>
                <TableCell align='center'>Description</TableCell>
                <TableCell align='center'>Publish date</TableCell>
                <TableCell align='center'>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {notifications.map((item, index) => (
                <NotificationItem key={index} item={item} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Container>

  )
}


function NotificationItem({ item }) {
  return (
    <TableRow>
      <TableCell>
        <Box
          component={'img'}
          src={item.image}
          sx={{
            width: 140,
            height: 90,
            objectFit: 'cover',
            borderRadius: 1,
          }}
        />
      </TableCell>
      <TableCell align='center'>{item.title}</TableCell>
      <TableCell align='center'>{item.description}</TableCell>
      <TableCell align='center'>{item.publishDate}</TableCell>
      <TableCell align='center' >
       
        <Button component={Link} variant='contained' sx={{ bgcolor: 'linear-gradient(90deg, #2979ff 0%, #2979ff 100%)', p: 1.2 }} >Delete</Button>
      </TableCell>
    </TableRow>
  )
}
