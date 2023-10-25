import React from 'react';
import { Card, CardMedia, Typography, styled } from '@mui/material';


const MovieCard = ({ itemId, posterPath, voteAverage, originalTitle, mediaType }) => {

  return (
    <Card>
      <a href={`/${mediaType}/${itemId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <CardMedia
          component="img"
          alt={originalTitle}
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          title={originalTitle}
        />
      </a>
      <Typography variant="body2" className="voteAverage">
        {voteAverage}
      </Typography>
      <a href={`/${mediaType}/${itemId}`} style={{ textDecoration: 'none', fontWeight: 'bold', color: 'inherit' }}>
        <Typography variant="subtitle1" className="cardContent">
          {originalTitle}
        </Typography>
      </a>
    </Card>
  );
};

export default MovieCard;
