import { Card, CardMedia, Typography, styled } from '@mui/material';

// Define a styled component for the MovieCard container
const StyledMovieCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& .MuiCardMedia-root': {
    width: 150,
    position: 'relative',
    '& .voteAverage': {
      position: 'absolute',
      top: theme.spacing(1),
      right: theme.spacing(1),
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      padding: theme.spacing(1),
      borderRadius: '50%',
    },
  },
  '& .MuiCardContent-root': {
    marginTop: theme.spacing(1),
    textAlign: 'center',
  },
}));

const MovieCard = ({ posterPath, voteAverage, originalTitle }) => {
  return (
    <StyledMovieCard>
      <CardMedia
        component="img" // Specify "img" component for CardMedia
        alt={originalTitle}
        src={`https://image.tmdb.org/t/p/w185${posterPath}`} // Assuming posterPath is a relative path
        title={originalTitle}
      />
      <Typography variant="body2" className="voteAverage">
        {voteAverage}
      </Typography>
      <Typography variant="subtitle1" className="cardContent">
        {originalTitle}
      </Typography>
    </StyledMovieCard>
  );
};

export default MovieCard;
