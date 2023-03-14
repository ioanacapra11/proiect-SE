import React from "react";
import {
  Paper,
  Box,
  Typography,
  Divider,
  TextField,
  Button,
} from "@mui/material";
import { useFormik } from "formik";

import "./FirstPage.css";
import { Link } from "react-router-dom";
export const FirstPage = () => {
  const formik = useFormik({
    initialValues: {
      genre: "",
      actors: "",
      director: "",
    },
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#E0FFFF",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flex: 2,
          gap: "10px",
        }}
      >
        <Typography variant="h2" sx={{}}>
          Find movie
        </Typography>
        <Divider sx={{ width: "50%", backgroundColor: "##008B8B" }} />
        <form onSubmit={formik.handleSubmit} className="form-firstPage">
          <TextField
            id="genre"
            label="Genre"
            variant="standard"
            onChange={formik.handleChange}
            value={formik.values.genre}
            name="genre"
            sx={{ width: "700px" }}
          />
          <TextField
            id="actors"
            label="Actors"
            variant="standard"
            onChange={formik.handleChange}
            value={formik.values.actors}
            name="actors"
            sx={{ width: "700px" }}
          />
          <TextField
            id="director"
            label="Director"
            variant="standard"
            onChange={formik.handleChange}
            value={formik.values.director}
            name="director"
            sx={{ width: "700px" }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "black",
                borderRadius: "50px",
                padding: "10px 50px",
                color: "white",
                textTransform: "capitalize",
                fontFamily: "inherit",
                marginLeft: "580px",
              }}
            >
              <Link to="/filter" className="link">
                Next
              </Link>
            </Button>
          </Box>
        </form>
      </Box>
    </Paper>
  );
};
