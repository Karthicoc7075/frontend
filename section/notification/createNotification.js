import { Close } from '@mui/icons-material'
import { Box, Button, Card, Container, FormControl, FormLabel, IconButton, Menu, MenuItem, OutlinedInput, Select, Typography, alpha } from '@mui/material'
import React, { useState } from 'react'
import uploadFileImage from '../../assets/icons/upload-.png'


export default function CreateNotification() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [SliderType, setSliderType] = useState('link')
    const [selectedImage, setSelectedImage] = useState('');


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
  return (
    <Container maxWidth="xl">
        <Typography variant='h4' sx={{textAlign:'center',fontWeight:'bold',mb:2}}>Create Notification</Typography>
        
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',my:2}}>
        <Card sx={{ py: 2, px: 3, maxWidth: '860px', width: '100%' }}>
            <FormControl fullWidth>
                <FormLabel variant="subtitle1" sx={{ color: 'text.secondary', fontWeight: 'fontWeightSemiBold', mt: 3, mb: 1 }}>Notification Title</FormLabel>  
                <OutlinedInput />
            </FormControl>
            <FormControl fullWidth>
                <FormLabel variant="subtitle1" sx={{ color: 'text.secondary', fontWeight: 'fontWeightSemiBold', mt: 3, mb: 1 }}>Notification description</FormLabel>  
                <OutlinedInput />
            </FormControl> 
            <FormControl fullWidth>
                <FormLabel variant="subtitle1" sx={{ color: 'text.secondary', fontWeight: 'fontWeightSemiBold', mt: 3, mb: 1 }}>Notification Image Type</FormLabel>  
                <Select defaultValue={SliderType} onChange={(e)=>setSliderType(e.target.value)} >
                    <MenuItem value='upload' >Upload</MenuItem>
                    <MenuItem value='link' >Link</MenuItem>
                </Select>
            </FormControl>
            {SliderType === 'link' && (
                <FormControl fullWidth>
                    <FormLabel variant="subtitle1" sx={{ color: 'text.secondary', fontWeight: 'fontWeightSemiBold', mt: 3, mb: 1 }}>Notification Image Url</FormLabel>  
                    <OutlinedInput placeholder='Ex: https://google.com/images' />
                </FormControl>
            )}
            {SliderType === 'upload' && (
                
                <Box
                sx={{
                    position: 'relative',
                    my:2,
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

               
            )}

            <Box sx={{width:'100%',textAlign:'center'}} >
            <Button variant='contained' sx={{ bgcolor: 'linear-gradient(90deg, #2979ff 0%, #2979ff 100%)', p: 1.2, mt: 2 }}  >Create Notification</Button>

            </Box>
        </Card>
        </Box>
    </Container>
  )
}