import EventService from "@/services/eventService";
import { EventType } from "@/types/event";
import React from "react";
import { useParams } from "react-router-dom";
import image from "@/assets/jakub-zerdzicki-ykgLX_CwtDw-unsplash.jpg";
import { Card } from "@/components/ui/card";
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
    <div className="h-full">
      <div className="relative h-1/3 md:h-1/2 -z-10">
        <img src={image} className="object-cover w-full h-full" />
      </div>
      <div>
        <Card>

        </Card>
      </div>
  </div>
  );
};

export default EventDetails;
