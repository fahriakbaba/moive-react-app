import React from 'react';
import MovieCard from './MovieCard';

const API_key = "334af70c";
function App() {
  const [data, setData] = React.useState([]);
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    getMovies("spiderman");
  }, [])
  async function getMovies(searchMovie) {
    const res = await fetch(`http://www.omdbapi.com/?apikey=${API_key}&s=${searchMovie}`);
    const data = await res.json();
    setData(data.Search)
  }

  function handleClick() {
    getMovies(search);
    setSearch("");
  }
  return (
    <div className="App">
      <h1>MovieLand</h1>
      <form>
        <input
          type="text"
          placeholder='Enter your movie name'
          className='search-input'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button type='button' className='search-btn' onClick={handleClick}>search</button>
      </form>
      <div className="movie-container">
        {
          data.map((movie, index) => (<MovieCard key={index} {...movie} />))
        }
      </div>
    </div>
  );
}

export default App;
