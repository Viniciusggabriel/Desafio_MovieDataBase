import * as React from "react";
import { fetchApi } from "@/api/api";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
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
import { Card, CardContent, CardFooter, CardHeader } from "../ui/Card";
import { Button } from "../ui/Button";
import { ChevronUpIcon } from "@radix-ui/react-icons";

interface TopRatedDataProps {
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
  divImage: string;
  image: string;
}

const TopRatedMovies = (props: definitionProps) => {
  const [movies, setMovies] = useState<TopRatedDataProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchApi(
          "https://api.themoviedb.org/3/movie/top_rated"
        );
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
    <Carousel
      plugins={[plugin.current]}
      className="max-w-fit w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {movies.map((movie, index) => (
          <CarouselItem key={index} className="basis-4/10">
            <Card className="flex flex-col items-center">
              <CardHeader>{}</CardHeader>
              <CardContent>
                <div className={props.divImage}>
                  <Image
                    src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                    alt={movie.title}
                    width={500}
                    height={500}
                    className={props.image}
                  />
                </div>
              </CardContent>
              <CardFooter>
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
                      <DialogDescription>
                        {movie.release_date}
                      </DialogDescription>
                      <DialogDescription>
                        {movie.vote_average.toFixed(2)}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <Image
                        src={
                          "https://image.tmdb.org/t/p/w500" +
                          movie.backdrop_path
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
                          <p className="text-sm text-start indent-8 p-3">
                            {movie.overview}
                          </p>
                        </DialogContent>
                      </Dialog>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div>
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};

export default TopRatedMovies;
