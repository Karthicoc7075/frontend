import React, { useState } from 'react'
import { Container, Grid, Typography, Card, CardMedia, Button, Box, CircularProgress } from '@mui/material'
import { Link } from 'react-router-dom'
import Model from '../../components/model/model'


const Subjects = [
    {
        image: 'https://minimal-kit-react.vercel.app/assets/images/products/product_1.jpg',
        subjectName: 'Tamil',
    },
    {
        image: 'https://minimal-kit-react.vercel.app/assets/images/products/product_1.jpg',
        subjectName: 'English',
    },]

export default  function ViewSubject() {
    const [showModel, setShowModel] = useState(false)
    return (
        <Container maxWidth="xl"   >
            {showModel && <Model setShowModel={setShowModel} />}
            <Box sx={{ display: 'flex', my: 2 }}>
                <Typography variant='h5' sx={{ flexGrow: 1 }} >Subjects</Typography>

                <Button component={Link} to='/subject/create' variant='contained' sx={{ p: 1.2, bgcolor: 'linear-gradient(90deg, #2979ff 0%, #2979ff 100%)' }}   >ADD SUBJECT</Button>
            </Box>
            <Grid container spacing={2} sx={{ mt: 1 }}  >
                {Subjects.map((item, index) => (
                    <SubjectItem key={index} item={item} setShowModel={setShowModel} />
                ))}
            </Grid>
        </Container>
    )
}



function SubjectItem({ item, setShowModel }) {
    const [loader, setLoader] = useState(true)
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} >
            <Card
                sx={{
                    p: 1.5,
                    boxShadow: (theme) => theme.shadows[6],
                    borderRadius: 2,
                }}
            >
                <Box
                    component={'img'}
                    src={item.image}
                    onLoad={() => setLoader(false)}
                    sx={{
                        width: 1,
                        height: '150px',
                        objectFit: 'cover',
                        borderRadius: 1,
                        display: loader ? 'none' : 'block'
                    }} />
                {loader && <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                    <CircularProgress />
                </Box>}

                <Typography variant='subtitle1' sx={{ textAlign: 'center', my: 2 }} >{item.subjectName}</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}  >
                    <Button component={Link} to="/subject/update" variant='contained' sx={{ bgcolor: 'linear-gradient(90deg, #2979ff 0%, #2979ff 100%)' }} >
                        Edit
                    </Button>
                    <Button component={Link} variant='contained' sx={{ p: 1.2, bgcolor: 'linear-gradient(90deg, #2979ff 0%, #2979ff 100%)' }} onClick={() => setShowModel(true)}>
                        Delete
                    </Button>


                </Box>
            </Card>

        </Grid>
    )
}

