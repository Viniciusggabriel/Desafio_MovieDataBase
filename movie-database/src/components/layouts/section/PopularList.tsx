"use client";
import PopularMovies from "@/components/utils/PopularMovies";

const PopularList = () => {
  return (
    <article className="w-10/12 border-y-2 py-2 my-10">
      <h1 className="text-center text-xl mb-5">Filmes populares</h1>
      <PopularMovies divImage="w-52" image="w-full h-full object-cover rounded-md object-cover" />
    </article>
  );
};

export default PopularList;
