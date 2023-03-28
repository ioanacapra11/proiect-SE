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
      minimum_rating: "1",
      maximum_rating: "1",
      original_language: "",
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
            <InputLabel id="minimum_rating-label">Minimum rating</InputLabel>
            <Select
              labelId="minimum_rating-label"
              id="minimum_rating"
              name="minimum_rating"
              label="minimum_rating"
              value={formik.values.minimum_rating}
              onChange={formik.handleChange}
            >
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5</MenuItem>
              <MenuItem value="6">6</MenuItem>
              <MenuItem value="7">7</MenuItem>
              <MenuItem value="8">8</MenuItem>
              <MenuItem value="9">9</MenuItem>
              <MenuItem value="10">10</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="maximum_rating-label">Maximum rating</InputLabel>
            <Select
              labelId="maximum_rating-label"
              id="maximum_rating"
              name="maximum_rating"
              label="maximum_rating"
              value={formik.values.maximum_rating}
              onChange={formik.handleChange}
            >
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5</MenuItem>
              <MenuItem value="6">6</MenuItem>
              <MenuItem value="7">7</MenuItem>
              <MenuItem value="8">8</MenuItem>
              <MenuItem value="9">9</MenuItem>
              <MenuItem value="10">10</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="original_language"
            label="Original language"
            variant="standard"
            onChange={formik.handleChange}
            value={formik.values.original_language}
            name="original_language"
            sx={{ width: "700px", marginBottom: "20px" }}
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
