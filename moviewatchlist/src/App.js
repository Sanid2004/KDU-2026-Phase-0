import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Moviedetails from './Components/MovieDetails';
import { ToastContainer } from 'react-toastify';
import Footer from './Components/Footer';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Display from './Components/Display';
import Search from './Components/Search';
import { useState } from 'react';

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
    </Routes>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
