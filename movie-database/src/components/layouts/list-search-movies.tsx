"use client";
import SearchMovies from "../utils/search-movies";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const ListSearchMovies = () => {
  const [movie, setMovie] = useState("");
  console.log(movie);
  
  return (
    <section className="flex justify-center flex-col my-10">
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          type="text"
          placeholder="Filme"
          onChange={(event) => setMovie(event.target.value)}
          value={movie}
        />
        <Button type="submit">Busque o filme</Button>
      </div>
      <SearchMovies nameMovie={movie} />
    </section>
  );
};

export default ListSearchMovies;
