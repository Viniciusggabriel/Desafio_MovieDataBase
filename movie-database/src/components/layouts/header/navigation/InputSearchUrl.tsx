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
    <form
      className="flex w-full max-w-xl items-center space-x-2"
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        placeholder="Filmes..."
        name="movie-onchange"
        className="bg-primary placeholder:text-primary-foreground"
        value={movie}
        onChange={(event) => setMovie(event.target.value)}
      />
      <Button
        variant={"default"}
        type="submit"
        onClick={() => router.push("/search-page?movie=" + movie)}
      >
        Buscar
      </Button>
    </form>
  );
};

export default InputSearchUrl;
