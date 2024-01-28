import { fetchNewApi } from "@/api/api";
import { useEffect, useState } from "react";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

interface SearchDataProps {
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  title: string;
  video: boolean;
  vote_average: number;
  release_date: string;
}

const NewMovies = () => {
  const [movies, setMovies] = useState<SearchDataProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchNewApi();
        const data = response.results;
        setMovies(data);
      } catch (error) {
        console.log("Ouve um erro ao achar seu filme", error);
      }
    };
    fetchData();
  }, []);

  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: true })
  );

  return (
    <section className="flex justify-center">
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-fit"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {movies.map((movie, index) => (
            <CarouselItem key={index}>
              <div className="w-full h-screen">
                <Image
                  src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
                  alt={movie.title}
                  width={500}
                  height={500}
                  className="rounded-xl w-full h-full object-cover blur-sm"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default NewMovies;
