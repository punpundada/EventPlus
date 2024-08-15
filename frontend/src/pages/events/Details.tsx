import EventService from "@/services/eventService";
import { EventType } from "@/types/event";
import React from "react";
import { Navigate, useParams } from "react-router-dom";
import image from "@/assets/jakub-zerdzicki-ykgLX_CwtDw-unsplash.jpg";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock } from "lucide-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
// https://cdn.dribbble.com/users/2094032/screenshots/6125706/event_page_4x.png
const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = React.useState<EventType | null | undefined>(null);
  const ismd = useMediaQuery("md");
  React.useEffect(() => {
    if (id && !isNaN(+id)) {
      const fetchData = async () => {
        const data = await EventService.getEventById(+id);
        setEvent(data);
      };
      fetchData();
    }
  }, [id, setEvent]);

  if (event === null) {
    return <div>...Loading</div>;
  }
  if (event === undefined) {
    return <Navigate to={".."} />;
  }
  return (
    <div className="h-full relative">
      <div className="relative h-1/3 md:h-1/2 -z-10">
        <img src={image} className="object-cover w-full h-full" />
        <div>
          <div className="absolute -bottom-[150%] md:-bottom-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-[90%] md:w-[65%] grid grid-cols-1 md:grid-cols-[.60fr_.40fr]">
            <Card>
              <CardHeader>
                <CardTitle>{event?.name}</CardTitle>
                <CardDescription>{event?.description}</CardDescription>
              </CardHeader>
              <CardContent className="">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div>
                    <div className="flex justify-start md:items-center gap-2">
                      <Clock /> {ismd && <span className="text-xs">Start Date and Time</span>}
                    </div>
                    <div></div>
                  </div>
                  <div>time</div>
                </div>
                <div>address</div>
                <div>share with</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Register</CardTitle>
              </CardHeader>
              <CardContent>form</CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
/*
            <CardContent className="grid grid-cols-1 md:grid-cols-[.70fr_.30fr]">
              <div className="border-b md:border-l border-dashed border-transparent">mmainmainmainmainmainmainmainain</div>
               <div className="border-l border-dashed border-transparent md:border-gray-300"></div> 
              <div>seco</div>
            </CardContent>
*/
