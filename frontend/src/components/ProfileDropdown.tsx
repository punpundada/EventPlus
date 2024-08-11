import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "@/context/authContext";
import AuthService from "@/services/authService";

const ProfileDropdown = () => {
  const navigate = useNavigate();
  const {isAuthenticated} = useAuthContext()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Events</DropdownMenuItem>
       {isAuthenticated ? <DropdownMenuItem onClick={AuthService.logout}>
        Logout
       </DropdownMenuItem> : <DropdownMenuItem onClick={() => navigate("/auth/login")}>
          Login
        </DropdownMenuItem>}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
