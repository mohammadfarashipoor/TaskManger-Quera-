import FullCalendar from "@fullcalendar/react";
import jalaliMoment from "jalali-moment";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "@/assets/styles/fullCalendar.css";
function CalendarViewPage() {
  const [events, setEvents] = useState<any>([]);
  const [selectedDate, setSelectedDate] = useState<any>();
  const handleDateClick = (info: any) => {
    const clickedDate = info.dateStr;
    const persianDate = jalaliMoment(clickedDate, "YYYY-MM-DD").locale("fa");
    setSelectedDate(persianDate);
    console.log(info);
  };
  const onEventClick = (info: any) => {
    console.log(info);
  };
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        locale="fa"
        firstDay={6}
        weekends={true}
        selectable={true}
        events={events}
        direction="rtl"
        showNonCurrentDates={true}
        viewClassNames={"CalView"}
        dayCellClassNames={"CalCell"}
        weekNumberClassNames={"CalHeader"}
        dayHeaderClassNames={"CalDayHeader"}
        fixedWeekCount={false}
        weekNumbers={false}
        aspectRatio={1}
        buttonText={{ today: "امروز" }}
        buttonHints={{ today: "امروز", next: "بعدی", prev: "قبلی" }}
        dateClick={handleDateClick}
        eventClassNames={"event"}
        height={"80vh"}
        eventClick={onEventClick}
      />
    </div>
  );
}

export default CalendarViewPage;
