import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock } from "lucide-react";
import { AddSlots } from "../add-slots-dialog";
import { DeleteSlots } from "../delete-slots-dialg";
import { days } from "../types";

export default function GeneralSlotContent() {
  return (
    <TabsContent value="general">
      <Tabs defaultValue="monday" className="w-full my-4">
        <div className="w-full border p-6 rounded-md">
          <h1 className="text-xl font-semibold">Select Available Slots</h1>
          <hr className="my-4" />

          <div>
            <p className="my-4">Select Available Days</p>

            <TabsList className="bg-transparent flex flex-wrap justify-start h-auto gap-4">
              {days.map(({ dayName }) => (
                <TabsTrigger
                  key={dayName}
                  value={dayName.toLowerCase()}
                  className="h-10 px-4 bg-primary/10 hover:text-blue-500 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {dayName}
                </TabsTrigger>
              ))}
            </TabsList>

            {days.map(({ dayName, times }) => (
              <TabsContent
                key={dayName}
                value={dayName.toLowerCase()}
                className="mt-4 border p-4"
              >
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-semibold">{dayName}</span>

                    <div className="flex items-center gap-4">
                      <AddSlots day={dayName} />
                      <DeleteSlots />
                    </div>
                  </div>

                  {times.length > 0 ? (
                    <div className="flex flex-wrap justify-start gap-4">
                      {times.map((time, index) => (
                        <Badge
                          className="bg-primary/10 hover:bg-primary text-default-500 hover:text-primary-foreground rounded-md h-10 flex gap-2 w-fit cursor-pointer"
                          key={index}
                        >
                          <Clock size={14} />
                          <span>{`${time?.startTime} - ${time?.endTime}`}</span>
                        </Badge>
                      ))}
                    </div>
                  ) : (
                    <p>No slots available</p>
                  )}
                </div>
              </TabsContent>
            ))}
          </div>
        </div>
      </Tabs>
    </TabsContent>
  );
}
