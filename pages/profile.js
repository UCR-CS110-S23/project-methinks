import React from "react";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// const localizer = momentLocalizer(moment);
import "../styles/Home.module.css";

import Calendar from "@/components/Profile/Calendar";

const Profile = () => {
  // const events = [
  //   {
  //     title: "Event 1",
  //     start: new Date(2023, 4, 15),
  //     end: new Date(2023, 4, 16),
  //   },
  //   {
  //     title: "Event 2",
  //     start: new Date(2023, 4, 17),
  //     end: new Date(2023, 4, 18),
  //   },
  // ];

  return (
    <div className="h-full w-full flex justify-between bg-methinks-background">
      <div className="flex flex-col w-1/2 m-10 gap-y-10">
        <div className="flex items-center gap-x-5 bg-methinks-gray p-7 rounded-xl">
          <div className="rounded-full bg-methinks-darkgray pr-1 w-[120px] h-[120px]"></div>
          <div className="flex flex-col">
            <p className="m-0 text-methinks-white font-bold text-4xl">Name</p>
            <p className="m-0 text-methinks-lightgray font-medium text-2xl">
              @blah
            </p>
            <p className="m-0 text-methinks-lightgray font-medium text-xl">
              Horrified looks from everyone in the room but im only looking at
            </p>
          </div>
        </div>
        {/* <div className="!h-full !w-full text-methinks-white"> */}
        {/* <div className="rbc-header"> */}
        {/* <Calendar
              value={selectedDay}
              onChange={setSelectedDay}
              locale={myCustomLocale} // custom locale object
              //   className="!bg-red-500"
              //   style={{
              //     display: "flex !important",
              //     justifyContent: "center !important",
              //     padding: "1rem 2rem !important",
              //   }}
              //   inputClassName="w-full"
              style={{ fontSize: "14px" }}
              //   className="responsive-calendar"
              //   calendarClassName="responsive-calendar"
            />
          </div> */}
        {/* <Calendar
            // className="rbc-header"
            localizer={localizer}
            events={events}
            defaultView="month"
            views={["month"]}
            startAccessor="start"
            endAccessor="end"
            className="rbc-header"
            dayPropGetter={(event) => {
              const bg =
                new Date(event).toLocaleDateString() ==
                new Date().toLocaleDateString()
                  ? "!bg-methinks-darkgray"
                  : "!bg-methinks-background";
              return {
                className: `${bg}`,
                style: {
                  margin: 0,
                  padding: 0,
                },
              };
            }}
          /> */}
        <div className="!h-full !w-full mb-10 bg-slate-300">
          <Calendar />
        </div>
      </div>
      <div className="w-1/2 flex flex-col gap-y-10 m-10">
        <div className="flex gap-x-7 items-center">
          <p className="text-methinks-white font-bold text-4xl m-0">Memories</p>
          <p className="text-methinks-darkgray text-2xl m-0">5.16.23</p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-5 text-methinks-white">
          <div className="flex gap-x-2 items-center">
            <span className="rounded-full bg-methinks-white pr-1 w-[20px] h-[20px]"></span>
            <p className="font-publicSans mb-0">Thought</p>
          </div>
          <div className="flex gap-x-2 items-center">
            <span className="rounded-full bg-methinks-darkgray pr-1 w-[20px] h-[20px]"></span>
            <p className="m-0">Prompt</p>
          </div>
          <div className="flex gap-x-2 items-center">
            <span className="rounded-full bg-methinks-purple pr-1 w-[20px] h-[20px]"></span>
            <p className="m-0">Fleeting Thought</p>
          </div>
          <div className="flex gap-x-2 items-center">
            <span className="rounded-full bg-methinks-black pr-1 w-[20px] h-[20px]"></span>
            <p className="m-0">Think Out Loud</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 bg-methinks-gray p-3 rounded-xl h-full">
          <div className="h-1/5 w-full bg-white rounded-xl"></div>
          <div className="h-1/5 w-full bg-white rounded-xl"></div>
          <div className="h-1/5 w-full bg-white rounded-xl"></div>
          <div className="h-1/5 w-full bg-white rounded-xl"></div>
          <div className="h-1/5 w-full bg-white rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
