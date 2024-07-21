import React, { useState,useEffect } from 'react'
import { Container, Grid, Typography, Card, CardMedia, Button, Box, CircularProgress } from '@mui/material'
import { Link } from 'react-router-dom'
import DeleteModel from "../../components/model/deleteModel";
import { useDispatch, useSelector } from "react-redux";
import { getAllLanguages,deleteLanguage} from "../../features/language/actions/languageActions";
import { getAllLanguageSelector, loadingSelector, deleteLoadingSelector } from "../../features/language/selectors/languageSelectors";




export default function ViewLanguage() {
    const [showModel, setShowModel] = useState(false);
  const languages = useSelector(getAllLanguageSelector);
  const dispatch = useDispatch();
  const [deleteId, setDeleteId] = useState(null);
  const loading = useSelector(loadingSelector);
  const deleteLoading = useSelector(deleteLoadingSelector);

  useEffect(() => {
    if (languages.length === 0) {
      dispatch(getAllLanguages());
    }

  }, []);


  useEffect(()=>{
    if(!deleteLoading){
      setShowModel(false)
    }
  },[deleteLoading])

  const deleteHandle = () => {
    dispatch(deleteLanguage(deleteId,{deleteAutomatic:false}));
    setDeleteId(null);
  }

    const deleteAllHandle = () => {
        dispatch(deleteLanguage(deleteId,{deleteAutomatic:true}));
        setDeleteId(null);
      }

    return (
        <Container maxWidth="xl"   >
                   <DeleteModel 
           showModel={showModel}
            setShowModel={setShowModel}
            deleteAllHandle={deleteAllHandle}
            deleteHandle={deleteHandle}
            data='Language'
            desc="Deleting this language will delete all news associated with this language.Are you sure you want to delete this lanague?"
            loading={deleteLoading}
           />
<Box sx={{display:'flex',my:2}}>
                <Typography variant='h5' sx={{ flexGrow: 1 }} >Languages</Typography>
                <Button component={Link} to='/language/create' variant='contained'  sx={{ p: 1.2, bgcolor: 'linear-gradient(90deg, #2979ff 0%, #2979ff 100%)' }}   >ADD LANGUAGE</Button>
            </Box>
            {loading ? <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }} >
        <CircularProgress />
      </Box> :
            <Grid container spacing={2} sx={{ mt: 1 }}  >
                {
                    languages.map((item, index) => (
                        <LanguageItem key={index} item={item} setShowModel={setShowModel} setDeleteId={setDeleteId} />
                    ))
                }
            </Grid>
}
        </Container>
    )
}



function LanguageItem({ item,setShowModel,setDeleteId }){
    const [loader, setLoader] = useState(true)
    const deleteButtonClick = () => {
        setShowModel(true);
        setDeleteId(item._id);
      }
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} >
            <Card
                sx={{
                    p:1.5,
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

                <Typography variant='subtitle1' sx={{ textAlign: 'center', my: 2 }} >{item.languageName}</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}  >
                    <Button component={Link} to={`/language/update/${item._id}`} variant='contained' sx={{  bgcolor: 'linear-gradient(90deg, #2979ff 0%, #2979ff 100%)' }} >
                        Edit
                    </Button>
                    <Button   onClick={deleteButtonClick}  variant='contained' sx={{ p: 1.2, bgcolor: 'linear-gradient(90deg, #2979ff 0%, #2979ff 100%)' }} >
                        Delete
                    </Button>


                </Box>
            </Card>

        </Grid>
    )
}

