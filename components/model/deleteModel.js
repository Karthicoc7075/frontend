import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Box,
    IconButton,
    Typography,
  } from '@mui/material';
  import { Close } from '@mui/icons-material';
  
  const Model = ({setShowModel}) => {
    
    
    return (
      <Dialog open={true} maxWidth="sm" fullWidth>
        <DialogTitle>Confirm the action</DialogTitle>
        <Box position="absolute" top={0} right={0}>
          
        </Box>
        <DialogContent>
          <Typography>some message here</Typography>
        </DialogContent>
        <DialogActions>
          <Button color="primary" variant="contained" onClick={()=>setShowModel(false)}>
            Cancel
          </Button>
          <Button color="error" variant="contained">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  
  export default Model;