import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useLocation } from "react-router-dom";

const columns = [
  { field: "title", headerName: "Title", width: 300 },
  { field: "release_date", headerName: "Release Date", width: 130 },
  { field: "vote_average", headerName: "Rating", width: 90 },
  { field: "overview", headerName: "Overview", width: 380 },
  { field: "original_language", headerName: "Language", width: 90 },
];

export const Movies = ({ movies }) => {
  const location = useLocation();
  debugger;
  return (
    <div style={{ height: 400, width: "80%" }}>
      <DataGrid
        rows={location.state.movies}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[10]}
        getRowId={(row) => row._id}
      />
    </div>
  );
};
