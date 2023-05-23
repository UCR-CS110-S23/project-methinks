import React from "react";
// import React, { useState } from "react";
import Kalendaryo from "kalendaryo";
import classes from "classnames";
import { isToday, isSameMonth } from "date-fns";
import "../../styles/Home.module.css";
import { BsFillCaretLeftFill } from "react-icons/bs";
import { BsFillCaretRightFill } from "react-icons/bs";

const MyCalendar = (Kalendaryo) => {
  const {
    getFormattedDate,
    getWeeksInMonth,
    // getDayLabelsInWeek,
    setSelectedDate,
    selectedDate,
    setDateNextMonth,
    setDatePrevMonth,
    date,
  } = Kalendaryo;

  const currentDate = getFormattedDate("MMMM YYYY");
  const selectDay = (date) => () => setSelectedDate(date);
  const weeksInCurrentMonth = getWeeksInMonth();
  const dayLabels = ["S", "M", "T", "W", "TH", "F", "S"];

  const isSelectedDay = (date) =>
    getFormattedDate(selectedDate) === getFormattedDate(date);
  const isDisabled = (dateValue) => !isSameMonth(date, dateValue);

  return (
    // <div className="w-full h-full p-0 m-0 text-[#333] bg-methinks-background">
    <div className="h-full">
      <div className="my-calendar">
        {/* <div className="flex justify-between items-center text-3xl w-full px-10 py-2"> */}
        <div className="my-calendar-header">
          {/* <button
          className="text-[2rem] text-methinks-white cursor-pointer"
          onClick={setDatePrevMonth}
        >
          <BsFillCaretLeftFill />
        </button>
        <span className="text-methinks-white font-bold">{currentDate}</span>
        <button
          className="text-[2rem] text-methinks-white cursor-pointer"
          onClick={setDateNextMonth}
        >
          <BsFillCaretRightFill />
        </button> */}
          <button onClick={setDatePrevMonth}>
            <BsFillCaretLeftFill />
          </button>

          <span>{currentDate}</span>

          <button onClick={setDateNextMonth}>
            <BsFillCaretRightFill />
          </button>
        </div>

        <div className="my-calendar-body">
          <div className="week day-labels">
            {dayLabels.map((label, index) => (
              <div className="day" key={index}>
                {label}
              </div>
            ))}
          </div>

          {weeksInCurrentMonth.map((week, i) => (
            <div className="week" key={i}>
              {week.map((day) => (
                <div
                  key={day.label}
                  disabled={isDisabled(day.dateValue)}
                  onClick={
                    isDisabled(day.dateValue) ? null : selectDay(day.dateValue)
                  }
                  className={classes("day", {
                    "is-selected": isSelectedDay(day.dateValue),
                    "is-today": isToday(day.dateValue),
                  })}
                >
                  {day.label}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Calendar() {
  // const [selected, setSelected] = useState();

  return <Kalendaryo render={MyCalendar} />;
}
