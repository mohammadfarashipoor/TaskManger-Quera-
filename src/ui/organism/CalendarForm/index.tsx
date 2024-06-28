import { useState } from "react";
import { Calendar, DateObject } from "react-multi-date-picker";
import persian_fa from "react-date-object/locales/persian_fa";
import persian from "react-date-object/calendars/persian";

import "@/assets/styles/calender.css";
import SvgIcon from "@/ui/atom/SvgIcon";
import { Button } from "@/ui/atom/Button";
import { getDynamicDates } from "@/utils/getDates";
import Text from "@/ui/atom/typography/Text";
const CalendarForm = () => {
  const [startDate, setStartDate] = useState<DateObject>();
  const [endDate, setEndDate] = useState<DateObject>();

  const handleDateChange = (e: DateObject[]) => {
    //*  تاریخ شروع و پایان تسک در این تابع هندل میشود
    setStartDate(e[0]);
    setEndDate(e[1]);
  };

  return (
    <div className="calendar-form bg-white rounded-[20px] z-10 shadow-newTask p-5">
      <div className="flex flex-col">
        <div className="flex justify-between items-center pt-[51px] pb-[29px] px-[20px]">
          <div className="flex w-[438px] items-center gap-xs">
            <Text textSize="bodyM">{`زمان شروع : ${startDate || ""}`}</Text>
            <SvgIcon name="calendar" />
          </div>
          <div className="flex w-[438px] items-center gap-xs">
            <Text textSize="bodyM">
              {`زمان پایان : ${endDate?.convert(persian, persian_fa) || ""}`}
            </Text>
            <SvgIcon name="calendar" />
          </div>
        </div>

        <hr className="bg-gray-300" />
        <div className="w-full flex self-end justify-between gap-4">
          <div className="flex flex-col justify-between p-m gap-m w-72">
            {getDynamicDates().map((date, index) => (
              <div
                key={index}
                className="flex justify-between items-start cursor-pointer"
                onClick={() => setStartDate(date.date)}
              >
                <Text textSize="bodyM">{date.title}</Text>
                <Text textSize="bodyM" className=" text-gray-primary">
                  {String(date.date)}
                </Text>
              </div>
            ))}
          </div>
          <div className="px-8 pt-7 flex flex-col gap-2">
            <Calendar
              weekDays={[
                "شنبه",
                "یکشنبه",
                "دوشنبه",
                "سه شنبه",
                "چهارشنبه",
                "پنج شنبه",
                "جمعه",
              ]}
              className="calendar"
              onChange={handleDateChange}
              range
              calendar={persian}
              locale={persian_fa}
              value={startDate}
            />
            <Button className="w-[125px] py-[4px] px-[7px]" type="button">
              بستن
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarForm;
