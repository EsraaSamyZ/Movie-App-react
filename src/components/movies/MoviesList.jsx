import React from 'react';
import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import MovieCard from './MovieCard';

const MoviesListContainer = styled('div')({
  marginTop: theme => theme.spacing(2),
});

const useStyles = {
  title: {
    marginBottom: theme => theme.spacing(2),
  },
};

const MoviesList = ({ moviesList }) => {
  return (
    <MoviesListContainer>
      <Typography variant="h5" sx={useStyles.title}>
        Latest Movies & TV Shows
      </Typography>
      <Grid container spacing={2}>
        {moviesList.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
            <MovieCard
              posterPath={movie.posterPath}
              voteAverage={movie.voteAverage}
              originalTitle={movie.originalTitle}
            />
          </Grid>
        ))}
      </Grid>
    </MoviesListContainer>
  );
};

export default MoviesList;
