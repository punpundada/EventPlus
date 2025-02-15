import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { EventType } from "@/types/event";
import { motion } from "framer-motion";

const EventCard = (event: EventType) => {
  const navigate = useNavigate()
  return (
    // <motion.div className="hover:rotate-2 transition-all">
    <motion.div whileHover={{rotate:2}} whileFocus={{rotate:2}}>
      <Card className="cursor-pointer" onClick={() => navigate(`/events/${event.id}`)}>
        <CardHeader>
          <CardTitle>{event.name}</CardTitle>
          <CardDescription>{event.description}</CardDescription>
        </CardHeader>
        <CardContent>Image</CardContent>
        <CardFooter className="flex-col space-y-2">
          <span className="w-full">
            Start Time:   {<FormatDate date={new Date(event.start_time)} />}{" "}
          </span>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default EventCard;

type props = {
  date: Date;
};

const FormatDate = ({ date }: props) => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  const time = date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return `${day}/${month}/${year} - ${time}`;
};
