import React from 'react'

function MovieCard({Poster, Title, Year, Type}) {

    
  return (
    <section className='movie'>
        <h4 className='movie-year'>{Year}</h4>
        <img className='movie-image' src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
        <h4 className='movie-type'>{Type}</h4>
        <p className='movie-title'>{Title}</p>
    </section>
  )
}

export default MovieCard