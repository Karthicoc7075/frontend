import { Box, Button, Card, CircularProgress, Container, FormControl, FormLabel, Menu, MenuItem, OutlinedInput, Select, Typography } from '@mui/material'
import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { createVersion } from '../../features/version/actions/versionActions'
import { loadingSelector } from '../../features/version/selectors/versionSelectors'
import { showToast } from '../../features/toast/actions/toastAction'

export default function CreateVersion() {
    const [title, setTitle] = useState(''); 
    const [code, setCode] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(true);
    const loading = useSelector(loadingSelector);
    const dispatch = useDispatch();


    useEffect(() => {
        if (loading) {
            setTitle('');
            setCode('');
            setDescription('');
            setStatus(true);
        }
    }, [loading]);

    const createVersionHandle = () => {
        if (title === '' || code === '' || description === '') {
            dispatch(showToast('All fields are required', 'error'));
            return;
        }
        const data = {
            title,
            code,
            description,
            status
        }
        dispatch(createVersion(data));
        
    }
return (
    <Container maxWidth='xl'>
        <Typography variant='h4' sx={{ mt: 2, textAlign: 'center', fontWeight: 'fontWeightBold' }} > Create Version</Typography>
        <Box sx={{display:'flex',justifyContent:'center'}} >
            <Card sx={{width:'860px', boxShadow: (theme) => theme.shadows[4], my: 2,p:3 }}>
                <FormControl fullWidth sx={{mb:2}}>
                    <FormLabel variant="subtitle1"  sx={{ color: 'text.secondary', fontWeight: 'fontWeightSemiBold', mt: 3, mb: 1 }}>Version Title</FormLabel>
                    <OutlinedInput value={title} onChange={(e) => setTitle(e.target.value)}/>
                </FormControl>
                <FormControl fullWidth>
                    <FormLabel variant="subtitle1" sx={{ color: 'text.secondary', fontWeight: 'fontWeightSemiBold', mt: 3, mb: 1 }}>Version Code</FormLabel>
                    <OutlinedInput value={code} onChange={(e) => setCode(e.target.value)}/>
                </FormControl>
                <FormControl fullWidth>
                    <FormLabel variant="subtitle1" sx={{ color: 'text.secondary', fontWeight: 'fontWeightSemiBold', mt: 3, mb: 1 }}>Version Description</FormLabel>
                    <OutlinedInput value={description} onChange={(e) => setDescription(e.target.value)}/>
                </FormControl>
                <FormControl fullWidth>
                    <FormLabel variant="subtitle1" sx={{ color: 'text.secondary', fontWeight: 'fontWeightSemiBold', mt: 3, mb: 1 }}>Version Status</FormLabel>
                    <Select value={status} onChange={(e) => setStatus(e.target.value)} defaultValue={'active'} >
                        <MenuItem value={true}>Active</MenuItem>
                        <MenuItem value={false}>Inactive</MenuItem>
                    </Select>
                </FormControl>
                <Box  sx={{textAlign:'center',mt:2}}  >
                    {loading ?
                <CircularProgress  />:
                <Button variant='contained' sx={{bgcolor:'linear-gradient(90deg, #2979ff 0%, #2979ff 100%)',p:1.2}} onClick={createVersionHandle}>Create Version</Button>    
                }
                </Box>
            </Card>
        </Box>
    </Container>
)
}