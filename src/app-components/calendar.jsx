"use client";

import { useState, useEffect } from "react";
import * as React from "react";
import { Button } from "../components/ui/button";
import { Calendar } from "../components/ui/calendar";
import { Card, CardContent, CardFooter } from "../components/ui/card";
import { addDays } from "date-fns";
import { FieldLabel } from "../components/ui/field";
import { tr } from "date-fns/locale";

export function CalendarDate({
  dateSelected,
  calendarBorderWarning,
  dateInput,
}) {
  const [date, setDate] = React.useState(
    new Date(new Date().getFullYear(), 1, 12),
  );
  const [currentMonth, setCurrentMonth] = React.useState(
    new Date(new Date().getFullYear(), new Date().getMonth(), 1),
  );

  // Determine if we are in an error state:
  // We show error if the parent says so (calendarBorderWarning) AND we still don't have a dateInput.
  // If the user selects a date (dateInput becomes true), the error clears immediately visually.
  const isInvalid = calendarBorderWarning && !dateInput;

  return (
    <>
      <Card
        className={`mx-auto w-fit bg-[#313437] text-white pt-0 pe-0 max-w-[300px] ${isInvalid ? "border-2 border-red-500" : ""}`}
        size="sm"
        onClick={(e) => e.stopPropagation()}
      >
        <FieldLabel
          className={`m-auto pt-4 ${isInvalid ? "text-red-500" : "text-white"}`}
        >
          {isInvalid
            ? "!Please choose a date"
            : "Select a due date for your Todo"}
        </FieldLabel>
        <CardContent>
          <Calendar
            mode="single"
            selected={date}
            dateSelected={dateSelected}
            onSelect={(day) => {
              setDate(day);
              // Ensure we update the parent state so the error clears
              if (dateSelected) dateSelected(day);
            }}
            month={currentMonth}
            onMonthChange={setCurrentMonth}
            className="p-0 [--cell-size:--spacing(9)]"
            showOutsideDays={false}
          />
        </CardContent>
        <CardFooter className="flex py-0  flex-wrap gap-2 border-t">
          {[
            { label: "Today", value: 0 },
            { label: "Tomorrow", value: 1 },
            { label: "In 3 days", value: 3 },
            { label: "In a week", value: 7 },
            { label: "In 2 weeks", value: 14 },
          ].map((preset) => (
            <Button
              key={preset.value}
              variant="outline"
              size="sm"
              className="flex-1 py-0 bg-[#313437] hover:bg-[#272a2c]"
              onClick={() => {
                const newDate = addDays(new Date(), preset.value);
                setDate(newDate);
                dateSelected(newDate);
                setCurrentMonth(
                  new Date(newDate.getFullYear(), newDate.getMonth(), 1),
                );
              }}
            >
              {preset.label}
            </Button>
          ))}
        </CardFooter>
      </Card>
    </>
  );
}

export function CalendarBasic() {
  return (
    <>
      <Card className=" border-0 m-0  h-[22rem] pb-12 bg-[#1E232A] text-white flex-col justify-center items-center ">
        <FieldLabel className={`mb-0 pb-0 pt-32 me-15 text-[1.2rem]`}>
          Upcoming at a glance
        </FieldLabel>
        <CardContent>
          <Calendar mode="single" className="rounded-lg border bg-green-500 mb-6 px-1 border-0 pb-18 "  classNames={{
              caption_label: "pb-2", // You can adjust the pb value here (e.g., pb-4, pb-6)
              day: "hover:bg-green-600 rounded-md transition-colors mx-0.5", // Targets individual date items
            }}/>
        </CardContent>
      </Card>
    </>
  );
}
