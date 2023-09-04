import movieposter from './images/movieposter.jpg'
import MovieGenre from './components/MovieGenre'
import { useState } from 'react'
// import React, { useContext } from 'react';
// import { MusicGenreContext } from '../../useContext/musicGenreContext.js';


const MovieCategoryComp = () => {

    const [isMovieShown, setIsMovieShown] = useState(false)
    // const { songArr, updateSongArr } = useContext(MusicGenreContext);
        
        const handleMovieToggleModal = () => {
            setIsMovieShown(true)
        }
    
        const handledMovieToggleModal = () => {
            setIsMovieShown(!isMovieShown)
    }
    
    // console.log(songArr)
    
        return (
            
            <div className=" group w-full relative h-fit rounded-xl md:w-96">
                <div>
                    <img src={movieposter} alt='music poster' className='w-full h-fit rounded-xl'/>   
                </div>
    
    
                <div className="hidden group-hover:flex font-bold  w-full h-full absolute top-0 right-0 bottom-0 left-0 cursor-pointer bg-black/30 text-white
                 flex-col justify-center items-center gap-6 mx-auto opacity-0 transition duration-300 ease-in-out hover:opacity-100
                 rounded-xl overflow-hidden">
    
                   
                    <div className=' flex flex-col justify-center items-center gap-6'>
                        <h1 className='text-3xl'> Movie Catalogue</h1>
    
                        <button onClick={handleMovieToggleModal} className='bg-red-600 px-3 py-3 rounded-lg text-white text-sm'>
                            Show Movie Catalogue
                        </button>
                  </div>
                </div>
                {isMovieShown && (
                  
                    < MovieGenre onHandToggleModal = {handledMovieToggleModal} />
                   )}
            </div>
    
        )
}

export default MovieCategoryComp