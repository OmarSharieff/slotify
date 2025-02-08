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

export function RenderCalendar({ availability }: iAppProps) {
  const isDateUnavailable = (date: DateValue) => {
    // dayOfWeek returns index of array, 0 - Sunday, 1 - Monday, etc.
    const dayOfWeek = date.toDate(getLocalTimeZone()).getDay();
    // Have to adjust the indexes so that 0 - Monday ... 6 - Sunday (Calendar starts from Monday)
    const adjustedIndex = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    // simply returns the opposite of 'isActive'.
    return !availability[adjustedIndex].isActive;
  };

  return <Calendar minValue={today(getLocalTimeZone())} isDateUnavailable={isDateUnavailable} />;
}
