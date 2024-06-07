import React, { useState } from 'react'
import { Box, Card, Container, Typography, FormControl,Button,IconButton, alpha, OutlinedInput } from '@mui/material'
import uploadFileImage from '../../assets/icons/upload-.png'
import { Close } from '@mui/icons-material';

export default function UpdateMedium() {
    const [mediumName,setMediumName] = useState('')
    const [selectedImage, setSelectedImage] = React.useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };





const submitHandle = () =>{
    
    let formData = new FormData()
  
    formData.append('mediumName',mediumName)
    formData.append('file',selectedImage)

    console.log(...formData);
}


    return (
        <Container maxWidth='xl' >
            <Typography variant='h4' sx={{ mt: 2, textAlign: 'center', fontWeight: 'fontWeightBold' }} >
                Update Medium
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }} >

                <Card sx={{ py: 2, px: 3, maxWidth: '860px', width: '100%' }} >

                    <FormControl  fullWidth  >
                        <Typography variant='subtitle1' sx={{ color: 'text.secondary', fontWeight: 'fontWeightSemiBold', mb: 1 }}>Medium Name</Typography>
                        <OutlinedInput
                            value={mediumName}
                            onChange={(e)=>setMediumName(e.target.value)}
                            placeholder="Ex: Tamil"
                        />
                        <Typography variant='subtitle1' sx={{ color: 'text.secondary', fontWeight: 'fontWeightSemiBold', mt: 3, mb: 1 }}>Image</Typography>
                       
                        <Box
                            sx={{
                                position: 'relative',
                                p: '5px',
                                height: '100%',
                                bgcolor: theme => theme.palette.grey[200],
                                border:'2px dashed #DFE3E8',
                                overflow: 'hidden',
                                borderRadius: 1
                            }}
                        >
                            {!selectedImage &&
                                <Box
                                    sx={{
                                        p: 4,
                                    }}
                                >
                                    <input
                                        id="upload-file"
                                        type="file"
                                        onChange={handleImageChange}
                                        accept='image/*'
                                        style={{
                                            position: 'absolute',
                                            top:100,
                                            zIndex: 100,
                                            transform: 'scale(24)',
                                            opacity: 0,
                                            border: '1px solid red',

                                        }}
                                    />
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: 1,
                                        }}
                                    >
                                        <Box component='img' src={uploadFileImage} sx={{ width: {xs:'200px',sm:'320px'} }} />
                                        <Typography variant="subtitle1" mt={1}>
                                            Drop or Select File
                                        </Typography>
                                        <Typography variant="p" color={'text.disabled'} >
                                            Drop files here or click browase through your machine
                                        </Typography>
                                    </Box>
                                </Box>
                            }






                            {selectedImage && (
                                <Box position={'relative'} sx={{ lineHeight: 0 }}  >
                                    <Box
                                        component="img"
                                        src={selectedImage}
                                        sx={{ width: '100%', height: '320px', objectFit: 'cover', borderRadius: 1.2, }}
                                    />
                                    <IconButton
                                        sx={{
                                            position: 'absolute',
                                            top: 16,
                                            right: 16,
                                            width: 24,
                                            height: 24,
                                            p: 2,
                                            color: (theme) => theme.palette.grey[0],
                                            backgroundColor: (theme) => alpha(theme.palette.grey[600], .5),
                                            boxShadow:(theme)=>theme.shadows[8],
                                            backdropFilter: `blur(${6}px)`,
                                            WebkitBackdropFilter: `blur(${6}px)`,
                                            '&:hover': {
                                                background: theme => alpha(theme.palette.grey[700], .6)
                                            }
                                        }}
                                        onClick={() => setSelectedImage(null)}
                                    >
                                        <Close/>
                                    </IconButton>

                                </Box>
                            )}
                        </Box>

                        <Box textAlign={'center'}>
                       <Button onClick={()=>submitHandle()} variant='contained'  sx={{
                            mt:2,
                            background:theme => theme.palette.common.black,
                            width:'120px',
                            ':hover':{
                                background:theme => theme.palette.common.black,
                                opacity:.8
                            }
                        }} >Update</Button>
                       </Box>
                    </FormControl>
                </Card>
            </Box>
        </Container>
    )
}

