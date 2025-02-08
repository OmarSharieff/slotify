"use client";
import { Calendar } from "./Calendar";
import { today, getLocalTimeZone } from "@internationalized/date";
import { DateValue } from "@react-types/calendar";
// iAppProps is an array of 7 days
interface iAppProps {
  availability: {
    day: string;
    isActive: boolean;
}[]; 

}

export function RenderCalendar({availability}: iAppProps) {
  
  const isDateUnavailable = (date: DateValue)=> {
    const dayOfWeek = date.toDate(getLocalTimeZone()).getDay();
  }

  return <Calendar minValue={today(getLocalTimeZone())} isDateUnavailable={}/>;
}
