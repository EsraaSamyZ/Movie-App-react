import { useEffect, useState } from "react";
import axios from "axios";

const useSearchMovies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchMovies = async (query) => {
    try {
      setLoading(true);
      const apiKey = '14bdd69ce887376edfafb09f23f78fe9';
      const apiUrl = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${query}`;
      const response = await axios.get(apiUrl);
      const filteredResults = response.data.results.filter(
        (item) => ["movie", "tv"].includes(item.media_type)
      );
      setSearchResults(filteredResults);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("Error searching movies");
    }
  };

  return { searchResults, loading, error, searchMovies };
};

export default useSearchMovies;