import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Box, Card, Container, Typography, FormControl, Button, IconButton, alpha, OutlinedInput, Select, MenuItem, FormLabel } from '@mui/material'
import uploadFileImage from '../../assets/icons/upload-.png'
import { Close } from '@mui/icons-material';

export default function CreateSlider() {
    const [title, setTitle] = useState('')
    const [SliderType, setSliderType] = useState('category')
    const [id, setId] = useState('')
    const [selectedImage, setSelectedImage] = React.useState(null);
    const selectCategoryData = ''
    const selectMaterialsData = ''
    const selectNewsData = ''

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

    const submitHandle = () => {

        let formData = new FormData()

        formData.append('title', title)
        formData.append('file', selectedImage)

        console.log(...formData);
    }


    const renderFormControl = (label, dataSelector) => {
        const data = []

        return (
            <FormControl fullWidth key={label}>
                <FormLabel variant="subtitle1" sx={{ color: 'text.secondary', fontWeight: 'fontWeightSemiBold',mt:3, mb: 1 }}>
                    {label}
                </FormLabel>
                <Select  >
                    {data.map((item) => (
                        <MenuItem key={item.id || item.name}>{item.categoryName || item.materialName || item.title}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        );
    };

    console.log(SliderType);
    return (
        <Container maxWidth='xl' >
            <Typography variant='h4' sx={{ mt: 2, textAlign: 'center', fontWeight: 'fontWeightBold' }} >
                Create Slider
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }} >

                <Card sx={{ py: 2, px: 3, maxWidth: '860px', width: '100%' }} >

                    <FormControl fullWidth  >
                        <Typography variant='subtitle1' sx={{ color: 'text.secondary', fontWeight: 'fontWeightSemiBold', mb: 1 }}>title</Typography>
                        <OutlinedInput
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Ex: Tamil"
                        />

                    </FormControl>
                    <FormControl fullWidth >
                        <FormLabel variant='subtitle1' sx={{ color: 'text.secondary', fontWeight: 'fontWeightSemiBold',mt:3, mb: 1 }}>SliderType</FormLabel>
                        <Select defaultValue={'category'} onChange={(e) => setSliderType(e.target.value)}>
                            <MenuItem value='category' >Category</MenuItem>
                            <MenuItem value='news' >News</MenuItem>
                            <MenuItem value='material'>Material</MenuItem>
                            <MenuItem value='link' >Link</MenuItem>
                            <MenuItem value='nothing' >Nothing</MenuItem>
                        </Select>
                    </FormControl>

                    {SliderType === 'category' && renderFormControl('Category', selectCategoryData)}
                    {SliderType === 'material' && renderFormControl('Material', selectMaterialsData)}
                    {SliderType === 'news' && renderFormControl('News', selectNewsData)}
                    {SliderType === 'link' && (
                        <FormControl fullWidth key="link">
                            <FormLabel variant="subtitle1" sx={{ color: 'text.secondary', fontWeight: 'fontWeightSemiBold', mb: 1,mt:3 }}>
                                Link
                            </FormLabel>
                            <OutlinedInput placeholder="Ex: https://www.google.com" />
                        </FormControl>
                    )}
                    <FormControl fullWidth >
                        <Typography variant='subtitle1' sx={{ color: 'text.secondary', fontWeight: 'fontWeightSemiBold', mt: 3, mb: 1 }}>Image</Typography>

                        <Box
                            sx={{
                                position: 'relative',
                                p: '5px',
                                height: '100%',
                                bgcolor: theme => theme.palette.grey[200],
                                border: '2px dashed #DFE3E8',
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
                                            top: 100,
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
                                        <Box component='img' src={uploadFileImage} sx={{ width: { xs: '200px', sm: '320px' } }} />
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
                                            boxShadow: (theme) => theme.shadows[8],
                                            backdropFilter: `blur(${6}px)`,
                                            WebkitBackdropFilter: `blur(${6}px)`,
                                            '&:hover': {
                                                background: theme => alpha(theme.palette.grey[700], .6)
                                            }
                                        }}
                                        onClick={() => setSelectedImage(null)}
                                    >
                                        <Close />
                                    </IconButton>

                                </Box>
                            )}
                        </Box>

                        <Box textAlign={'center'}>
                            <Button onClick={() => submitHandle()} variant='contained' sx={{
                                mt: 2,
                                background: theme => theme.palette.common.black,
                                width: '120px',
                                ':hover': {
                                    background: theme => theme.palette.common.black,
                                    opacity: .8
                                }
                            }} >Create</Button>
                        </Box>
                    </FormControl>
                </Card>
            </Box>
        </Container>
    )
}
