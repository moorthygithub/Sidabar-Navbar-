import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  CircularProgress,
  Box,
  IconButton,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import AddIcon from "@mui/icons-material/Add";
import { toast, ToastContainer } from "react-toastify";
import CloseIcon from "@mui/icons-material/Close";
import "react-toastify/dist/ReactToastify.css";

const MovieList = ({ movies }) => {
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    const storedIds =
      JSON.parse(localStorage.getItem("selectedMovieIDs")) || [];
    setSelectedIds(storedIds);
  }, []);

  const handleIconClick = (imdbID, title) => {
    const storedIds =
      JSON.parse(localStorage.getItem("selectedMovieIDs")) || [];

    let updatedIds;
    if (storedIds.includes(imdbID)) {
      updatedIds = storedIds.filter((id) => id !== imdbID);
      toast.info(`Removed ${title} from Watchlist!`);
    } else {
      updatedIds = [...storedIds, imdbID];
      toast.success(`Added ${title} to Watchlist!`);
    }

    localStorage.setItem("selectedMovieIDs", JSON.stringify(updatedIds));
    setSelectedIds(updatedIds);
  };

  return (
    <div>
      <Grid container spacing={3}>
        {movies.length ? (
          movies.map((movie, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ position: "relative", maxHeight: "auto" ,width:"300px" }}>
                <IconButton
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    zIndex: 1,
                    backgroundColor: "white",
                  }}
                  onClick={() => handleIconClick(movie.imdbID, movie.Title)}
                >
                  {selectedIds.includes(movie.imdbID) ? (
                    <CloseIcon color="error" />
                  ) : (
                    <AddIcon />
                  )}
                </IconButton>
                <CardMedia
                  component="img"
                  alt={movie.Title}
                  height="400"
                  image={movie.Poster}
                  title={movie.Title}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {movie.Title}
                  </Typography>
                  <Typography variant="h5" component="div">
                    ({movie.Year})
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Box
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <CircularProgress />
          </Box>
        )}
      </Grid>

      <ToastContainer />
    </div>
  );
};

export default MovieList;
