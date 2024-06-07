import React, { useState } from 'react'
import { Container, Grid, Typography, Card, CardMedia, Button, Box, CircularProgress, Avatar, Rating, IconButton, Menu, MenuItem } from '@mui/material'
import { Link } from 'react-router-dom'
import Model from '../../components/model/model'
import AvatarImg from '../../assets/avatar_25.jpg'
import { GridMenuIcon } from '@mui/x-data-grid'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Review from '../review'

const Supports = [
  {
    image: AvatarImg,
    username: 'John Doe',
    message: 'This is a good product',
    days: '2 days ago'
  },
  {
    image: AvatarImg,
    username: 'John Doe',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor sit amet, consectetur adipiscing eli orem ipsum dolor sit amet, consectetur adipiscing eli orem ipsum dolor sit amet, consectetur adipiscing eli',
    days: '2 days ago'
  },
  {
    image: AvatarImg,
    username: 'John Doe',
    message: 'This is a good product',
    days: '2 days ago'
  },
  {
    image: AvatarImg,
    username: 'John Doe',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    days: '2 days ago'
  },
  {
    image: AvatarImg,
    username: 'John Doe',
    message: 'This is a good product',
    days: '2 days ago'
  },
  {
    image: AvatarImg,
    username: 'John Doe',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    days: '2 days ago'
  },
  {
    image: AvatarImg,
    username: 'John Doe',
    message: 'This is a good product',
    days: '2 days ago'
  },
  {
    image: AvatarImg,
    username: 'John Doe',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli lorem',
    days: '2 days ago'
  },
]

export default function ViewSupport() {
  const [showModel, setShowModel] = useState(false)
  return (
    <Container maxWidth="xl"   >
      <Typography variant='h5' sx={{ flexGrow: 1 }} >Supports</Typography>
      {showModel && <Model setShowModel={setShowModel} data={Supports[0]} />} 
      <Grid container spacing={2} sx={{ mt: 1 }}  >
        {
           Supports.map((item, index) => (
            <SupportItem key={index} item={item} setShowModel={setShowModel} />
          ))
        }
      </Grid>

    </Container>
  )
}

function SupportItem({ item, setShowModel }){
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
  };

  

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} >
      <Card
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          height: '100%',
          columnGap: 2,
          py: 2,
          px: 2,
          boxShadow: (theme) => theme.shadows[6],
          borderRadius: 2,
        }}
      >


        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, py: 1 }} >
          <Avatar sx={{ width: 50, height: 50, }} src={item.image} />
          <Typography variant='subtitle1' >{item.username}</Typography>

        </Box>
        <Typography variant='body2'  >
          {item.message.slice(0, 80)}<span style={{ color: '#2979ff' }} onClick={() => setShowModel(true)} >{item.message.length >=80 && '...Read more'}</span>
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <IconButton id="long-button" onClick={handleClick}>
            <MoreHorizIcon />
          </IconButton>
          <Typography variant='body2'>{item.days}</Typography>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'long-button',
            }}
          >
            <MenuItem onClick={handleClose}>Solve</MenuItem>
            <MenuItem onClick={handleClose}>Delete</MenuItem>
          </Menu>
        </Box>
      </Card>

    </Grid>
  )
}

