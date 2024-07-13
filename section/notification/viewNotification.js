import { Box, Button, Card, CircularProgress, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { getAllNotifications,deleteNotification } from '../../features/notification/actions/notificationActions';
import { getAllNotificationSelector,loadingSelector,deleteLoadingSelector } from '../../features/notification/selectors/notificationSelectors';
import DeleteModel from '../../components/model/deleteModel';
import moment from 'moment';


export default function ViewNotification() {
  const [showModel, setShowModel] = React.useState(false)
  const [deleteId, setDeleteId] = React.useState(null);
  const notifications = useSelector(getAllNotificationSelector);
  const loading = useSelector(loadingSelector);
  const deleteLoading = useSelector(deleteLoadingSelector);
  const dispatch = useDispatch();


  useEffect(()=>{
    if (notifications.length === 0) {
      dispatch(getAllNotifications());
    }
  
  },[])


  useEffect(()=>{
    setShowModel(false);
  
  },[deleteLoading])


  const deleteHandle = () => {
    dispatch(deleteNotification(deleteId));
    setDeleteId(null);
  }

  return (
    <Container maxWidth="lg">
      <DeleteModel
        showModel={showModel}
        setShowModel={setShowModel}
        deleteHandle={deleteHandle}
        data='Notification'
        loading={deleteLoading}
      />
      <Box sx={{ display: 'flex', my: 2 }}>
        <Typography variant='h5' sx={{ flexGrow: 1 }} >Notifications</Typography>
        <Button component={Link} to='/notification/create' variant='contained' sx={{ bgcolor: 'linear-gradient(90deg, #2979ff 0%, #2979ff 100%)', p: 1.2 }}  >Add Notification</Button>
      </Box>
      <Card
        sx={{
          boxShadow: (theme) => theme.shadows[4],
          my: 2
        }}
      >
      {loading ? <Box sx={{display:'flex',justifyContent:'center',alignItems:'center', height:'50dvh' }}>
        <CircularProgress/>
      </Box>:
      <Box>{notifications.length === 0 ? 
     <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',height:'40dvh'}} >
      <Typography variant='h5' sx={{p:2}}>No Notifications Found</Typography>
     </Box>:
      <TableContainer component={Paper} sx={{ p: 2 }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead >
          <TableRow >
            <TableCell sx={{ pl: 6 }} >Image</TableCell>
            <TableCell align='center'>Title</TableCell>
            <TableCell align='center'>Description</TableCell>
            <TableCell align='center'>Publish date</TableCell>
            <TableCell align='center'>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {notifications.map((item, index) => (
            <NotificationItem key={index} item={item}  setShowModel={setShowModel} setDeleteId={setDeleteId} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>}
    </Box>
     }
      </Card>
    </Container>

  )
}


function NotificationItem({ item,setShowModel,setDeleteId }) {
  const [loader, setLoader] = React.useState(true)


  const deleteButtonClick = () => {
    setShowModel(true);
    setDeleteId(item._id);
  }


  return (
    <TableRow>
      <TableCell>
       {loader && 
        <Box sx={{
          width: 140,
          height: 90,
          p:2
       }} >
         <CircularProgress  />
       </Box>}
        <Box
          component={'img'}
          src={item.image}
          onLoad={() => setLoader(false)}
          sx={{
            display: loader ? 'none' : 'block',
            width: 140,
            height: 90,
            objectFit: 'cover',
            borderRadius: 1,
          }}
        />
      </TableCell>
      <TableCell align='center'>{item.title}</TableCell>
      <TableCell align='center' sx={{maxWidth:'300px'}} >{item.description}</TableCell>
      <TableCell align='center'>{moment(item.createdAt).format('LL')}</TableCell>
      <TableCell align='center' >
       
        <Button onClick={deleteButtonClick} variant='contained' sx={{ bgcolor: 'linear-gradient(90deg, #2979ff 0%, #2979ff 100%)', p: 1.2 }} >Delete</Button>
      </TableCell>
    </TableRow>
  )
}
