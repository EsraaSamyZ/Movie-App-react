import { useState } from "react";
import MoviesList from "./movies/MoviesList";
import Loading from "./Loading";
import Search from "./search/Search";
import useGetMovies from "./movies/useGetMovies";
import useSearchMovies from "./search/useSearchMovies";
import SearchResults from "./search/SearchResults";

const Movies = () => {
  const [loading, error, movies_] = useGetMovies();
  const [searchQuery, setSearchQuery] = useState("");
  const { searchResults, loading: loading_, error: error_, searchMovies } = useSearchMovies();
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async () => {
    searchMovies(searchQuery);
    setHasSearched(true);
  };

  return (
    <>
      <Loading loading={loading_} error={error_}>
        <Search
          query={searchQuery}
          onSearch={handleSearch}
          onQueryChange={(value) => setSearchQuery(value)}
        />
      </Loading>
      {hasSearched && <SearchResults searchResults={searchResults} />}
      <Loading loading={loading} error={error}>
        <MoviesList moviesList={movies_} />
      </Loading>
    </>
  );
};

export default Movies;
