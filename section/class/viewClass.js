import React, { useState } from "react";
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

const classes = [
  {
    image:
      "https://minimal-kit-react.vercel.app/assets/images/products/product_1.jpg",
    className: "Class 12",
  },
  {
    image:
      "https://minimal-kit-react.vercel.app/assets/images/products/product_1.jpg",
    className: "Class 11",
  },
];

export default function ViewClass() {
  const [showModel, setShowModel] = useState(false);

  return (
    <Container maxWidth="xl">
      {showModel && <DeleteModel setShowModel={setShowModel} />}
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
      <Grid container spacing={2} sx={{ mt: 1 }}>
        {classes.map((item, index) => (
          <ClassItem key={index} item={item} setShowModel={setShowModel} />
        ))}
      </Grid>
    </Container>
  );
}

function ClassItem({ item, setShowModel }) {
  const [loader, setLoader] = useState(true);
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          p: 1.5,
          boxShadow: (theme) => theme.shadows[6],
          borderRadius: 2,
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
            to="/class/update"
            variant="contained"
            sx={{ bgcolor: "linear-gradient(90deg, #2979ff 0%, #2979ff 100%)" }}
          >
            Edit
          </Button>

          <Button
            component={Link}
            to="/class/manage-class"
            variant="contained"
            sx={{ bgcolor: "linear-gradient(90deg, #2979ff 0%, #2979ff 100%)" }}
          >
            ManageClass
          </Button>
          <Button
            component={Link}
            variant="contained"
            sx={{
              p: 1.2,
              bgcolor: "linear-gradient(90deg, #2979ff 0%, #2979ff 100%)",
            }}
            onClick={() => setShowModel(true)}
          >
            Delete
          </Button>
        </Box>
      </Card>
    </Grid>
  );
}
