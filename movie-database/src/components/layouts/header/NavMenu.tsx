"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/NavigationMenu";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { ModeToggle } from "./navigation/ModeToggle";
import InputSearchUrl from "./navigation/InputSearchUrl";
import { Button } from "../../ui/Button";

interface NavMenuRoutesProps {
  itens: string[];
}

const NavMenu = (props: NavMenuRoutesProps) => {
  const dynamicTextMapping: string | any = {
    "#popular": "Popular",
    "#new": "Novos",
    "#top_rated": "Top",
    "#home": "Home",
    "/#popular": "Popular",
    "/#new": "Novos",
    "/#top_rated": "Top",
    "/#home": "Home",
  };

  return (
    <header className="flex justify-center">
      <NavigationMenu className="p-2 fixed z-50">
        <NavigationMenuList className="grid grid-rows-2 md:flex p-2 border-2 rounded-md  backdrop-blur-sm hover:transition-all hover:bg-slate-300 dark:hover:bg-slate-900">
          <NavigationMenuItem className="row-start-1">
            <ModeToggle />
          </NavigationMenuItem>

          <NavigationMenuItem className="row-start-1 flex">
            {props.itens.map((routes, index) => {
              const modifiedRoute = dynamicTextMapping[routes] || routes;

              return (
                <Link href={routes} legacyBehavior passHref key={index}>
                  <NavigationMenuLink>
                    <Button variant={"ghost"}>{modifiedRoute}</Button>
                  </NavigationMenuLink>
                </Link>
              );
            })}
          </NavigationMenuItem>

          <NavigationMenuItem className="row-start-2 col-span-2">
            <InputSearchUrl />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default NavMenu;
