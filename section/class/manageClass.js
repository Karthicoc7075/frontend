import { Container, Typography, Box, Card, Button, TableContainer } from '@mui/material'
import React, { useState } from 'react'
import { Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material'
import image from '../../assets/icons/product_1.jpg'
import { Link } from 'react-router-dom'
import Model from '../../components/model/model'


const classSubjects = [
    {
        image: image,
        className: 'Class 12',
    },
    {
        image: image,
        className: 'Class 11',
    }
]

export default function ManageClass() {
  const [showModel, setShowModel] = useState(false)
  return (
    <Container maxWidth='lg' >
      {showModel && <Model setShowModel={setShowModel} />}

      <Box sx={{ mb: 2, textAlign: 'end' }}>
        <Button component={Link} to='/class/subject/create' variant='contained' sx={{ p: 1.2, bgcolor: 'linear-gradient(90deg, #2979ff 0%, #2979ff 100%)' }}   >ADD CLASS</Button>
      </Box>
      {/* <Card sx={{display:'grid',placeItems:'center',p:4,height:'70dvh',boxShadow:theme=>theme.shadows[4]}} >
           <Box textAlign={'center'} >
           <Typography variant='h4' >No Subject Found</Typography>
            <Typography variant='p' color={'text.disabled'} >Add new subject first</Typography>
           </Box>
        </Card> */}
      <Card>
        <TableContainer component={Paper} style={{ overflowX: 'auto' }}>

          <Table aria-label="simple table">
            <TableHead >
              <TableRow >
                <TableCell align='center' sx={{  fontWeight: 'fontWeightSemiBold' }}>Image</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'fontWeightSemiBold' }}>Subject Name</TableCell>
                <TableCell align="center" sx={{  fontWeight: 'fontWeightSemiBold' }}>Option</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {
                classSubjects.map((item, index) => (
                     <SubjectItem key={index} item={item} setShowModel={setShowModel} />
                ))
            }

            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Container>
  )
}


function SubjectItem({ item, setShowModel }) {
  return (
    <TableRow >
      <TableCell  align='center' >
        <Box component={'img'} src={item.image}  sx={{ width: '140px', height: '80px', objectFit: 'cover',borderRadius:1 }} ></Box>
      </TableCell>
      <TableCell align="center">{item.className}</TableCell>
      <TableCell align="center"  >
      <Button component={Link} variant='contained' sx={{ bgcolor: 'linear-gradient(90deg, #2979ff 0%, #2979ff 100%)', p: 1.2 }} >Delete</Button>
      </TableCell>
    </TableRow>
  )
}