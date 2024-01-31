"use client";
import TopRatedMovies from "@/components/utils/TopRatedMovies";

const TopRatedList = () => {
  return (
    <article className="w-10/12 border-y-2 py-2 my-10">
      <h1 className="text-center text-xl mb-5">Filmes com maior nota</h1>
      <TopRatedMovies
        divImage="w-52"
        image="w-full h-full object-cover rounded-md object-cover"
      />
    </article>
  );
};

export default TopRatedList;
