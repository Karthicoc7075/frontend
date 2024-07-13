import { Card, Container, FormControl, FormLabel, TextField,Select,MenuItem, InputLabel, Button, Box, Typography, CircularProgress } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { createClassSubject, getClass } from '../../features/class/actions/classActions'  
import { getClassSelector } from '../../features/class/selectors/classSelector'
import { getAllSubjects } from '../../features/subject/actions/subjectActions'
import { getSubjectsSelector,loadingSelector } from '../../features/subject/selectors/subjectSelectors'
import { useParams } from 'react-router-dom'

export default function CreateClassSubject() {
    const [Class, setClass] = React.useState('')
    const [subject,setSubject] = React.useState('')
    const [createLoading,setCreateLoading] = React.useState(false)
    const findClass = useSelector(getClassSelector)
    const subjects = useSelector(getSubjectsSelector)
    const classId = useParams().classId
    const loading = useSelector(loadingSelector)
    const dispatch = useDispatch()


    useEffect(() => {
        if(findClass){
            setClass(findClass.className)
        }
        
        if(!findClass){
            dispatch(getClass(classId))
        }
    }, [findClass])



    useEffect(() => {
        if(subjects.length == 0){
            dispatch(getAllSubjects())
        }

        
    }, [subjects])

    const handleSubmit = () => {
        if(!subject){
            return alert('Please select Subject')
        }
   
       
        setCreateLoading(true)
        dispatch(createClassSubject(findClass._id,subject))
        setSubject('')
    }


    return (
        <Container maxWidth='lg'  >
            <Typography variant='h4' sx={{ mt: 2, textAlign: 'center', fontWeight: 'fontWeightBold' }} >
                Create Class Subject
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Card sx={{p:4,maxWidth:'860px',width:'100%'}}>
              {
                loading  ?
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }} >
                    <CircularProgress />
                </Box>
                :
                <Box>
                      <FormControl fullWidth >
                    <FormLabel sx={{mb:2}} >ClassName</FormLabel>
                    <TextField value={Class} disabled />

                    <FormControl fullWidth sx={{mt:4}} >
                <FormLabel sx={{mb:2}} >SubjectName</FormLabel>
                <Select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    fullWidth
                    >
                    {
                        subjects.map((item,index) => (
                            <MenuItem key={index} value={item._id} >{item.subjectName}</MenuItem>
                        ))
                    }
                </Select>
                </FormControl>
                </FormControl>
              
                <Box textAlign={'center'}>
                       {loading && createLoading ?
                    <CircularProgress />
                    :
                    <Button  variant='contained'  sx={{
                        mt:2,
                        background:theme => theme.palette.common.black,
                        width:'120px',
                        ':hover':{
                            background:theme => theme.palette.common.black,
                            opacity:.8
                        }
                    
                    }}
                    onClick={handleSubmit}
                    >Sumbit</Button>
                    }
                    </Box>
                </Box>
              }
            </Card>
            </Box>
           
        </Container>
    )
}
