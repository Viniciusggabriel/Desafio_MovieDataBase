"use client";
import SearchMovies from "@/components/utils/search-movies";
import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const searchParams = useSearchParams(); //Função que lê a URL
  const searchUrl = searchParams.get("movie");

  return (
    <main className="flex justify-center py-10">
      <SearchMovies nameMovie={searchUrl || ""} />
    </main>
  );
}
