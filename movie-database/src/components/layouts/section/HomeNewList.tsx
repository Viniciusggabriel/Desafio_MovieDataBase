"use client";
import NewMovies from "../../utils/NewMovies";

const HomeNewList = () => {
  return (
    <article className="flex justify-center items-center relative ">
      <NewMovies
        divImage="w-full h-screen flex items-center justify-center"
        image="w-full h-full md:w-10/12 md:h-10/12 md:mt-14 rounded-md object-cover"
      />
    </article>
  );
};

export default HomeNewList;
