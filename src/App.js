import React from 'react';

const API_key = "334af70c";
function App() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    function getMovies(searchMovie) {
      fetch(`http://www.omdbapi.com/?apikey=${API_key}&s=${searchMovie}`)
        .then(res => res.json())
        .then(data =>setData(data));
    }

    getMovies("spiderman");
  }, [])
  console.log(data);
  return (
    <div className="App">
     <p>hi this is first movie react project</p>
     <form>
      <input type="text" placeholder='Enter your movie name' />
     </form>
    </div>
  );
}

export default App;
