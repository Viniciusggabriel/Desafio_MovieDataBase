<<<<<<< Updated upstream
import ListSearchMovies from "@/components/layouts/list-search-movies";
=======
import HomeNewList from "@/components/layouts/section/HomeNewList";
import NavMenu from "@/components/layouts/header/NavMenu";
import PopularMovies from "@/components/utils/PopularMovies";
import PopularList from "@/components/layouts/section/PopularList";
import TopRatedList from "@/components/layouts/section/TopRatedList";
>>>>>>> Stashed changes

export default function Home() {
  return (
<<<<<<< Updated upstream
    <main>
      <ListSearchMovies />
    </main>
=======
    <>
      <NavMenu itens={["#home", "#popular", "#top_rated"]} />
      <main>
        <section id="home">
          <HomeNewList />
        </section>
        <section id="popular" className="flex justify-center">
          <PopularList />
        </section>
        <section id="top_rated" className="flex justify-center">
          <TopRatedList />
        </section>
      </main>
    </>
>>>>>>> Stashed changes
  );
}
