import React, { useEffect, useState } from 'react'
import { Container, Grid, Typography, Card, CardMedia, Button, Box, CircularProgress } from '@mui/material'
import { Link } from 'react-router-dom'
import DeleteModel from '../../components/model/deleteModel'
import { useSelector,useDispatch } from 'react-redux'
import {getSubjectsSelector,loadingSelector,deleteLoadingSelector} from '../../features/subject/selectors/subjectSelectors'
import {getAllSubjects,deleteSubject} from '../../features/subject/actions/subjectActions'

export default  function ViewSubject() {
    const [showModel, setShowModel] = useState(false)
    const [deleteId, setDeleteId] = useState(null)
    const subjects = useSelector(getSubjectsSelector)
    const loading = useSelector(loadingSelector)
    const deleteLoading = useSelector(deleteLoadingSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        if(subjects.length === 0){
             dispatch(getAllSubjects())
        }
        setShowModel(false)
        setDeleteId(null)

    }, [subjects])

    const deleteHandle = () => {
        dispatch(deleteSubject(deleteId))
    }

    

    return (
        <Container maxWidth="xl"   >
               <DeleteModel 
           showModel={showModel}
            setShowModel={setShowModel}
            deleteHandle={deleteHandle}
            data='Subject'
            desc="Deleting this subject will delete all  class subjects and materials associated with this subject.Are you sure you want to delete this subject?"
            loading={deleteLoading}
           />
      
           
            <Box sx={{ display: 'flex', my: 2 }}>
                <Typography variant='h5' sx={{ flexGrow: 1 }} >Subjects</Typography>

                <Button component={Link} to='/subject/create' variant='contained' sx={{ p: 1.2, bgcolor: 'linear-gradient(90deg, #2979ff 0%, #2979ff 100%)' }}   >ADD SUBJECT</Button>
            </Box>
            {
            loading ?
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }} >
                <CircularProgress />
            </Box>
            :
          <Box>
            {
                subjects.length > 0 ?
                <Grid container spacing={2} >
                    {
                        subjects.map((item, index) => (
                            <SubjectItem key={index} item={item} setShowModel={setShowModel} setDeleteId={setDeleteId} />
                        ))
                    }
                </Grid>
                :
                <Card sx={{ display:'flex',justifyContent:'center',alignItems:'center',height:'60vh' }}>
                  <Typography variant="h6" sx={{ textAlign: 'center' }} >No subject found</Typography>
                </Card>
            }
          </Box>
}
        </Container>
           
    )
}



function SubjectItem({ item, setShowModel,setDeleteId }) {
    const [loader, setLoader] = useState(true)


    const deleteButtonClick = (id) => {
        setShowModel(true)
        setDeleteId(id)
        console.log(id);
    }

    return (
        <Grid item xs={12} sm={6} md={4} lg={3} >
            <Card
                sx={{
                    p: 1.5,
                    boxShadow: (theme) => theme.shadows[6],
                    borderRadius: 2,
                    height: "100%",
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

                <Typography variant='subtitle1' sx={{ textAlign: 'center', my: 2 }} >{item.subjectName}</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}  >
                    <Button component={Link} to={`/subject/update/${item._id}`} variant='contained' sx={{ bgcolor: 'linear-gradient(90deg, #2979ff 0%, #2979ff 100%)' }} >
                        Edit
                    </Button>
                    <Button  variant='contained' sx={{ p: 1.2, bgcolor: 'linear-gradient(90deg, #2979ff 0%, #2979ff 100%)' }} onClick={() => deleteButtonClick(item._id)}>
                        Delete
                    </Button>


                </Box>
            </Card>

        </Grid>
    )
}

