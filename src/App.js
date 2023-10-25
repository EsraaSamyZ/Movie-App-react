import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { css } from '@emotion/react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Movies from './components/Movies';
import MovieDetails from './components/movies/MovieDetails';
import Pages from './components/Pages';
import TvShows from './components/TvShows';
import Celebs from './components/Celebs';
import Blog from './components/Blog';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:itemId" element={<MovieDetails mediaType="movie" />} />
        <Route path="/tv/:itemId" element={<MovieDetails mediaType="tv" />} />
        <Route path="/person/:itemId" element={<MovieDetails mediaType="person" />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/tv-shows" element={<TvShows />} />
        <Route path="/celebs" element={<Celebs />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default App;
