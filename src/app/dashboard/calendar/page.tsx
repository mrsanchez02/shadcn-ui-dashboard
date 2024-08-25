"use client";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";

export default function Page() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([]);
  const smallDate = date?.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
  })

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
        disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
      />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
        disabled={(date) => date > new Date()}
      />
      <Calendar
        mode="multiple"
        selected={multipleDates}
        onSelect={setMultipleDates}
        className="rounded-md border"
      />
      <div>
        <h1 className="text-3xl">Informacion</h1>
        <div className="border-b border-gray-200 my-4" />
        <p>{smallDate}</p>
        <p>{multipleDates?.map((date) => date.toLocaleDateString()).join(', ')}</p>
      </div>
    </div>
  );
}