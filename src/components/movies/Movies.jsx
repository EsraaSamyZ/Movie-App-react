import useGetMovies from "./useGetMovies";
import MoviesList from "./MoviesList";
import Loading from "../Loading";


const Movies = () => {
  const [loading, error, movies_] = useGetMovies();

  return (
    <div>
      <Loading loading={loading} error={error}>
        <MoviesList moviesList={movies_} />
      </Loading>
    </div>
  );
}

export default Movies;