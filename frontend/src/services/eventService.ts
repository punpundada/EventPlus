import axiosInstance from "@/constants/axiosInstance";
import { EventCreateType, EventType } from "@/types/event";

export default class EventService {
  static getList = async () => {
    try {
      const response = await axiosInstance.get("/events/");
      return response.data as EventType[];
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  static saveEvent = async (event: EventCreateType) => {
    try {
      const response = await axiosInstance.post("/events/create/", event);
      if (response.data) {
        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
}
