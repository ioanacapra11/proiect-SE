import {
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { constants, years } from "../../constants";
import "./FirstPage.css";

export const FirstPage = () => {
  const [movieGenres, setMovieGenres] = useState([]);
  const formik = useFormik({
    initialValues: {
      genre: "",
      release_date: "",
      minimum_rating: "1",
      maximum_rating: "1",
      language: "",
    },
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    const fetchGenres = async () => {
      const res = await axios(`${constants.URL}/movie-genres`);
      setMovieGenres(res.data);
    };

    fetchGenres();
  }, []);

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
          <FormControl fullWidth>
            <InputLabel id="genres-label">Genres</InputLabel>
            <Select
              labelId="genres-label"
              id="genre"
              name="genre"
              label="genre"
              value={formik.values.genre}
              onChange={formik.handleChange}
            >
              {movieGenres.map((genre) => (
                <MenuItem key={genre._id} value={genre.name}>
                  {genre.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="release-date-label">Release Year</InputLabel>
            <Select
              labelId="release-date-label"
              id="release_date"
              name="release_date"
              label="release_date"
              value={formik.values.release_date}
              onChange={formik.handleChange}
            >
              {years.map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
          <FormControl fullWidth>
            <InputLabel id="language-label">Language</InputLabel>
            <Select
              labelId="language-label"
              id="language"
              name="language"
              label="language"
              value={formik.values.language}
              onChange={formik.handleChange}
            >
              <MenuItem value="en">en</MenuItem>
              <MenuItem value="es">es</MenuItem>
              <MenuItem value="it">it</MenuItem>
              <MenuItem value="ja">ja</MenuItem>
              <MenuItem value="uk">uk</MenuItem>
              <MenuItem value="ko">ko</MenuItem>
              <MenuItem value="de">de</MenuItem>
              <MenuItem value="fr">fr</MenuItem>
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
                marginLeft: "580px",
              }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Paper>
  );
};
