import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const columns = [
  { field: "title", headerName: "Title", width: 300 },
  { field: "release_date", headerName: "Release Date", width: 130 },
  { field: "vote_average", headerName: "Rating", width: 90 },
  { field: "overview", headerName: "Overview", width: 380 },
  { field: "original_language", headerName: "Language", width: 90 },
];

export const Movies = () => {
  const location = useLocation();
  return (
    <Box
      sx={{
        height: 400,
        width: "80%",
        backgroundColor: "#E0FFFF",
        marginX: "auto",
        marginTop: "100px",
      }}
    >
      <DataGrid
        rows={location.state.movies}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[10]}
        getRowId={(row) => row._id}
      />
    </Box>
  );
};
