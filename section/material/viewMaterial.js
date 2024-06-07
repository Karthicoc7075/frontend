import React, { useState } from 'react'
import { Container, Grid, Typography, Card, Button, Box, CircularProgress, FormControlLabel, Switch } from '@mui/material'
import { Link } from 'react-router-dom'
import Model from '../../components/model/model'
import { Table, TableHead, TableRow, TableCell, TableBody, Paper, TableContainer } from '@mui/material'
import image from '../../assets/icons/404.png'
import Material from '../../pages/material/material'



const materials = [
  {
    image: image,
    class: 'Class 12',
    downloads: 1000,
    status: false
  },
  {
    image: image,
    class: 'Class 11',
    downloads: 1000,
    status: true
  },
  {
    image: image,
    class: 'Class 10',
    downloads: 1000,
    status: true
  },
  {
    image: image,
    class: 'Class 9',
    downloads: 1000,
    status: true
  },
  {
    image: image,
    class: 'Class 8',
    downloads: 1000,
    status: true
  },
]

export default function ViewMaterial() {
  const [showModel, setShowModel] = useState(false)

  return (
    <Container maxWidth="xl"   >
      {showModel && <Model setShowModel={setShowModel} />}
      <Box sx={{ display: 'flex', my: 2 }}>
        <Typography variant='h5' sx={{ flexGrow: 1 }} >Materials</Typography>
        <Button component={Link} to='/material/create' variant='contained' sx={{ p: 1.2, bgcolor: 'linear-gradient(90deg, #2979ff 0%, #2979ff 100%)' }}   >ADD MATERIAL</Button>
      </Box>
      <Card>
        <TableContainer component={Paper} style={{ overflowX: 'auto' }}>

          <Table aria-label="simple table">
            <TableHead >
              <TableRow >
                <TableCell sx={{ pl: 10, fontWeight: 'fontWeightSemiBold' }}>Image</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'fontWeightSemiBold' }}>Title</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'fontWeightSemiBold' }}>Views</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'fontWeightSemiBold', }}>Status</TableCell>
                <TableCell align="right" sx={{ pr: 10, fontWeight: 'fontWeightSemiBold' }}>Option</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                materials.map((item,index) => {
                  return <MaterialItem key={index} item={item} setShowModel={setShowModel} />

                })
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Container>
  )
}

function MaterialItem({ item, setShowModel }){
  const [loader, setLoader] = useState(true)
  return (
    <TableRow>
      <TableCell component="th" scope="row" sx={{ pl: 4 }}>
        <Box component={'img'} src={item.image} sx={{ width: 140, height: 90, borderRadius: 1, objectFit: 'cover' }} />
      </TableCell>
      <TableCell align="center" sx={{ paddingInline: '7rem' }}>{item.class}</TableCell>
      <TableCell align="center" sx={{ paddingInline: '7rem' }}>{item.downloads}</TableCell>
      <TableCell align="center" sx={{ paddingInline: '7rem' }}>
        <Switch checked={item.status} />
      </TableCell>
      <TableCell align="right" fullWidth sx={{ pr: 2 }}>
        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
          <Button component={Link} to='/material/update' variant='contained' sx={{ bgcolor: 'linear-gradient(90deg, #ff1744 0%, #ff1744 100%)', p: 1.2 }}>Edit</Button>
          <Button variant='contained' sx={{ bgcolor: 'linear-gradient(90deg, #ff1744 0%, #ff1744 100%)', p: 1.2 }} onClick={() => setShowModel(true)}>Delete</Button>
        </Box>
      </TableCell>
    </TableRow>
  )
}

