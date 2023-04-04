import React from "react";

import { Typography, Button, Paper, Box } from "@mui/material";
import { Link } from "react-router-dom";

export const MoviesOrSeries = () => {
  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        flexDirection: "column",
        backgroundColor: "#E0FFFF",
        gap: "100px",
      }}
    >
      <Typography variant="h2">Movies or series?</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "70px",
        }}
      >
        <Button
          component={Link}
          to="/movies"
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
          Movies
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
          }}
        >
          Series
        </Button>
      </Box>
    </Paper>
  );
};
