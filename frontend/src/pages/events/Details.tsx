import EventService from "@/services/eventService";
import { EventType } from "@/types/event";
import React from "react";
import { useParams } from "react-router-dom";

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
  }, [id,setEvent]);

  if (event === null) {
    return <div>...Loading</div>;
  }
  return <div>{event?.name}</div>;
};

export default EventDetails;
