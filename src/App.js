import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { css } from '@emotion/react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Movies from './components/movies/Movies';
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
        <Route path="/" exact element={<Home />} />
        <Route path="/movies" exact element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/tv-shows" element={<TvShows />} />
        <Route path="/celebs" element={<Celebs />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default App;
