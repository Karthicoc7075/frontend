import { Box, Button, Card, CircularProgress, Container, Paper, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllVersions, deleteVersion } from '../../features/version/actions/versionActions';
import { loadingSelector,deleteLoadingSelector,getAllVersionSelector } from '../../features/version/selectors/versionSelectors';
import DeleteModel from '../../components/model/deleteModel';   



export default function ViewVersion() {
  const [showModel, setShowModel] = useState(false)
  const dispatch = useDispatch();
  const [deleteId, setDeleteId] = useState(null);
  const versions = useSelector(getAllVersionSelector);
  const loading = useSelector(loadingSelector);
  const deleteLoading = useSelector(deleteLoadingSelector);

  useEffect(() => {
   if(versions.length === 0){
    dispatch(getAllVersions());
   }
  }, []);


useEffect(() => {
    setShowModel(false);
  }, [deleteLoading]);

  const handleDelete = () => {
    dispatch(deleteVersion(deleteId));
  };
    
    
  return (
    <Container  maxWidth='xl'>  

      <DeleteModel
        showModel={showModel}
        setShowModel={setShowModel}
        deleteHandle={handleDelete}
        data='Version'
        loading={deleteLoading}
      />
       <Box sx={{display:'flex',my:2}}>
        <Typography variant='h5' sx={{ flexGrow: 1 }} >Versions</Typography>
        <Button component={Link} to='/version/create'  variant='contained' sx={{ bgcolor: 'linear-gradient(90deg, #2979ff 0%, #2979ff 100%)', p: 1.2 }}  >Add Version</Button>

        </Box>

      <Card sx={{ boxShadow: (theme) => theme.shadows[4], my: 2 }}>
       {
        loading ?

        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center', height:'50dvh' }}>
          <CircularProgress/>
        </Box>:
        <Box>
          {
            versions.length > 0 ?
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell align='center'>Code</TableCell>
                    <TableCell align='center'>Description</TableCell>
                    <TableCell align='center'>Status</TableCell>
                    <TableCell align='center'>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {versions.map((item) => (
                    <VersionItem key={item._id} item={item} setShowModel={setShowModel} setDeleteId={setDeleteId} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer> :
            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',height:'50dvh' }}>
              <Typography variant='h6' >No Versions Found</Typography>
            </Box>
          }
          </Box>
       }
        </Card>
    </Container>
  )
}

function VersionItem({ item,setShowModel,setDeleteId }) {
  
  const deleteButtonClick = (id) => {
    setShowModel(true);
    setDeleteId(id);
  }
  return (
    <TableRow key={item.title}>
      <TableCell >
        {item.title}
      </TableCell>
      <TableCell align='center'>{item.code}</TableCell>
      <TableCell align='center'>{item.description}</TableCell>
      <TableCell align='center' sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Box sx={{ my:1,py:.4,px:1.2,background:'#000',color:'#fff',fontSize:'12px' ,fontWeight:'bold',borderRadius:1.4,width:'fit-content' }} >
            {item.status ? 'Active' : 'Inactive'}
        </Box>
      </TableCell>
      <TableCell align='center'>
        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }} >
          <Button component={Link} to={`update/${item._id}`} variant='contained' sx={{ bgcolor: 'linear-gradient(90deg, #ff1744 0%, #ff1744 100%)', p: 1.2 }}  >Edit</Button>
          <Button variant='contained' sx={{ bgcolor: 'linear-gradient(90deg, #ff1744 0%, #ff1744 100%)', p: 1.2 }} onClick={()=>deleteButtonClick(item._id)}  >Delete</Button>
        </Box>
      </TableCell>
    </TableRow>
  );
}