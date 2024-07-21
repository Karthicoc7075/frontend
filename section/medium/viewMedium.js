import React, { useState,useEffect } from 'react'
import { Container, Grid, Typography, Card, CardMedia, Button, Box, CircularProgress } from '@mui/material'
import { Link } from 'react-router-dom'
import Model from '../../components/model/model'
import { useDispatch,useSelector } from 'react-redux'
import { getAllMediumsSelector,loadingSelector,deleteLoadingSelector } from '../../features/medium/selectors/mediumSelectors'
import {getAllMediums,deleteMedium} from '../../features/medium/actions/mediumActions'
import DeleteModel from '../../components/model/deleteModel'



export default function ViewMedium() {
    const [showModel, setShowModel] = useState(false)
    const [deleteId, setDeleteId] = useState(null)

    const mediums = useSelector(getAllMediumsSelector)
    const loading = useSelector(loadingSelector)
    const deleteLoading = useSelector(deleteLoadingSelector)
    const dispatch = useDispatch()



    useEffect(()=>{
        if(mediums.length === 0){
            dispatch(getAllMediums())
        }
        setShowModel(false)
    },[mediums])



    const deleteHandle = () =>{
        dispatch(deleteMedium(deleteId))
        setDeleteId(null)
    }

    return (
        <Container maxWidth="xl"   >
              <DeleteModel 
           showModel={showModel}
            setShowModel={setShowModel}
            deleteHandle={deleteHandle}
            data='Medium'
            desc="Deleting this media will delete all materials associated with this medium.Are you sure you want to delete this medium?"
            loading={deleteLoading}
           />
            
            <Box sx={{ display: 'flex', my: 2 }}>
                <Typography variant='h5' sx={{ flexGrow: 1 }} >Mediums</Typography>
                <Button component={Link} to='/medium/create' variant='contained' sx={{ p: 1.2, bgcolor: 'linear-gradient(90deg, #2979ff 0%, #2979ff 100%)' }}   >ADD MEDIUM</Button>
            </Box>
        {
            loading ? <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }} >
                <CircularProgress />
            </Box> :
            <Grid container spacing={2} >
                {mediums.map(item => <MediumItem key={item._id} item={item} setShowModel={setShowModel} setDeleteId={setDeleteId} />)}
            </Grid>
        }
        </Container>
    )
}



function MediumItem({ item, setShowModel,setDeleteId }){
    const [loader, setLoader] = useState(true)

    const deleteButtonClick=()=>{
        setDeleteId(item._id)
        setShowModel(true)
    }
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} >
            <Card
                sx={{
                    p: 1.5,
                    boxShadow: (theme) => theme.shadows[6],
                    borderRadius: 2,
                    height: '100%',
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
                {loader && <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '150px' }}>
                    <CircularProgress />
                </Box>}

                <Typography variant='subtitle1' sx={{ textAlign: 'center', my: 2 }} >{item.mediumName}</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}  >
                    <Button component={Link} to={`/medium/update/${item._id}`} variant='contained' sx={{ bgcolor: 'linear-gradient(90deg, #2979ff 0%, #2979ff 100%)' }} >
                        Edit
                    </Button>
                    <Button variant='contained' sx={{ p: 1.2, bgcolor: 'linear-gradient(90deg, #2979ff 0%, #2979ff 100%)' }} onClick={() => deleteButtonClick(  )}>
                        Delete
                    </Button>


                </Box>
            </Card>

        </Grid>
    )
}

