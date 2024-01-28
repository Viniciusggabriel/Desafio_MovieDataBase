"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

const InputSearchUrl = () => {
  const [movie, setMovie] = useState("");
  const router = useRouter();

  // Previne que o submit button não faça o evento padrão
  const handleSubmit = (event: any) => {
    event.preventDefault();
    router.push("/search-page?movie=" + movie);
  };

  return (
    <section className="my-10 w-2/4 absolute top-1/4 left-2/4 transform -translate-y-2/4 -translate-x-2/4">
      <form
        className="flex w-full max-w-xl items-center space-x-2"
        onSubmit={handleSubmit}
      >
        <Input
          type="text"
          placeholder="Filme"
          name="movie-onchange"
          value={movie}
          className="bg-slate-800 placeholder:text-white"
          onChange={(event) => setMovie(event.target.value)}
        />
        <Button
          variant={"secondary"}
          type="submit"
          onClick={() => router.push("/search-page?movie=" + movie)}
        >
          Buscar
        </Button>
      </form>
    </section>
  );
};

export default InputSearchUrl;
