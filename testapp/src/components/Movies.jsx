import React, { useState } from 'react'
import { useEffect } from 'react';
import MovieList from './MovieList';

export default function Movies() {
    const [movies,setMovies]=useState([]);
    const [series,setSeries]=useState([]);
    useEffect(() => {
        fetch(
          " http://www.omdbapi.com/?s=action&type=movie&apikey=bfaccdb0"
        )
          .then((res) => res.json())
          .then((data) => setMovies(data.Search));
      }, []);
      useEffect(() => {
        fetch(
          " http://www.omdbapi.com/?s=action&type=series&apikey=bfaccdb0"
        )
          .then((res) => res.json())
          .then((data) => setSeries(data.Search));
      }, []);  

      const currentMovies= movies.map((movie,index)=>{
       return (
         <div className='h-3h w-3h  mx-2 min-w-[300px]' key={index}>
           <img src={movie.Poster} alt="" className='rounded-2xl w-full max-h-full h-full' />
         </div>
       );
        
      })
      const currentSeries= series.map((serie,index)=>{
        return (
          <div className='h-3h w-3h  mx-2 min-w-[300px]' key={index}>
            <img src={serie.Poster} alt="" className='rounded-2xl w-full max-h-full h-full' />
          </div>
        );
         
       })
      

  return (
    <div>
     <MovieList list={currentMovies} name='Movies'/>
     <MovieList list={currentSeries} name='Series'/>
    </div>
  );
}
