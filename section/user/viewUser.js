import React, { useEffect, useState } from 'react'
import { Container, Grid, Typography, Card, CardMedia, Button, Box, CircularProgress } from '@mui/material'
import { Link } from 'react-router-dom'
import userImage from '../../assets/icons/user.png'
import adminImage from '../../assets/icons/admin.png'

export default function ViewUser() {

    const [users, setUsers] = useState([
        {
            _id:'1',
            username:'test',
            email:'test@gmail.com',
            role:'admin',
            status:'active',
            image:'https://source.unsplash.com/random'
        },
        {
            _id:'2',
            username:'test',
            email:'test@gmail.com',
            role:'user',
            status:'active',
            image:'https://source.unsplash.com/random',
        }
    ])

    const loading = false
  return (
    <Container maxWidth="xl"   >
             
      
           
            <Box sx={{ display: 'flex', my: 2 }}>
                <Typography variant='h5' sx={{ flexGrow: 1 }} >Users</Typography>

                <Button component={Link} to='/user/create' variant='contained' sx={{ p: 1.2, bgcolor: 'linear-gradient(90deg, #2979ff 0%, #2979ff 100%)' }}   >ADD USER</Button>
            </Box>
            {
            loading ?
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }} >
                <CircularProgress />
            </Box>
            :
          <Box>
            {
                users.length > 0 ?
                <Grid container spacing={2} >
                    {
                        users.map((item, index) => (
                            <UserItem key={index} item={item} />
                        ))
                    }
                </Grid>
                :
                <Card sx={{ display:'flex',justifyContent:'center',alignItems:'center',height:'60vh' }}>
                  <Typography variant="h6" sx={{ textAlign: 'center' }} >No user found</Typography>
                </Card>
            }
          </Box>
}
        </Container>
           
  )
}


function UserItem({item}){
    return(
        <Grid item xs={12} sm={6} md={4} lg={3} >
            <Card
                sx={{
                    p: 1.5,
                    boxShadow: (theme) => theme.shadows[6],
                    borderRadius: 2,
                    height: "100%",
                }}
            >
                 <Box sx={{ my:1,py:.4,px:1.2,background:'#000',color:'#fff',fontSize:'12px' ,fontWeight:'bold',borderRadius:1.4,width:'fit-content' }} >
            {item.role}
        </Box>
               <Box
               sx={{
                     display:'flex',
                     justifyContent:'center',
                     alignItems:'center',
                     width:'100%',
               }}
               >
               <Box
                    component={'img'}
                    src={item.role == 'admin' ? adminImage : userImage}
                    sx={{
                        width: 1,
                        height: '150px',
                        width:'150px',
                        objectFit: 'cover',
                        borderRadius: 1,
                        display: 'block'
                    }} />
               </Box>
               

                <Typography variant='subtitle1' sx={{ textAlign: 'center', my: 2 }} >{item.username}</Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}  >
                    <Button component={Link} to={`/subject/update/${item._id}`} variant='contained' sx={{ bgcolor: 'linear-gradient(90deg, #2979ff 0%, #2979ff 100%)' }} >
                        Edit
                    </Button>
                    <Button  variant='contained' sx={{ p: 1.2, bgcolor: 'linear-gradient(90deg, #2979ff 0%, #2979ff 100%)' }} >
                        Delete
                    </Button>


                </Box>
            </Card>

        </Grid>
    )
}

