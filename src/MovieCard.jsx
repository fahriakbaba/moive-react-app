import React from 'react'

function MovieCard({Poster, Title, Year, Type}) {

    const imageCSS ={
        width:"310px",
        height:"460px",
        margin: "1.5rem"
    }
  return (
    <section className='moviecard-container'>
        <h4>{Year}</h4>
        <img style={imageCSS} src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
        <h4>{Type}</h4>
        <p>{Title}</p>
    </section>
  )
}

export default MovieCard