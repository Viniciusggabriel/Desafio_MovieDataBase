"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ListSearchMovies = () => {
  const [movie, setMovie] = useState("");
  const router = useRouter();

  // Previne que o submit button não faça o evento padrão
  const handleSubmit = (event: any) => {
    event.preventDefault();
    router.push("/search-page?movie=" + movie);
  };

  return (
    <section className="my-10 absolute top-0 ">
      <form
        className="flex w-full max-w-sm items-center space-x-2"
        onSubmit={handleSubmit}
      >
        <Input
          type="text"
          placeholder="Filme"
          name="movie-onchange"
          value={movie}
          onChange={(event) => setMovie(event.target.value)}
        />
        <Button
          type="submit"
          onClick={() => router.push("/search-page?movie=" + movie)}
        >
          Buscar
        </Button>
      </form>
    </section>
  );
};

export default ListSearchMovies;
