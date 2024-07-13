import {
  Container,
  Typography,
  Box,
  Card,
  Button,
  TableContainer,
  CircularProgress,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  classSubjectsSelector,
  loadingSelector,
  deleteLoadingSelector
} from "../../features/class/selectors/classSelector";
import { getManageClass,deleteClassSubject } from "../../features/class/actions/classActions";
import DeleteModel from "../../components/model/deleteModel";

export default function ManageClass() {
  const [showModel, setShowModel] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const classId = useParams().classId;
  const classSubjects = useSelector(classSubjectsSelector);
  const loading = useSelector(loadingSelector);
  const deleteLoading = useSelector(deleteLoadingSelector);
  const dispatch = useDispatch();

  useEffect(() => {
   
 
      dispatch(getManageClass(classId));
  
     
  }, []);


  useEffect(() => {
    setShowModel(false);
  }, [classSubjects]);

  const deleteHandle = () => {
    dispatch(deleteClassSubject(classId,deleteId));
    setDeleteId(null);
  }
  return (
    <Container maxWidth="lg">
      <DeleteModel
        showModel={showModel}
      setShowModel={setShowModel}
      deleteHandle={deleteHandle}
      data="Class Subject"
      loading={deleteLoading}
      />
      <Box sx={{ mb: 2, textAlign: "end" }}>
        <Button
          component={Link}
          to={`/class/${classId}/subject/create`}
          variant="contained"
          sx={{
            p: 1.2,
            bgcolor: "linear-gradient(90deg, #2979ff 0%, #2979ff 100%)",
          }}
        >
          ADD CLASS
        </Button>
      </Box>

      <Card>
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "60vh",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <Box>
            {classSubjects.length > 0 ? (
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Image</TableCell>
                      <TableCell align="center">Subject Name</TableCell>
                      <TableCell align="center">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {classSubjects.map((item, index) => (
                      <SubjectItem
                        key={index}
                        item={item}
                        setShowModel={setShowModel}
                        setDeleteId={setDeleteId}
                      />
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 2,
                  height: "200px",
                }}
              >
                <Typography variant="h5">No Class subject Found</Typography>
              </Box>
            )}
          </Box>
        )}
      </Card>
    </Container>
  );
}

function SubjectItem({ item, setShowModel,setDeleteId }) {
  const [loader, setLoader] = useState(true);


  const deleteButtonClick=()=>{
    setShowModel(true)
    setDeleteId(item._id)
  }
  return (
    <TableRow>
      <TableCell align="center" sx={{display:'flex',justifyContent:'center'}}>
        {loader && <CircularProgress />}
        <Box
          component={"img"}
          src={item.image}
          onLoad={() => setLoader(false)}
          sx={{
            display: loader ? "none" : "flex",
            width: "140px",
            height: "80px",
            objectFit: "cover",
            borderRadius: 1,
          }}
        />

      </TableCell>
      <TableCell align="center">{item.subjectName}</TableCell>
      <TableCell align="center">
        <Button
          variant="contained"
          sx={{
            bgcolor: "linear-gradient(90deg, #2979ff 0%, #2979ff 100%)",
            p: 1.2,
          }}
          onClick={deleteButtonClick}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}
