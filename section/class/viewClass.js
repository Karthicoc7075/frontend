import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  Button,
  Box,
  CircularProgress,
  Dialog
} from "@mui/material";
import { Link } from "react-router-dom";
import DeleteModel from "../../components/model/deleteModel";
import { useDispatch, useSelector } from "react-redux";
import { deleteClass, getAllClasses } from "../../features/class/actions/classActions";
import { getAllClassesSelector, loadingSelector, deleteLoadingSelector } from "../../features/class/selectors/classSelector";

export default function ViewClass() {
  const [showModel, setShowModel] = useState(false);
  const classes = useSelector(getAllClassesSelector);
  const dispatch = useDispatch();
  const [deleteId, setDeleteId] = useState(null);
  const loading = useSelector(loadingSelector);
  const deleteLoading = useSelector(deleteLoadingSelector);

  useEffect(() => {
    if (classes.length === 0) {
      dispatch(getAllClasses());
    }

    setShowModel(false);
  }, [classes]);

  const deleteHandle = () => {
    dispatch(deleteClass(deleteId));
    setDeleteId(null);
  }




  return (
    <Container maxWidth="xl">
           <DeleteModel 
           showModel={showModel}
            setShowModel={setShowModel}
            deleteHandle={deleteHandle}
            data='Class'
            desc='Deleting this class will delete all class subjects and materials associated with this class.Are you sure you want to delete this class?'
            loading={deleteLoading}
           />
   
          <Box sx={{ display: "flex", my: 2 }}>
            <Typography variant="h5" sx={{ flexGrow: 1 }}>
              Classes
            </Typography>
            <Button
              component={Link}
              to="/class/create"
              variant="contained"
              sx={{
                p: 1.2,
                bgcolor: "linear-gradient(90deg, #2979ff 0%, #2979ff 100%)",
              }}
            >
              ADD CLASS
            </Button>
          </Box>
          {loading ? <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }} >
        <CircularProgress />
      </Box> :
          <Box>
            {
              classes.length > 0 ?
                <Grid container spacing={2}>
                  {classes.map((item) => (
                    <ClassItem
                      key={item._id}
                      item={item}
                      setShowModel={setShowModel}
                      setDeleteId={setDeleteId}
                    />
                  ))}
                </Grid>
                : <Card sx={{ display:'flex',justifyContent:'center',alignItems:'center',height:'60vh' }}>
                  <Typography variant="h6" sx={{ textAlign: 'center' }} >No class found</Typography>
                </Card>
            }
          </Box>
        }
      
    </Container>
  );
}

function ClassItem({ item, setShowModel, setDeleteId }) {
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
              height: "150px",
            }}
          >
            <CircularProgress />
          </Box>
        )}

        <Typography variant="subtitle1" sx={{ textAlign: "center", my: 2 }}>
          {item.className}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 1,
          }}
        >
          <Button
            component={Link}
            to={`/class/update/${item._id}`}
            variant="contained"
            sx={{ p:1.2,bgcolor: "linear-gradient(90deg, #2979ff 0%, #2979ff 100%)" }}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            sx={{
              p: 1.2,
              bgcolor: "linear-gradient(90deg, #2979ff 0%, #2979ff 100%)",
            }}
            onClick={() => deleteButtonClick()}
          >
            Delete
          </Button>
          <Button
            component={Link}
            to={`/class/manage-class/${item._id}`}
            variant="contained"
            sx={{p:1.2, bgcolor: "linear-gradient(90deg, #2979ff 0%, #2979ff 100%)" }}
          >
            Manage Subjects
          </Button>
        </Box>
      </Card>
    </Grid>
  );
}
