import React from "react";
import styles from "./ProjectScreen.module.css";
import { projectsData } from "@/utils/mockData";
import ProgressBar from "@ramonak/react-progress-bar";

interface Project {
  title: string;
  budget: string;
  status: string;
  completion: string;
}

interface ProjectsDetail {
  id: number;
  title: string;
  icon: string;
  budget: string;
  status: string;
  completion: number;
}

const ProjectScreen: React.FC = () => {
  return (
    <div className="rounded-lg bg-white p-7">
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
          {projectsData.map((project: ProjectsDetail) => (
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
                {/* {project.completion} */}
                <p style={{ color: "#4FD1C5" }}>{project.completion}%</p>
                <ProgressBar
                  completed={project.completion}
                  bgColor="#4FD1C5                 "
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
    </div>
  );
};

export default ProjectScreen;
