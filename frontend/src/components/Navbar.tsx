import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";
import { Link } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {
  return (
    <nav className="h-14 flex justify-between items-center px-4">
      <Sheet>
        <SheetTrigger>
          <Button variant={"ghost"} className="md:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"} className="w-[280px]">
          <SheetHeader className="text-2xl text-start">Event Plus</SheetHeader>
          <SheetDescription></SheetDescription>
          <ul className="space-y-4 mt-4">
            <SheetClose asChild>
              <li className="w-full">
                <Button asChild variant={"ghost"} className="w-full" size={'lg'}>
                  <Link to={"/"} >Home</Link>
                </Button>
              </li>
            </SheetClose>
            <SheetClose asChild>
              <li className="w-full">
                <Button asChild variant={"ghost"} className="w-full" size={'lg'}>
                  <Link to={"/register"} className="w-full">Register</Link>
                </Button>
              </li>
            </SheetClose>
            <SheetClose asChild>
              <li className="w-full">
                <Button asChild variant={"ghost"} className="w-full">
                  <Link to={"/events"}>Events</Link>
                </Button>
              </li>
            </SheetClose>
            <SheetClose asChild>
              <li className="w-full">
                <Button asChild variant={"ghost"} className="w-full">
                  <Link to={"/dashboard"} className="w-full">Dashboard</Link>
                </Button>
              </li>
            </SheetClose>
          </ul>
        </SheetContent>
      </Sheet>
      <ul className="space-x-4 hidden md:flex">
        <li>
          <Button asChild variant={"ghost"} className="text-lg">
            <Link to={"/"}>Home</Link>
          </Button>
        </li>
        <li>
          <Button asChild variant={"ghost"} className="text-lg">
            <Link to={"/register"}>Register</Link>
          </Button>
        </li>
        <li>
          <Button asChild variant={"ghost"} className="text-lg">
            <Link to={"/events"}>Events</Link>
          </Button>
        </li>
        <li>
          <Button asChild variant={"ghost"} className="text-lg">
            <Link to={"/dashboard"}>Dashboard</Link>
          </Button>
        </li>
      </ul>
      <ProfileDropdown />
    </nav>
  );
};

export default Navbar;
