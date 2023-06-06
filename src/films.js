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
    title: 'Ahe Royal Tenenbaums 2',
    year: 2001,
    director: 'Wes Anderson',
    duration: '1h 50min',
    genre: ['Comedy', 'Drama'],
    score: 8.6
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
    title: 'Interstellar',
    year: 2014,
    director: 'Christopher Nolan',
    duration: '2h 55min',
    genre: ['Action', 'Crime', 'Drama', 'Thriller'],
    score: 8.7
  },
  {
    title: 'The Dark Knight',
    year: 2001,
    director: 'Christopher Nolan',
    duration: '2h 32min',
    genre: ['Action', 'Science Fiction'],
    score: 8.6
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
  const scoreAvgbyDirector = array
    .filter((movie) => movie.director === director)
    .map((movie) => movie.score);

  const sumOfScores = scoreAvgbyDirector.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  const averageScore = sumOfScores / scoreAvgbyDirector.length;

  console.log(averageScore);
  return averageScore;
};

moviesAverageOfDirector(movies, 'Christopher Nolan');

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const arr = array.map(items => items.title).sort();
  console.log("test: ", arr.slice(0, 20));
  return arr.slice(0, 20);
}
orderAlphabetically(movies);

function orderByYear(array) {
  const orderAscByYear = array.slice().sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  console.log("orderAscByYear: ", orderAscByYear);
  return orderAscByYear;
}

orderByYear(movies);


orderByYear(movies);


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  let score = 0;
  let elements = 0;

  array.forEach((item) => {
    if (item.genre.includes(category)) {
      score += item.score;
      elements += 1;
      if(item.score === '') elements -= 1;
    }
  });

  if (elements === 0) {
    return 0;
  }

  const average = (score / elements).toFixed(2);  
  return Number(average);
}

moviesAverageByCategory(movies, 'Crime');


// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const newArray = JSON.parse(JSON.stringify(array));
  const currentDuration = newArray.map((item) => {
    if (typeof item.duration === 'string') {
      const arr = item.duration.split('');
      const newDuration = (arr[0] * 60) + Number(arr.slice(3, 5).join(''));
      item.duration = parseInt(newDuration, 10);
    }
    return item;
  });
  return currentDuration;
}

hoursToMinutes(movies);



// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const filteredByYear = array.filter(items => items.year === year);
  const bestMoviebyYear = filteredByYear.map(items => items.score);
  
  const highestScore = Math.max(...bestMoviebyYear);
  const highestScoreMovies = filteredByYear.filter(items => items.score === highestScore);
  
  return highestScoreMovies;
}

const bestMovies = bestFilmOfYear(movies, 2001);
console.log("bestMovies: ", bestMovies);



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
