import React from "react";
import Tab from "../tab/Tab";
import styles from "./Navbar.module.css";
import { navbarTabs } from "@/utils/mockData";
import DropdownIcon from "../dropdownIcon/DropdownIcon";

interface NavbarProps {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="navbar py-6">
      <ul className="tabs">
        {navbarTabs.map((tab, index) => {
          const IconComponent = tab.icon;
          return (
            <div
              key={tab.id}
              className={`flex align-middle justify-between gap-2 mb-5 cursor-pointer py-3 px-4 ${
                activeTab === index ? "bg-activeTabColor" : ""
              }`}
            >
              <div className="flex align-middle gap-2">
                <IconComponent
                  color={activeTab === index ? "#FF7A00" : "#696F8C"}
                />
                {/* <img src={tab.icon} alt="Tab Icon" /> */}
                <Tab
                  tab={tab.tab}
                  isActive={index === activeTab}
                  onClick={() => setActiveTab(index)}
                />
              </div>
              {/* <DropdownIcon
                color={activeTab === index ? "#FF7A00" : "#696F8C"}
              /> */}
            </div>
          );
        })}
      </ul>
      <div className={styles.helpContainer}>
        <div className={styles.question}>
          <img src="/svg/question.svg" alt="Help" />
        </div>
        <span className={styles.helpHead}>Need help?</span>
        <p className={styles.helpPara}>Please check our docs</p>
        <div className={styles.sendMessage}>Send message</div>
      </div>
    </nav>
  );
};

export default Navbar;
