import './App.css';
import Header from './Header';
import Moviedetails from './MovieDetails';
import Footer from './Footer';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Display from './Display';
import Search from './Search';
import { useState } from 'react';
import PremiumRentals from './PremiumRentals';

function App() {

  const [movies,setMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies([
      ...movies,
    {
      id: Date.now(),
      title: movie.name,
      ratings: movie.ratings,
      watched: false
    }
  ]);
};

  const deleteMovie = (id) => {
  setMovies(movies.filter(movie => movie.id !== id));
  };

  const toggleMovies = (id) => {
    setMovies(
      movies.map((movie)=>
        movie.id === id 
        ? {...movie,watched: !movie.watched} : movie
      )
    )
  };

  return (
    <Router>
    <div>
    <div className='body'>
        <Header/>
    </div>

    <Routes>
      <Route path="/" element={<Moviedetails addMovie={addMovie}/>}/>
      <Route path="/ViewMovies" element={<Display Showmovies={movies} deleteMovie={deleteMovie} toggleMovies={toggleMovies}/>} />
      <Route path="/SearchMovies" element={<Search movies={movies}/>} />
      <Route path="/PremiumMovies" element={<PremiumRentals/>}/>
    </Routes>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
