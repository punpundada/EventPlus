import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";
import { Link } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {
  return (
    <nav className="h-14 bg-accent text-accent-foreground flex justify-between items-center px-4">
      <Sheet>
        <SheetTrigger>
          <Button variant={"ghost"} className="md:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"} className="w-[280px]">
          <SheetHeader>Header</SheetHeader>
          <SheetDescription>Description</SheetDescription>
          <ul className="space-y-4">
            <li>
              <Button asChild variant={"ghost"}>
                <Link to={"/"}>Home</Link>
              </Button>
            </li>
            <li>
              <Button asChild variant={"ghost"}>
                <Link to={"/register"}>Register</Link>
              </Button>
            </li>
            <li>
              <Button asChild variant={"ghost"}>
                <Link to={"/events"}>Events</Link>
              </Button>
            </li>
            <li>
              <Button asChild variant={"ghost"}>
                <Link to={"/dashboard"}>Dashboard</Link>
              </Button>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
      <ul className="space-x-4 hidden md:flex">
        <li>
          <Button asChild variant={"ghost"}>
            <Link to={"/"}>Home</Link>
          </Button>
        </li>
        <li>
          <Button asChild variant={"ghost"}>
            <Link to={"/register"}>Register</Link>
          </Button>
        </li>
        <li>
          <Button asChild variant={"ghost"}>
            <Link to={"/events"}>Events</Link>
          </Button>
        </li>
        <li>
          <Button asChild variant={"ghost"}>
            <Link to={"/dashboard"}>Dashboard</Link>
          </Button>
        </li>
      </ul>
      <ProfileDropdown/>
    </nav>
  );
};

export default Navbar;
