"use client";

import SearchMovies from "../utils/search-movies";

const ListSearchMovies = () => {
  return (
    <section className="flex justify-center">
      <SearchMovies nameMovie="Batman" />
    </section>
  );
};

export default ListSearchMovies;
