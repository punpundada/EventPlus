import { z } from "zod";

export interface EventType {
  id: number;
  name: string;
  description: string;
  start_time: string;
  end_time: string;
  location: string;
  capacity: number;
  created_at: string;
  updated_at: string;
  image: any;
}

export const eventSchema = z.object({
  name: z
    .string({ required_error: "Please enter name" })
    .min(1, "Please enter name"),
  description: z
    .string({ required_error: "Please enter description" })
    .min(1, "Please enter description"),
  start_time: z
    .date({required_error:"Please select date"}),
  end_time: z
    .date({required_error:"Please select date"}),
  location: z
    .string({ required_error: "Please enter location" })
    .min(1, "Please enter location"),
  capacity: z.coerce
    .number({ required_error: "Please enter Capacity" })
    .min(1, "Please enter capacity")
    .positive("capacity cannot be negative"),
});

export type EventCreateType = z.infer<typeof eventSchema>;
