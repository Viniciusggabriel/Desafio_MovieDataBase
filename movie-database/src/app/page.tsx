import ListNewMoviesBgSlider from "@/components/layouts/list-new-movies";
import ListSearchMovies from "@/components/layouts/list-search-movies";

export default function Home() {
  return (
    <main>
      <ListNewMoviesBgSlider />
      <ListSearchMovies />
    </main>
  );
}
