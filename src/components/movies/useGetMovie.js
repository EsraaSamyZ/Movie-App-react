import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetMovie = (mediaType, itemId) => {
  const [movieData, setMovieData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const apiKey = '14bdd69ce887376edfafb09f23f78fe9'; 
        const apiUrl = `https://api.themoviedb.org/3/${mediaType}/${itemId}?api_key=${apiKey}`;
        const response = await axios.get(apiUrl);
        setMovieData(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError('Error retrieving movie data');
      }
    };

    fetchMovieData();
  }, [mediaType, itemId]);

  return [loading, error, movieData];
};

export default useGetMovie;
