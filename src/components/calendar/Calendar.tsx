import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./Calendar.module.css";

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<number | null>(
    new Date().getDate()
  );

  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

  const getMonthName = (date: Date) => {
    return date.toLocaleString("default", { month: "long" });
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const handleDateClick = (date: number | null) => {
    setSelectedDate(date);
  };

  const generateCalendar = (): (number | null)[] => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    ).getDay();
    const daysArray: (number | null)[] = Array.from(
      { length: daysInMonth },
      (_, i) => i + 1
    );

    for (let i = 0; i < firstDay; i++) {
      daysArray.unshift(null);
    }

    return daysArray;
  };

  const daysArray = generateCalendar();

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.header}>
        <FaChevronLeft onClick={handlePrevMonth} className={styles.icon} />
        <h2>
          {getMonthName(currentDate)} {currentDate.getFullYear()}
        </h2>
        <FaChevronRight onClick={handleNextMonth} className={styles.icon} />
      </div>
      <div className={styles.daysOfWeek}>
        {daysOfWeek.map((day, index) => (
          <div key={index} className={styles.day}>
            {day}
          </div>
        ))}
      </div>
      <div className={styles.dates}>
        {daysArray.map((date, index) => (
          <div
            key={index}
            className={`${styles.date} ${
              date === selectedDate ? styles.selectedDate : ""
            } ${index < 7 ? styles.firstRow : ""}`}
            onClick={() => handleDateClick(date)}
          >
            {date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
