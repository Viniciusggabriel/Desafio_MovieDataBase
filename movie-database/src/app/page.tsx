import HomeNewList from "@/components/layouts/section/HomeNewList";
import NavMenu from "@/components/layouts/header/NavMenu";
import PopularList from "@/components/layouts/section/PopularList";
import TopRatedList from "@/components/layouts/section/TopRatedList";

export default function Home() {
  return (
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
  );
}
