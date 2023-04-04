import {
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";

import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { constants, ratings, years } from "../../constants";
import "./FirstPage.css";

export const FirstPage = () => {
  const [movieGenres, setMovieGenres] = useState([]);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      genre: "",
      release_date: "",
      rating: "",
      language: "",
    },
    onSubmit: async (values) => {
      let arr = [];
      for (let i = 1; i <= 200; i++) {
        const res = await axios.get(`${constants.URL}/movies?page=${i}`);
        arr.push(...res.data);
      }
      const filtered = arr.filter((movie) => {
        const splitRatings = values.rating.split("-");
        const splitYear = values.release_date.split("-");
        console.log(movie, movie.release_date);
        let splitReleaseDate = movie.release_date.split("-");
        let genre = movieGenres.find((g) => g.name === values.genre);
        return (
          movie.original_language === values.language &&
          movie.vote_average >= splitRatings[0] &&
          movie.vote_average <= splitRatings[1] &&
          splitReleaseDate[0] >= splitYear[0] &&
          splitReleaseDate[0] <= splitYear[1] &&
          movie.genre_ids.includes(Number(genre.id))
        );
      });
      debugger;
      navigate("/movies-list", {
        state: { movies: filtered },
      });
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
        backgroundColor: "#E0FFFF",
        height: "100vh",
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
            <InputLabel id="rating-label">Rating</InputLabel>
            <Select
              labelId="rating-label"
              id="rating"
              name="rating"
              label="rating"
              value={formik.values.rating}
              onChange={formik.handleChange}
            >
              {ratings.map((rating) => (
                <MenuItem key={rating} value={rating}>
                  {rating}
                </MenuItem>
              ))}
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
            Submit
          </Button>
        </form>
      </Box>
    </Paper>
  );
};
