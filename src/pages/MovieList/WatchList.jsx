import React, { useState, useEffect } from "react";
import { CircularProgress, Box, Button, Typography } from "@mui/material";
import MovieList from "../common/MovieList";
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import ReusableButton from "../common/ReusableButton";
const SelectedMovies = () => {
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSelectedMovies = async () => {
      const storedIds =
        JSON.parse(localStorage.getItem("selectedMovieIDs")) || [];
      if (storedIds.length === 0) {
        setLoading(false);
        return;
      }

      try {
        const moviePromises = storedIds.map((id) =>
          fetch(`https://www.omdbapi.com/?i=${id}&apikey=ad3c398d`).then(
            (res) => res.json()
          )
        );

        const movieData = await Promise.all(moviePromises);
        setSelectedMovies(movieData);
      } catch (err) {
        console.error("Error fetching selected movie details", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSelectedMovies();
  }, []);

  const handleAddToWatchlist = () => {
    navigate("/dashboard");
  };

  return (
    <Box
      sx={{
        bgcolor: grey[100],
        marginTop: "100px",
        padding: "16px",
        marginLeft: "0px",
        borderRadius: "15px",
        minHeight: "900px",
      }}
    >
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <CircularProgress />
        </Box>
      ) : selectedMovies.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Typography variant="h6" gutterBottom>
            No movies in your watchlist.
          </Typography>
          <ReusableButton
            label="Add Movies to Watchlist"
            onClick={handleAddToWatchlist}
          >
            Add Movies to Watchlist
          </ReusableButton>
        </Box>
      ) : (
        <MovieList movies={selectedMovies} />
      )}
    </Box>
  );
};

export default SelectedMovies;
