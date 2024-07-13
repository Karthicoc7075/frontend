import React, { useState,useEffect } from 'react'
import { Box, Card, Container, Typography, FormControl, Button, IconButton, alpha, OutlinedInput, Select, MenuItem, NativeSelect, Paper, CircularProgress } from '@mui/material'
import uploadFileImage from '../../assets/icons/upload-.png'
import { Close } from '@mui/icons-material';
import 'react-quill/dist/quill.snow.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {getAllLanguages} from '../../features/language/actions/languageActions'
import {getAllCategories} from '../../features/category/actions/categoryActions'
import {createNews} from '../../features/news/actions/newsActions'
import { useDispatch, useSelector } from 'react-redux';
import {getCategoriesSelector} from '../../features/category/selectors/categorySelectors'
import {getAllLanguageSelector} from '../../features/language/selectors/languageSelectors'
import { loadingSelector } from '../../features/news/selectors/newsSelectors';

export default function CreateNews() {
    const [title, setTitle] = useState('')
    const [categoryId, setCategoryId] = useState('')
    const [languageId, setLanguage] = useState('')
    const [content,setContent] = useState('')
    const [selectedImage, setSelectedImage] = React.useState(null);
    const [image, setImage] = useState(null)
    const categories = useSelector(getCategoriesSelector)
    const languages = useSelector(getAllLanguageSelector)
    const loading = useSelector(loadingSelector)

    const dispatch = useDispatch()



    useEffect(() => {
        if(categories.length === 0){
            dispatch(getAllCategories())
        }
        if(languages.length === 0){
            dispatch(getAllLanguages())
        }

    }, [])

    useEffect(() => {
        if(!loading){
            setTitle('')
            setCategoryId('')
            setLanguage('')
            setContent('')
            setSelectedImage(null)
            setImage(null)
        }
    }, [loading])

    

    const handleImageChange = (e) => {
        const file = e.target.files[0];



        if (file) {
            setImage(file)
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };


    const submitHandle = () => {


        const formData = new FormData();
        formData.append('title', title)
        formData.append('categoryId', categoryId)
        formData.append('languageId', languageId)
        formData.append('content', content)
        formData.append('file', image)

        dispatch(createNews(formData))
    }



    return (
        <Container maxWidth='xl' >
            <Typography variant='h4' sx={{ mt: 2, textAlign: 'center', fontWeight: 'fontWeightBold' }} >
                Create News
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }} >

                <Card sx={{ py: 2, px: 3, maxWidth: '860px', width: '100%' }} >

                    <FormControl fullWidth   >
                        <Box>
                            <Typography variant='subtitle1' sx={{ color: 'text.secondary', fontWeight: 'fontWeightSemiBold', mb: 1 }}>News title</Typography>
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
                            <Typography variant='subtitle1' sx={{ color: 'text.secondary', fontWeight: 'fontWeightSemiBold', mb: 1, mt: 2 }}>Category</Typography>
                            <Select fullWidth value={categoryId} onChange={(e) => setCategoryId(e.target.value)} >
                                {categories.map((item, index) => (
                                    <MenuItem key={index} value={item._id}>{item.categoryName}</MenuItem>
                                ))}

                            </Select>
                        </Box>
                    </FormControl>
                    <FormControl fullWidth>
                        <Box >
                            <Typography variant='subtitle1' sx={{ color: 'text.secondary', fontWeight: 'fontWeightSemiBold', mb: 1, mt: 2  }}>Language</Typography>
                            <Select fullWidth  value={languageId} onChange={(e)=>setLanguage(e.target.value)} >
                                {languages.map((item, index) => (
                                    <MenuItem key={index} value={item._id}>{item.languageName}</MenuItem>
                                ))}
                            </Select>
                        </Box>
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

                       
                       <FormControl  sx={{my:1.5}} >
                       <Paper>
                       <Typography variant='subtitle1' sx={{ color: 'text.secondary', fontWeight: 'fontWeightSemiBold', mb: 1 }}>Content</Typography>
                        <CKEditor
                    editor={ ClassicEditor }
                    config={{

                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setContent(data);
                      }}
                   />

                    
                        </Paper>
                       </FormControl>

                        <Box textAlign={'center'}>
                                {loading ?
                            <CircularProgress/>:
                            <Button onClick={() => submitHandle()} variant='contained' sx={{
                                mt: 2,
                                background: theme => theme.palette.common.black,
                                width: '120px',
                                ':hover': {
                                    background: theme => theme.palette.common.black,
                                    opacity: .8
                                }
                            }} >Create</Button>    
                            }
                        </Box>
                    </FormControl>
                </Card>
            </Box>
        </Container>
    )
}