import EventService from "@/services/eventService";
import { EventType } from "@/types/event";
import React from "react";
import { useParams } from "react-router-dom";
import image from "@/assets/jakub-zerdzicki-ykgLX_CwtDw-unsplash.jpg";
import { Card, CardContent } from "@/components/ui/card";
// https://cdn.dribbble.com/users/2094032/screenshots/6125706/event_page_4x.png
const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = React.useState<EventType | null | undefined>(null);

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
  return (
    <div className="h-full relative">
      <div className="relative h-1/3 md:h-1/2 -z-10">
        <img src={image} className="object-cover w-full h-full" />
      </div>
      <div>
        <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-[90%] md:w-[65%]">
            <CardContent className="grid grid-cols-1 md:grid-cols-[.70fr_.30fr]">
              <div className="border-b md:border-l border-dashed border-transparent">mmainmainmainmainmainmainmainain</div>
              {/* <div className="border-l border-dashed border-transparent md:border-gray-300"></div> */}
              <div>seco</div>
            </CardContent>
        </div>
      </div>
  </div>
  );
};

export default EventDetails;
