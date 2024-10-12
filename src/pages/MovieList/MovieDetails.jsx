import React, { useState, useEffect } from "react";
import { Container, Box, Typography } from "@mui/material";
import MovieList from "../common/MovieList";
import AddIcon from "@mui/icons-material/Add";
import ReusableTextField from "../common/ReusableTextField";

const MovieDetails = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("Iron Man");

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?s=${searchTerm}&apikey=ad3c398d`
        );
        const data = await response.json();
        if (data.Response === "True") {
          setMovies(data.Search);
          setError(null);
        } else {
          setMovies([]);
          setError("Movies not found");
        }
      } catch (err) {
        setError("Error fetching data");
        setMovies([]);
      }
    };

    if (searchTerm) {
      fetchMovieDetails();
    }
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container>
      <Box>
        <ReusableTextField
          label="Search for a movie"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </Box>

      {error ? (
        <Typography color="error" variant="h6">
          {error}
        </Typography>
      ) : (
        <MovieList movies={movies} icon={<AddIcon />} />
      )}
    </Container>
  );
};

export default MovieDetails;
