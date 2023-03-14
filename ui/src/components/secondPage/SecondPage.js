import React, { useState } from "react";
import {
  Paper,
  Box,
  TextField,
  Button,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
} from "@mui/material";
import { useFormik } from "formik";

import "./SecondPage.css";
import { Link } from "react-router-dom";
export const SecondPage = () => {
  const formik = useFormik({
    initialValues: {
      showType: "movie",
      type: "independent",
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
        <form onSubmit={formik.handleSubmit} className="form-secondPage">
          <FormControl fullWidth>
            <InputLabel id="showType-label">Show Type</InputLabel>
            <Select
              labelId="showType-label"
              id="showType"
              name="showType"
              label="showType"
              value={formik.values.showType}
              onChange={formik.handleChange}
            >
              <MenuItem value="movie">movie</MenuItem>
              <MenuItem value="series">series</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="type-label">Type</InputLabel>
            <Select
              labelId="type-label"
              id="type"
              name="type"
              label="type"
              value={formik.values.type}
              onChange={formik.handleChange}
            >
              <MenuItem value="independent">independent</MenuItem>
              <MenuItem value="hollywood">hollywood</MenuItem>
              <MenuItem value="award-winning">award-winning</MenuItem>
            </Select>
          </FormControl>
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
              }}
            >
              <Link to="/" className="link">
                Back
              </Link>
            </Button>
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
              Finish
            </Button>
          </Box>
        </form>
      </Box>
    </Paper>
  );
};
