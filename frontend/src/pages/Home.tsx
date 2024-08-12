
import WordPullUp from "@/components/magicui/word-pull-up";
import image from "@/assets/jakub-zerdzicki-ykgLX_CwtDw-unsplash.jpg";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BellRing, PocketKnife, SquarePen } from "lucide-react";
import { motion } from "framer-motion";


const Home = () => {
  return (
    <div className="md:overflow-hidden md:max-h-full">
      <div className="grid grid-cols-1 md:grid-cols-[.60fr_.40fr] px-4 md:px-10 pt-8">
        <div className="flex justify-center items-center flex-col gap-4">
          <WordPullUp
            className="text-6xl font-semibold font-Archivo_Black w-[80%] text-start"
            words="Event Management Made Easier For Everyone"
          />
          <span className="w-[80%]">Streamline your event planning with our intuitive platform. From seamless registration and scheduling to real-time updates and attendee management</span>
        </div>
        <div>
          <img src={image} className="rounded-3xl" />
        </div>
      </div>
      <p className="text-center text-4xl py-10">Our Services</p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-24">

        <motion.div whileHover={{ y: -140 }}>
          <Card className="">
            <CardHeader>
              <CardTitle>
                <SquarePen />
              </CardTitle>
              <CardDescription>Seamless Event Creation</CardDescription>
            </CardHeader>
            <CardContent>
              Create and customize events effortlessly with our user-friendly interface. Choose from a variety of templates, set up event details, and manage everything from a single dashboard.
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ y: -140 }}>
          <Card className="">
            <CardHeader>
              <CardTitle>
                <PocketKnife />
              </CardTitle>
              <CardDescription>Advanced Attendee Tools</CardDescription>
            </CardHeader>
            <CardContent>
              Manage registrations, track attendance, and communicate with your guests in real-time. Our platform provides powerful tools for handling all aspects of attendee management
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ y: -140 }}>
          <Card className="">
            <CardHeader>
              <CardTitle>
                <BellRing />
              </CardTitle>
              <CardDescription>Instant Notifications</CardDescription>
            </CardHeader>
            <CardContent>
              Keep your attendees informed with automatic updates and notifications. Whether it’s a schedule change or important announcements, our system ensures everyone stays in the loop.
            </CardContent>
          </Card>
        </motion.div>

      </div>
    </div>
  )
};

export default Home;
