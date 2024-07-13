import React, { useEffect, useState } from 'react'
import { Container, Grid, Typography, Card, CardMedia, Button, Box, CircularProgress } from '@mui/material'
import { Link } from 'react-router-dom'
import DeleteModel from "../../components/model/deleteModel";
import { useDispatch, useSelector } from "react-redux";
import { deleteSlider,getAllSliders } from "../../features/slider/actions/sliderActions";
import { getAllSliderSelector , loadingSelector, deleteLoadingSelector } from "../../features/slider/selectors/sliderSelectors";

export default function ViewSlider() {
    const [showModel, setShowModel] = useState(false);
    const sliders = useSelector(getAllSliderSelector);
    const dispatch = useDispatch();
    const [deleteId, setDeleteId] = useState(null);
    const loading = useSelector(loadingSelector);
    const deleteLoading = useSelector(deleteLoadingSelector);

    useEffect(() => {
        if (sliders.length === 0) {
          dispatch(getAllSliders());
        }
    
        
      }, []);

      useEffect(()=>{
        if(!deleteLoading){
            setShowModel(false);
        }
      },[deleteLoading])
    
      const deleteHandle = () => {
        dispatch(deleteSlider(deleteId));
        setDeleteId(null);
      }
    

    return (
        <Container maxWidth="xl"   >
            <DeleteModel 
           showModel={showModel}
            setShowModel={setShowModel}
            deleteHandle={deleteHandle}
            data='Slider'
            loading={deleteLoading}
           />
            <Box sx={{ display: 'flex', my: 2 }}>
                <Typography variant='h5' sx={{ flexGrow: 1 }} >Sliders</Typography>
                <Button component={Link} to='/slider/create' variant='contained' sx={{ p: 1.2, bgcolor: 'linear-gradient(90deg, #2979ff 0%, #2979ff 100%)' }}   >ADD SLIDER</Button>
            </Box>
            {loading ? <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }} >
        <CircularProgress />
      </Box> :
            <Grid container spacing={2} sx={{ mt: 1 }}  >
                {sliders.map((item, index) => (
                    <SilderItem key={index} item={item} setShowModel={setShowModel} setDeleteId={setDeleteId}/>
                ))}
            </Grid>
}
        </Container>
    )
}



function SilderItem({ item, setShowModel,setDeleteId }){
    const [loader, setLoader] = useState(true)

    const deleteButtonClick = () => {
        setShowModel(true);
        setDeleteId(item._id);
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

                <Typography variant='subtitle1' sx={{ textAlign: 'center', my: 2 }} >{item.title}</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}  >
                    <Button component={Link} to={`/slider/update/${item._id}`} variant='contained' sx={{ bgcolor: 'linear-gradient(90deg, #2979ff 0%, #2979ff 100%)' }} >
                        Edit
                    </Button>
                    <Button onClick={deleteButtonClick} variant='contained' sx={{ p: 1.2, bgcolor: 'linear-gradient(90deg, #2979ff 0%, #2979ff 100%)' }}>
                        Delete
                    </Button>


                </Box>
            </Card>

        </Grid>
    )
}

