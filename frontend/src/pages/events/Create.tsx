import DateTimeControl from "@/components/formcontrol/DateTimeControl";
import InputControl from "@/components/formcontrol/Input";
import TextField from "@/components/formcontrol/TextField";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import EventService from "@/services/eventService";
import { EventCreateType, eventSchema } from "@/types/event";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const EventCreate = () => {
  const navigate = useNavigate();
  const form = useForm<EventCreateType>({
    defaultValues: {
      capacity: "" as any,
      description: "",
      location: "",
      name: "",
      end_time: undefined,
      start_time: undefined,
    },
    mode: "onChange",
    resolver: zodResolver(eventSchema),
  });

  const onSubmit = async (params: EventCreateType) => {
    const isSuccess = await EventService.saveEvent(params);
    if(isSuccess){
      navigate("..")
    }
  };
  return (
    <div className="flex justify-center items-center h-full">
      <Card className="w-[90%] md:w-[80%] lg:w-[65%]">
        <CardHeader>
          <CardTitle>Event</CardTitle>
          <CardDescription>Save a new Event</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <InputControl
                name="name"
                label="Name"
                placeholder="Enter Event Name"
              />
              <InputControl
                name="capacity"
                label="Capacity"
                placeholder="Enter Event Capacity"
              />
              <div className="col-span-full">
                <TextField
                  name="description"
                  label="Description"
                  placeholder="Enter Event Description"
                />
              </div>

              <DateTimeControl
                name="start_time"
                label="Start Time"
                placeholder="Select Start Time"
              />

              <DateTimeControl
                name="end_time"
                label="End Time"
                placeholder="Select End Time"
              />
              <div className="col-span-full">
                <TextField
                  name="location"
                  label="location"
                  placeholder="Enter Event location"
                />
              </div>
              <div>
                <Button type="submit">Save</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventCreate;
