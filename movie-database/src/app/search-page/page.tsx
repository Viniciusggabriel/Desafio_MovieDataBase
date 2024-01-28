"use client";
import SearchMovies from "@/components/utils/search-movies";
import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const searchUrl = searchParams.get("movie");

  return (
    <main>
      <SearchMovies nameMovie={searchUrl || ""} />
    </main>
  );
}
