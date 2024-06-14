"use client";
import React, { useState } from "react";
import styles from "./MyCourses.module.css";
import Switch from "react-switch";
import { coursesData } from "@/utils/mockData";
import CommonButton from "@/components/commonButton/CommonButton";

const MyCourses: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  interface CoursesDetail {
    id: number;
    image: string;
    title: string;
    rating: string;
    likes: string;
    para: string;
    time: string;
  }

  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h3>My Courses</h3>
            <p className="text-subTXTColor">
              Total 6 courses you have purchased
            </p>
          </div>
          <div className="flex align-middle gap-5">
            <select className={styles.dropdown}>
              <option value="all">All Courses</option>
              <option value="digital-marketing">Digital Marketing</option>
            </select>
            <Switch
              onChange={handleChange}
              checked={checked}
              uncheckedIcon={false}
              checkedIcon={false}
              onColor="#37AD24"
              height={32}
              width={60}
            />
            <p className="text-subTXTColor my-auto">Hide completed</p>
          </div>
        </div>
      </div>
      <div className={styles.cardGrid}>
        {coursesData.map((item: CoursesDetail) => (
          <div
            key={item.id}
            className={styles.card}
            // Pass course ID to handleNavigate function
            // onClick={() => handleNavigate(item.id)}
          >
            <img
              className={styles.cardImage}
              src={item.image}
              alt="Course Image"
            />
            <div className={styles.cardBody}>
              <div className="flex align-middle justify-between">
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <div className="flex align-baseline justify-center gap-2">
                  <p className="my-auto">{item.rating}</p>
                  <div className="my-auto">
                    <img src="/svg/Star.svg" alt="star" />
                  </div>
                  <p className="my-auto">{item.likes}</p>
                </div>
              </div>
              <p
                className={`${styles.cardText} text-subTXTColor montserrat_gray mt-5`}
              >
                {item.para}
              </p>
              <div className="flex align-middle justify-between">
                <div className="flex align-middle gap-2 my-5">
                  <img src="/svg/timer.svg" alt="" />
                  <p className="montserrat-font">{item.time}</p>
                </div>
                <div className="flex flex-col justify-center">
                  <img src="/images/tutors.png" alt="tutors" />
                </div>
              </div>
              <CommonButton label="Place Bid" bgClr="#37AD24" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
``;
