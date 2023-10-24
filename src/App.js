import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Movies from './components/Movies';
import Pages from './components/Pages';
import TvShows from './components/TvShows';
import Celebs from './components/Celebs';
import Blog from './components/Blog';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/pages" component={Pages} />
        <Route path="/tv-shows" component={TvShows} />
        <Route path="/celebs" component={Celebs} />
        <Route path="/blog" component={Blog} />
      </Routes>
    </Router>
  );
};

export default App;