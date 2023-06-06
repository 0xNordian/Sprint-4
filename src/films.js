// import { movies } from './data.js';

// // Access the movies array
// console.log(movies);

const movies = [
  {
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    score: 9.3
  },
  {
    title: 'The Godfather',
    year: 1972,
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    score: 9.2
  },
  {
    title: 'The Royal Tenenbaums',
    year: 2001,
    director: 'Wes Anderson',
    duration: '1h 50min',
    genre: ['Comedy', 'Drama'],
    score: 7.6
  },
  {
    title: 'Rushmore',
    year: 1998,
    director: 'Wes Anderson',
    duration: '1h 33min',
    genre: ['Comedy', 'Drama'],
    score: 7.7
  },
  {
    title: 'The Dark Knight',
    year: 2008,
    director: 'Christopher Nolan',
    duration: '2h 32min',
    genre: ['Action', 'Crime', 'Drama', 'Thriller'],
    score: 9
  }]

  // Exercise 1: Get the array of all directors.
  function getAllDirectors(array) {
    const directors = array.map((movie) => {
      return movie.director;
    });
    return directors;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const directorsMovies = array.filter((movie) => movie.director === director)
  console.log("directorsMovies: ", directorsMovies);
  return directorsMovies;
}
getMoviesFromDirector(movies, 'Wes Anderson');

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
