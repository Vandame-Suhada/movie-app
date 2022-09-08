import React from 'react';
import './App.css';
import Row from './Row';
import request from './request';
import Banner from './Banner';

function App() {
  return (
    <div className="App">
      <Banner />
      <Row title="NETFLIX ORIGINAL" fetchUrl={request.fetchNetflixOriginals} isLargeRow={true}/>
      <Row title="TRENDING MOVIE" fetchUrl={request.fetchTrending} />
      <Row title="POPULAR MOVIE" fetchUrl={request.fetchPopularMovies} />
      <Row title="DETAILS MOVIE" fetchUrl={request.fetchDetailsMovies} />
      <Row title="RATE MOVIE" fetchUrl={request.fetchRateMovies} />
    </div>
  )
}

export default App;
