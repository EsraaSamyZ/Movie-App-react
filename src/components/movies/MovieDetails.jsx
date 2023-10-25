import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  Divider,
  Box,
} from "@mui/material";
import { useParams } from "react-router-dom";
import useGetMovie from "./useGetMovie";
import Loading from "../Loading";

const MovieDetails = ({ mediaType }) => {
  const { itemId } = useParams();
  const [loading, error, movie] = useGetMovie(mediaType, itemId);

  return (
    <Box style={{ marginTop: "36px" }}>
      <div
        style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path})`,
          backgroundSize: "cover",
          minHeight: "100vh",
        }}
      >
        <Container>
  <Grid container spacing={4} alignItems="center">
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardMedia
          component="img"
          alt={movie.title}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          title={movie.title}
        />
      </Card>
    </Grid>

    <Grid item xs={12} sm={6} md={8}>
      <Typography variant="h3" style={{ color: 'white' }}>{movie.title}</Typography>
      <Typography variant="h6" style={{ color: 'white' }}>
        {movie.release_date?.split("-")[0] || "N/A"}
      </Typography>
      <Typography variant="body1" style={{ color: 'white' }}>{movie.overview}</Typography>
      <Divider style={{ margin: "16px 0", backgroundColor: 'white' }} />
      <Box display="flex" alignItems="center">
        <Typography variant="body2" style={{ marginRight: "8px", color: 'white' }}>
          Watch the Trailer | {Math.floor(movie.runtime / 60)}h{" "}
          {movie.runtime % 60}min
        </Typography>

        <Typography variant="body2" style={{ marginRight: "8px", color: 'white' }}>
          {movie.genres
            ? movie.genres.map((genre) => genre.name).join(", ")
            : "N/A"}
        </Typography>

        <Typography variant="body2" style={{ color: 'white' }}>
          {new Date(movie.release_date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </Typography>
      </Box>
      <Divider style={{ margin: "16px 0", backgroundColor: 'white' }} />
      <Box display="flex" alignItems="center">
        <Typography variant="h3" style={{ marginRight: "16px", color: 'white' }}>
          {movie.vote_average}
        </Typography>
        <Divider
          orientation="vertical"
          flexItem
          style={{ marginRight: "16px", backgroundColor: 'white' }}
        />
        <Typography variant="body2" style={{ color: 'white' }}>IMDB | {movie.status}</Typography>
      </Box>
    </Grid>
  </Grid>
</Container>
      </div>
    </Box>
  );
};

export default MovieDetails;
