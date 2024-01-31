"use client";
import NavMenu from "@/components/layouts/header/NavMenu";
import SearchMovies from "@/components/utils/SearchMovies";
import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const searchParams = useSearchParams(); //Função que lê a URL
  const searchUrl = searchParams.get("movie");

  return (
    <>
      <NavMenu itens={["/#home"]} />
      <main className="flex justify-center py-10">
        <SearchMovies nameMovie={searchUrl || ""} />
      </main>
    </>
  );
}
