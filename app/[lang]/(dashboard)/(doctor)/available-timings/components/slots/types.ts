interface TimeSlot {
  startTime: string;
  endTime: string;
}

interface Day {
  dayName: string;
  times: TimeSlot[];
}

export const days: Day[] = [
  {
    dayName: "Monday",
    times: [
      { startTime: "09:00 AM", endTime: "05:00 PM" },
      { startTime: "09:00 AM", endTime: "05:00 PM" },
      { startTime: "09:00 AM", endTime: "05:00 PM" },
    ],
  },
  {
    dayName: "Tuesday",
    times: [{ startTime: "09:00 AM", endTime: "05:00 PM" }],
  },
  {
    dayName: "Wednesday",
    times: [{ startTime: "09:00 AM", endTime: "05:00 PM" }],
  },
  {
    dayName: "Thursday",
    times: [{ startTime: "09:00 AM", endTime: "05:00 PM" }],
  },
  {
    dayName: "Friday",
    times: [],
  },
  {
    dayName: "Saturday",
    times: [],
  },
  {
    dayName: "Sunday",
    times: [],
  },
];
