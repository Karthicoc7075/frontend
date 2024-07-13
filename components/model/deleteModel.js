import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  IconButton,
  Typography,
  Card,
  CircularProgress,
} from '@mui/material';
import { Close } from '@mui/icons-material';

const deleteModel = ({showModel,setShowModel,deleteAllHandle,deleteHandle,data,desc,loading} ) => {
  
  return (
   <Dialog open={showModel}>
    {
      !loading ?
      <Box  >
      <DialogTitle>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
          <Typography variant='h6' >Delete {data}</Typography>
          <IconButton onClick={() => setShowModel(false)} >
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Typography variant='body1' >
          {desc ? desc  : 'Are you sure you want to delete this {data}?'}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setShowModel(false)} color="primary">
          Cancel
        </Button>
        <Button onClick={deleteAllHandle} color="secondary">
          Delete All automatically
        </Button>
        <Button onClick={deleteHandle} color="secondary">
          Delete Manually
        </Button>
      </DialogActions>
    </Box>:
 
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p:2 }} ><CircularProgress /></Box>
    
    }
   </Dialog  >
  );
};

export default deleteModel;