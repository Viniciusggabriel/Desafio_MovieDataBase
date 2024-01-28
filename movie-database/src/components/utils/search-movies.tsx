import * as React from "react";
import { useState, useEffect } from "react";
import { fetchSearchApi } from "@/api/api";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
    <article className="grid grid-cols-2 gap-x-8 gap-y-3 md:grid-cols-4">
      {movies.map((movie, index) => (
        <Card className={cn("w-[150px]", "md:w-[260px]")}>
          <CardHeader>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary">Ver mais</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[475px]">
                <DialogHeader>
                  <DialogTitle className="pt-4">{movie.title}</DialogTitle>
                  <DialogDescription>{movie.original_title}</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <Image
                    src={
                      "https://image.tmdb.org/t/p/w500" + movie.backdrop_path
                    }
                    alt={movie.title}
                    width={500}
                    height={150}
                    className="rounded-xl"
                  />
                </div>
                <DialogFooter>
                  <p>{movie.overview}</p>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent className="flex aspect-square flex-col items-center justify-center p-2">
            <Image
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
              alt={movie.title}
              width={500}
              height={500}
              className="rounded-xl"
            />
          </CardContent>
        </Card>
      ))}
    </article>
  );
};

export default SearchMovies;
