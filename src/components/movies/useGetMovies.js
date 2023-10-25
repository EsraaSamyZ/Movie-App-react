import { useEffect, useState } from "react";
import axios from "axios";

const useGetMovies = () => {
    const [moviesData, setMoviesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchMoviesData = async () => {
            try {
                const apiKey = '14bdd69ce887376edfafb09f23f78fe9'; 
                const apiUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`;
                const response = await axios.get(apiUrl);
                const filteredData = response.data.results.filter(item => ['movie', 'tv', 'person'].includes(item.media_type));
                setMoviesData(filteredData);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError("Error retrieving Movies data");
            }
        };

        fetchMoviesData();
    }, []);

    return [loading, error, moviesData];
};

export default useGetMovies;
