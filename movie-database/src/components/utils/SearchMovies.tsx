import * as React from "react";
import { fetchSearchApi } from "@/api/api";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ChevronUpIcon } from "@radix-ui/react-icons";

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

interface definitionProps {
  nameMovie: string;
}

const SearchMovies = (props: definitionProps) => {
  const [movies, setMovies] = useState<SearchDataProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchSearchApi(props.nameMovie);
        const data = response.results || [];
        setMovies(data);
      } catch (error) {
        console.log("Ouve um erro ao achar seu filme", error);
      }
    };
    fetchData();
  }, [props.nameMovie]);

  return (
    <section className="grid grid-cols-2 gap-x-8 gap-y-3 pt-20 md:grid-cols-6">
      {movies.map((movie, index) => (
        <Card className={cn("w-[150px]", "md:w-[170px]")} key={index}>
          <CardHeader>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary">
                  <ChevronUpIcon className="h-4 w-4" />
                  <span className="mx-2">Ver mais</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[475px]">
                <DialogHeader>
                  <DialogTitle className="pt-4">{movie.title}</DialogTitle>
                  <DialogDescription>{movie.release_date}</DialogDescription>
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
                  {/* Dialog de overview */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="secondary">
                        <ChevronUpIcon className="h-4 w-4" />
                        <span className="mx-2">overview</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <p className="text-sm text-start indent-8 p-3">{movie.overview}</p>
                    </DialogContent>
                  </Dialog>
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
    </section>
  );
};

export default SearchMovies;
