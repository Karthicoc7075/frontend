import React, { useState } from 'react'
import { Container, Grid, Typography, Card, CardMedia, Button, Box, CircularProgress, Avatar, Rating, IconButton, Menu, MenuItem } from '@mui/material'
import { Link } from 'react-router-dom'
import Model from '../../components/model/model'
import AvatarImg from '../../assets/avatar_25.jpg'
import { GridMenuIcon } from '@mui/x-data-grid'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Reviews } from '@mui/icons-material'

const reviews = [
  {
    username: 'John Doe',
    comment: 'This is a good product',
    time: '2 days ago'
  },
  {
    username: 'John Doe',
    comment: 'This is a good product',
    time: '2 days ago'
  }]

export default function ViewReview() {
  const [showModel, setShowModel] = useState(false)

  return (
    <Container maxWidth="xl"   >
      {showModel && <Model setShowModel={setShowModel} />}
      <Box sx={{ display: 'flex', my: 2 }}>
        <Typography variant='h5' sx={{ flexGrow: 1 }} >Reviews</Typography>
        
      </Box>
      <Grid container spacing={2} sx={{ mt: 1 }}  >
        {reviews.map((item, index) => (
          <ReviewItem key={index} item={item} setShowModel={setShowModel} />
        ))}
      </Grid>
    </Container>
  )
}



function ReviewItem({ item, setShowModel }){
  const [loader, setLoader] = useState(true)

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
    console.log(Boolean(event.currentTarget));
  };

  const handleClose = () => {
    setAnchorEl(null);
    setShowModel(true)
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} >
      <Card
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          columnGap: 2,
          py: 2,
          px: 2,
          boxShadow: (theme) => theme.shadows[6],
          borderRadius: 2,
        }}
      >
        <Avatar sx={{ width: 50, height: 50, }} src={AvatarImg} />

        <Box sx={{ py: 1 }} >
          <Typography variant='subtitle1' >{item.username}</Typography>
          <Rating sx={{ py: 1 }} name="read-only" value={2} readOnly />
          <Typography variant='subtitle1' >{item.comment}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <IconButton id="long-button" onClick={handleClick}>
            <MoreHorizIcon />
          </IconButton>
          <Typography variant='body2'>{item.time}</Typography>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'long-button',
            }}
          >
            <MenuItem onClick={handleClose}>Delete</MenuItem>
          </Menu>
        </Box>
      </Card>

    </Grid>
  )
}

