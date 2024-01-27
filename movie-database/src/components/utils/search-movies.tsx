import * as React from "react";
import { useState, useEffect } from "react";
import { fetchSearchApi } from "@/api/api";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface SearchDataProps {
  backdrop_path: string;
  genres: { id: number; name: string }[];
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
}

interface childrenSearchMovies {
  nameMovie: string;
}

const SearchMovies: React.FC<childrenSearchMovies> = ({ nameMovie }) => {
  const [movies, setMovies] = useState<SearchDataProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchSearchApi(nameMovie);
        const data = response.results || [];
        setMovies(data);
      } catch (error) {
        console.log("Ouve um erro ao achar seu filme", error);
      }
    };
    fetchData();
  }, [nameMovie]);

  return (
    <Carousel className="w-full max-w-xl">
      <CarouselContent className="-ml-1">
        {movies.map((movie, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square flex-col items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{movie.title}</span>
                  <Image
                    src={
                      "https://image.tmdb.org/t/p/w500" + movie.backdrop_path
                    }
                    alt={movie.title}
                    width={500}
                    height={500}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default SearchMovies;
