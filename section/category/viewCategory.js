import React, { useState,useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  Button,
  Box,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import DeleteModel from "../../components/model/deleteModel";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories,deleteCategory} from "../../features/category/actions/categoryActions";
import { getCategoriesSelector, loadingSelector, deleteLoadingSelector } from "../../features/category/selectors/categorySelectors";




export default function Category() {
  const [showModel, setShowModel] = useState(false);
  const categories = useSelector(getCategoriesSelector);
  const dispatch = useDispatch();
  const [deleteId, setDeleteId] = useState(null);
  const loading = useSelector(loadingSelector);
  const deleteLoading = useSelector(deleteLoadingSelector);

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(getAllCategories());
    }

  }, []);


  useEffect(()=>{
    if(!deleteLoading){
      setShowModel(false)
    }
  },[deleteLoading])

  const deleteHandle = () => {
    dispatch(deleteCategory(deleteId,{deleteAutomatic:false}));
    setDeleteId(null);
  }

  const deleteAllHandle = () => {
    dispatch(deleteCategory(deleteId,{deleteAutomatic:true}));
    setDeleteId(null);
  }


  return (
    <Container maxWidth="xl">
       <DeleteModel 
           showModel={showModel}
            setShowModel={setShowModel}
            deleteAllHandle={deleteAllHandle}
            deleteHandle={deleteHandle}
            data='Category'
            desc="Deleting this category will delete all news associated with this category. Are you sure you want to delete this category?"
            loading={deleteLoading}
           />
   
      
      <Box sx={{ display: "flex", my: 2 }}>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          Categories
        </Typography>
        <Button
          component={Link}
          to="/category/create"
          variant="contained"
          sx={{
            p: 1.2,
            bgcolor: "linear-gradient(90deg, #2979ff 0%, #2979ff 100%)",
          }}
        >
          ADD CATEGORY
        </Button>
      </Box>
      {loading ? <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }} >
        <CircularProgress />
      </Box> :
      <Grid container spacing={2} sx={{ mt: 1 }}>
        {categories.map((item, index) => (
          <CategoryItem key={index} item={item} setShowModel={setShowModel} setDeleteId={setDeleteId} />
        ))}
      </Grid>
}
    </Container>
  );
}

function CategoryItem({ item, setShowModel,setDeleteId }) {
  const [loader, setLoader] = useState(true);

  
  const deleteButtonClick = () => {
    setShowModel(true);
    setDeleteId(item._id);
  }
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          p: 1.5,
          boxShadow: (theme) => theme.shadows[6],
          borderRadius: 2,
          height: "100%",
        }}
      >
        <Box
          component={"img"}
          src={item.image}
          onLoad={() => setLoader(false)}
          sx={{
            width: 1,
            height: "150px",
            objectFit: "cover",
            borderRadius: 1,
            display: loader ? "none" : "block",
          }}
        />
        {loader && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100px",
            }}
          >
            <CircularProgress />
          </Box>
        )}

        <Typography variant="subtitle1" sx={{ textAlign: "center", my: 2 }}>
          {item.categoryName}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
          <Button
            component={Link}
            to={`/category/update/${item._id}`}
            variant="contained"
            sx={{ bgcolor: "linear-gradient(90deg, #2979ff 0%, #2979ff 100%)" }}
          >
            Edit
          </Button>
          <Button
              onClick={deleteButtonClick}
            variant="contained"
            sx={{
              p: 1.2,
              bgcolor: "linear-gradient(90deg, #2979ff 0%, #2979ff 100%)",
            }}
          >
            Delete
          </Button>
        </Box>
      </Card>
    </Grid>
  );
}
