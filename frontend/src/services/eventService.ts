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

  static saveEvent = async (event: FormData) => {
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

  static getEventById = async (id: number) => {
    try {
      const response = await axiosInstance.get(`/events/${id}/`);
      if (response.data) {
        return response.data as EventType;
      }
      return undefined;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };
}
