import React, { useState } from "react";
import styles from "./SettingsScreen.module.css";
import ProfileTabIcon from "@/components/profiletabIcon/ProfileTabIcon";
import NotificationTabIcon from "@/components/notificationtabIcon/NotificationTabIcon";
import NotificationTab from "@/components/notificationTab/NotificationTab";
import ProfileTab from "@/components/profileTab/ProfileTab";

const SettingsScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="w-full">
      <h3 className="text-subTXTColor flex">
        Settings /{" "}
        {activeTab === "profile" ? (
          <h3 className={styles.textClr}>Profile</h3>
        ) : (
          <h3 className={styles.textClr}>Notification</h3>
        )}
      </h3>
      <div className={styles.tabs}>
        <button
          className={`${styles.button} ${
            activeTab === "profile"
              ? styles.activeButton
              : styles.inActiveButton
          }`}
          onClick={() => setActiveTab("profile")}
        >
          <ProfileTabIcon color={activeTab === "profile" ? "white" : "black"} />
          Profile
        </button>
        <button
          className={`${styles.button} ${
            activeTab === "notification"
              ? styles.activeButton
              : styles.inActiveButton
          }`}
          onClick={() => setActiveTab("notification")}
        >
          <NotificationTabIcon
            color={activeTab === "notification" ? "white" : "black"}
          />
          Notification
        </button>
      </div>
      <div className={styles.tabContent}>
        {activeTab === "profile" && <ProfileTab />}
        {activeTab === "notification" && <NotificationTab />}
      </div>
    </div>
  );
};

export default SettingsScreen;
