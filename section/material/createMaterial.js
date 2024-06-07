import React, { useState } from 'react'
import { Box, Card, Container, Typography, FormControl, Button, IconButton, alpha, OutlinedInput, Select, MenuItem, NativeSelect } from '@mui/material'
import uploadFileImage from '../../assets/icons/upload-.png'
import uploadFile from '../../assets/icons/file-upload.png'
import { Close } from '@mui/icons-material';

export default  function CreateMaterial() {
    const [title, setTitle] = useState('')
    const [classId, setClassId] = useState('')
    const [subjectId, SetSubjectId] = useState('')
    const [mediumId, setMediumId] = useState('')
    const [selectedImage, setSelectedImage] = React.useState(null);
    const [fileType, setFileType] = useState('')
    const [selectedFile, setSelectedFile] = useState(null)

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

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        setSelectedFile(file)
    }

    const submitHandle = () => {

        let formData = new FormData()

        formData.append('title', title)
        formData.append('file', selectedImage)

        console.log(...formData);
    }


    return (
        <Container maxWidth='xl' >
            <Typography variant='h4' sx={{ mt: 2, textAlign: 'center', fontWeight: 'fontWeightBold' }} >
                Create Material
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }} >

                <Card sx={{ py: 2, px: 3, maxWidth: '860px', width: '100%' }} >

                    <FormControl fullWidth   >
                        <Box>
                            <Typography variant='subtitle1' sx={{ color: 'text.secondary', fontWeight: 'fontWeightSemiBold', mb: 1 }}>Title</Typography>
                            <OutlinedInput
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Ex: Tamil"
                                fullWidth
                            />
                        </Box>
                    </FormControl>
                    <FormControl fullWidth >
                        <Box >
                            <Typography variant='subtitle1' sx={{ color: 'text.secondary', fontWeight: 'fontWeightSemiBold', mb: 1, mt: 2 }}>Class</Typography>
                            <Select fullWidth onChange={(e) => setClassId(e.target.value)} >
                                <MenuItem value={10}>Tamil</MenuItem>
                                <MenuItem value={20}>English</MenuItem>
                                <MenuItem value={30}>Computer science</MenuItem>
                            </Select>
                        </Box>
                    </FormControl>
                    <FormControl fullWidth>
                        <Box >
                            <Typography variant='subtitle1' sx={{ color: 'text.secondary', fontWeight: 'fontWeightSemiBold', mb: 1, mt: 2  }}>Subject</Typography>
                            <Select fullWidth disabled={classId ? false : true}>
                                <MenuItem value={10}>Tamil</MenuItem>
                                <MenuItem value={20}>English</MenuItem>
                                <MenuItem value={30}>Computer science</MenuItem>
                            </Select>
                        </Box>
                    </FormControl>
                    <FormControl fullWidth>
                        <Box >
                            <Typography variant='subtitle1' sx={{ color: 'text.secondary', fontWeight: 'fontWeightSemiBold', mb: 1, mt: 2  }}>Medium</Typography>
                            <Select fullWidth >
                                <MenuItem value={10}>Tamil</MenuItem>
                                <MenuItem value={20}>English</MenuItem>
                                <MenuItem value={30}>Computer science</MenuItem>
                            </Select>
                        </Box>
                    </FormControl>
                    <FormControl fullWidth >
                        <Box >
                            <Typography variant='subtitle1' sx={{ color: 'text.secondary', fontWeight: 'fontWeightSemiBold', mb: 1, mt: 2  }}>File Type</Typography>
                            <Select defaultValue={'UploadFile'} fullWidth onChange={(e) => setFileType(e.target.value)} >
                                <MenuItem value={'UploadFile'}>File Type</MenuItem>
                                <MenuItem value={'LinkFile'}>Link Type</MenuItem>

                            </Select>
                        </Box>
                    </FormControl>
                    <FormControl fullWidth >
                        {
                            fileType === 'LinkFile' ?
                                <Box  >
                                    <Typography variant='subtitle1' sx={{ color: 'text.secondary', fontWeight: 'fontWeightSemiBold', mb: 1, mt: 2  }}>File Link</Typography>
                                    <OutlinedInput placeholder='File link' fullWidth />
                                </Box> :
                                <Box>
                                    <Typography variant='subtitle1' sx={{ color: 'text.secondary', fontWeight: 'fontWeightSemiBold', mb: 1, mt: 2  }}>Upload File</Typography>

                                    <Box>
                                        {!selectedFile &&
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
                                                <Box
                                                    sx={{
                                                        p: 4,
                                                    }}
                                                >
                                                    <input
                                                        id="upload-file"
                                                        type="file"
                                                        onChange={handleFileChange}
                                                        accept="application/pdf"
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
                                                        <Box component='img' src={uploadFile} sx={{ width: '320px' }} />
                                                        <Typography variant="subtitle1" mt={1}>
                                                            Drop or Select File
                                                        </Typography>
                                                        <Typography variant="p" color={'text.disabled'} >
                                                            Drop files here or click browase through your machine
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        }






                                        {selectedFile && (
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: (theme) => theme.palette.primary.lighter, borderRadius: 1, p: 1, lineHeight: 0 }} >
                                                <Typography variant='subtitle1' sx={{ ml: 2 }}>{selectedFile.name}</Typography>
                                                <Typography variant='subtitle1' sx={{ ml: 2 }}>{Math.round((selectedFile.size/1024)/1024)} MB</Typography>
                                                <IconButton
                                                    sx={{
                                                        width: 26,
                                                        height: 26,
                                                        color: (theme) => theme.palette.grey[0],
                                                        backgroundColor: (theme) => alpha(theme.palette.grey[600], .5),
                                                        boxShadow: (theme) => theme.shadows[8],
                                                        backdropFilter: `blur(${6}px)`,
                                                        WebkitBackdropFilter: `blur(${6}px)`,
                                                        '&:hover': {
                                                            background: theme => alpha(theme.palette.grey[700], .6)
                                                        }
                                                    }}
                                                    onClick={() => setSelectedFile(null)}
                                                >
                                                    <Close />
                                                </IconButton>

                                            </Box>
                                        )}
                                    </Box>
                                </Box>
                        }
                    </FormControl>
                    <FormControl fullWidth >

                        <Box>
                            <Typography variant='subtitle1' sx={{ color: 'text.secondary', fontWeight: 'fontWeightSemiBold', mb: 1, mt: 2  }}>Image</Typography>

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
