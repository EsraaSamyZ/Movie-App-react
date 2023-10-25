import React from "react";
import { Grid, Typography } from "@mui/material";
import { styled, Container } from "@mui/system";
import MovieCard from "./MovieCard";

const MoviesListContainer = styled("div")({
  marginTop: (theme) => theme.spacing(2),
});

const useStyles = {
  title: {
    marginBottom: (theme) => theme.spacing(2),
  },
};

const MoviesList = ({ moviesList }) => {
  return (
    <MoviesListContainer>
      <Container>
        <Typography variant="h5" sx={useStyles.title}>
          Latest Movies & TV Shows
        </Typography>
        <Grid container spacing={6}>
          {moviesList.slice(0, 6).map((movie) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={movie.id}>
              <MovieCard
                id={movie.id}
                posterPath={movie.poster_path}
                voteAverage={movie.vote_average}
                originalTitle={movie.title ? movie.title : movie.name}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </MoviesListContainer>
  );
};

export default MoviesList;
