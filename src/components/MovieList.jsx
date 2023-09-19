import{ useState } from 'react';
import MovieCard from './MovieCard';
import moviesData from '../movies-data.json'

function MovieList(){
    //declaring a state variable "movies"
    const [movies, setMovies] = useState(moviesData);
    
    //making a function for deleting movies
    const deleteMovie = movieId => {
        const filteredMovies = movies.filter(movie => {
            return movie._id !== movieId;
        });

        setMovies(filteredMovies);
    }

    return (
        <div>
            <h2>Movie List</h2>
            {movies.map(movie => {
                return <MovieCard key={movie._id} movie={movie} clickToDelete={deleteMovie}/>
                    // <div key={movie.title} className="MovieCard">
                    //     <h3>{movie.title}</h3>
                    //     <p>Director:{movie.director}</p>
                    //     <p>Rating:{movie.IMDBRating}</p>
                    //     <button onClick ={() => deleteMovie(movie._id)} className="btn-delete">Delete</button>
                    //     {/* adding onClick element to delete the movie id */}
                    // </div>
            })}
        </div>
    );
}

export default MovieList;