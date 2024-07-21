import React, { useEffect,useState } from 'react'
import { Box,FormControl,FormLabel,OutlinedInput,Button } from '@mui/material'
import { useSelector,useDispatch } from 'react-redux'
import { passwordChange } from '../../features/auth/actions/authActions'
import {getAuthSelector,updateLoadingSelector} from '../../features/auth/selectors/authSelector'
import { showToast } from '../../features/toast/actions/toastAction'

function MyProfile() {
  const [username, setUsername] = useState('')
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const getUser = useSelector(getAuthSelector)
  const updateLoading = useSelector(updateLoadingSelector)
  const dispatch = useDispatch()

console.log(getUser);
  useEffect(() => {
   if(getUser){
     setUsername(getUser.user.username)
   }
  }, [getUser])

  const handleUpdate = () => {
    if(oldPassword === '' || newPassword === ''){
      dispatch(showToast('Please fill all fields', 'error'))
    }
    
    dispatch(passwordChange({oldPassword,newPassword}))
  }

  return (
    <Box maxWidth={700} width={'100%'}>
      <FormControl fullWidth>
        <FormLabel sx={{ mb: 1, mt: 2 }}>User Name</FormLabel>
        <OutlinedInput
        disabled={true}
          value={username ?? ''}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormControl>
      <FormControl fullWidth>
        <FormLabel sx={{ mb: 1, mt: 2 }}>Old Password</FormLabel>
        <OutlinedInput
          value={oldPassword ?? ''}
          onChange={(e) => setOldPassword(e.target.value)}
        />
      </FormControl>
      <FormControl fullWidth>
        <FormLabel sx={{ mb: 1, mt: 2 }}>New Password</FormLabel>
        <OutlinedInput
          value={newPassword ?? ''}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </FormControl>
      <Box sx={{ my: 2, textAlign: 'center' }}>
        <Button
          variant='contained'
          sx={{ p: 1.2, bgcolor: 'linear-gradient(90deg, #2979ff 0%, #2979ff 100%)' }}
          onClick={handleUpdate}
        >
          Update
        </Button>
      </Box>
    </Box>
  );
}

export default MyProfile