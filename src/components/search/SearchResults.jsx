import { Typography, Container, Grid } from "@mui/material";
import MovieCard from "../movies/MovieCard";

const useStyles = {
  title: {
    marginBottom: (theme) => theme.spacing(2),
  },
};

const SearchResults = ({ searchResults }) => {
  return (
    <Container style={{ marginTop: "50px" }}>
      <Typography variant="h5" sx={useStyles.title}>
        Search results:
      </Typography>

      <Grid container spacing={6}>
        {searchResults && searchResults.length > 0 ? (
          searchResults.map((movie) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={movie.id}>
              <MovieCard
                itemId={movie.id}
                posterPath={movie.poster_path}
                voteAverage={movie.vote_average}
                originalTitle={movie.title ? movie.title : movie.name}
                mediaType={movie.media_type}
              />
            </Grid>
          ))
        ) : (
          <Typography variant="body2">
            No results found.
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default SearchResults;