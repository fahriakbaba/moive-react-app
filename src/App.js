import React from 'react';
import Modal from './Modal';
import MovieCard from './MovieCard';

const API_key = "334af70c";
function App() {
  const [movies, setMovies] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    getMovies("batman");
  }, [])
  async function getMovies(searchMovie) {
    const res = await fetch(`http://www.omdbapi.com/?apikey=${API_key}&s=${searchMovie}`);
    const data = await res.json();
    setMovies(data.Search)
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(!search) {
      setIsOpen(true);
      return;
    }
    getMovies(search);
    setSearch("");
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="App">
      <h1>MovieLand</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Enter your movie name'
          className='search-input'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button type='submit' className='search-btn'>search</button>
      </form>
      {movies.length > 0 ? (
        <div className="movie-container">
          {
            movies.map((movie, index) => (<MovieCard key={index} {...movie} />))
          }
        </div>
      ) : (
        <h2 style={{color:"white"}} >No movies found</h2>
      )
      }
      {isOpen && <Modal closeModal={closeModal} />}
    </div>
  );
}

export default App;
