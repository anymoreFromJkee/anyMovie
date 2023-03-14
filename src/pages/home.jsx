import React from "react";
import { Link } from "react-router-dom";

import { OutlineButton } from "../components/button/button.component";
import HeroSlide from "../components/hero-slide/hero-slide.component";
import MovieList from "../components/movie-list/movie-list.component";

import { category,movieType, tvType } from "../api/tmdbApi";

export default function Home() {
  return (
    <>
      <HeroSlide />
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending Movies</h2>
            <Link to="/movie">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular}/>
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top rated Movies</h2>
            <Link to="/movie">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated}/>
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending TV shows</h2>
            <Link to="/tv">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.popular}/>
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top rated TV shows</h2>
            <Link to="/tv">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated}/>
        </div>
      </div>  
    </>
  );
}
