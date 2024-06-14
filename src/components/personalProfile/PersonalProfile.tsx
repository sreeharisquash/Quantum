import React, { useState } from "react";
import styles from "./PersonalProfile.module.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { profileAboutData, projectsData, timelineData } from "@/utils/mockData";
import Image from "next/image";
import ProgressBar from "@ramonak/react-progress-bar";

interface ProjectsDetail {
  id: number;
  title: string;
  icon: string;
  budget: string;
  status: string;
  completion: number;
}
const PAGE_SIZE = 3;

const PersonalProfile: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;

  const currentProjects = projectsData.slice(startIndex, endIndex);

  const pageCount = Math.ceil(projectsData.length / PAGE_SIZE);
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);
  const entriesPerPage = 3; // Number of entries to display per page
  const totalEntries = projectsData.length; // Total number of entries
  const totalPages = Math.ceil(totalEntries / entriesPerPage); // Total number of pages

  // Calculate the range of entries being displayed
  const firstEntryIndex = (currentPage - 1) * entriesPerPage + 1;
  const lastEntryIndex = Math.min(
    firstEntryIndex + entriesPerPage - 1,
    totalEntries
  );

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  // Function to handle next page
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.firstColumn}>
          <h3>Activity Timeline</h3>
          <VerticalTimeline>
            {timelineData.map((item) => (
              <VerticalTimelineElement
                visible={true}
                key={item.id}
                iconStyle={{
                  background: item.color,
                  width: 15,
                  height: 15,
                }}
                contentStyle={{
                  background: "gray",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
                contentArrowStyle={{
                  borderRight: `4px solid ${item.color}`,
                }}
              >
                <div
                  className="flex justify-between"
                  style={{ alignItems: "center" }}
                >
                  <span className={styles.title}>{item.title}</span>
                  <span className={styles.para}>{item.date}</span>
                </div>

                <p>{item.para}</p>
                <div
                  className="flex gap-2 mt-2"
                  style={{ alignItems: "baseline" }}
                >
                  <Image
                    src={item.icon}
                    alt="icon"
                    width={15}
                    height={15}
                    className="my-auto"
                  />
                  <span className="text-customParaColor my-auto">
                    {item.iconTXT}
                  </span>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        <div className={styles.additionalSections}>
          <div className={styles.secondColumn}>
            <h5>ABOUT</h5>
            <div>
              {profileAboutData.map((item) => (
                <div key={item.id} className="flex align-middle gap-2 mt-5">
                  <Image src={item.icon} alt="Icons" width={18} height={18} />
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.secondColumn}>
            <h5>CONTACT</h5>
            <div>
              {profileAboutData.map((item) => (
                <div key={item.id} className="flex align-middle gap-2 mt-5">
                  <Image src={item.icon} alt="Icons" width={18} height={18} />
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.secondColumn}>
            <h5>OVERVIEW</h5>
            <div>
              {profileAboutData.map((item) => (
                <div key={item.id} className="flex align-middle gap-2 mt-5">
                  <Image src={item.icon} alt="Icons" width={18} height={18} />
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.secondColumn}>
            <h5>OVERVIEW</h5>
            <div>
              {profileAboutData.map((item) => (
                <div key={item.id} className="flex align-middle gap-2 mt-5">
                  <Image src={item.icon} alt="Icons" width={18} height={18} />
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.projectsSection}>
        <h3>Projects</h3>
        <div className="flex align-middle gap-2 my-2">
          <img src="/svg/projectsDone.svg" alt="Tick" />
          <p className="text-subTXTColor montserrat_gray">
            <span style={{ color: "#A0AEC0" }}>30 done</span> this month
          </p>
        </div>
        <div className={styles.tableContainer}>
          <div className={styles.tableHeader}>
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>LIST</div>
              <div className={styles.tableCell}>BUDGET</div>
              <div className={styles.tableCell}>STATUS</div>
              <div className={styles.tableCell}>COMPLETION</div>
            </div>
          </div>
          <div className={styles.tableBody}>
            {currentProjects.map((project: ProjectsDetail) => (
              <div key={project.id} className={styles.tableRow}>
                <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
                  <img src={project.icon} alt="" className={styles.icon} />
                  <h6 className={`${styles.tableContents} ${styles.list}`}>
                    {project.title}
                  </h6>
                </div>
                <h6 className={`${styles.tableContents} ${styles.budget}`}>
                  ${project.budget}
                </h6>
                <div className={`${styles.tableContents} ${styles.status}`}>
                  {project.status}
                </div>
                <div className={`${styles.tableContents} ${styles.completion}`}>
                  <p style={{ color: "#4FD1C5" }}>{project.completion}%</p>
                  <ProgressBar
                    completed={project.completion}
                    bgColor="#4FD1C5"
                    baseBgColor="#e0e0df"
                    width="50%"
                    height="5px"
                    labelAlignment="center"
                    labelColor="#ffffff"
                    labelSize="12px"
                    isLabelVisible={false}
                    transitionDuration="1s"
                  />
                </div>
                <img src="/svg/optionsIcon.svg" alt="" />
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex justify-between mt-5"
          style={{ alignItems: "center" }}
        >
          <span style={{ color: "#A0AEC0" }}>
            Showing {firstEntryIndex} to {lastEntryIndex} of {totalEntries}{" "}
            entries
          </span>
          <div className="flex justify-center mt-5">
            <button
              className={`mx-2 px-3 py-1 rounded-md ${
                currentPage === 1 ? "text-gray-200" : ""
              }`}
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  className={`mx-2 px-3 py-1 rounded-md ${
                    currentPage === page ? styles.currentPage : styles.NextPages
                  }`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              )
            )}
            <button
              className={`mx-2 px-3 py-1 rounded-md ${
                currentPage === totalPages ? "text-gray-200" : ""
              }`}
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalProfile;
