import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { useAuthContext } from "@/context/authContext";
import EventService from "@/services/eventService";
import { EventType } from "@/types/event";
import React from "react";
import { useNavigate } from "react-router-dom";

const EventList = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthContext();
  const [eventList, setEventList] = React.useState<EventType[]>([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const list = await EventService.getList();
      setEventList(list);
    };
    fetchData();
  }, []);

  return (
    <div className="p-4 space-y-4">
      {isAuthenticated && (
        <div>
          <Button onClick={() => navigate("create")}>Create new Event</Button>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventList.map((event) => {
          return <EventCard {...event} />;
        })}
      </div>
    </div>
  );
};

export default EventList;
