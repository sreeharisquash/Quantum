import Image from "next/image";
import React, { useState } from "react";
import styles from "./Profile.module.css";
import ProfileIcon from "@/components/profileIcon/ProfileIcon";
import PeopleIcon from "@/components/peopleIcon/PeopleIcon";
import ProjectsIcon from "@/components/projectsIcon/ProjectsIcon";
import ConnectionsIcon from "@/components/connectionsIcon/ConnectionsIcon";
import { profileData } from "@/utils/mockData";
import PersonalProfile from "@/components/personalProfile/PersonalProfile";

interface ProfileDataDetail {
  id: number;
  icon: string;
  title: string;
}

interface TabsDetail {
  id: number;
  icon: React.FC<{ color: string }>;
  title: string;
}

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs: TabsDetail[] = [
    { id: 1, icon: ProfileIcon, title: "Profile" },
    { id: 2, icon: PeopleIcon, title: "Teams" },
    { id: 3, icon: ProjectsIcon, title: "Projects" },
    { id: 4, icon: ConnectionsIcon, title: "Connections" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 1:
        return <PersonalProfile />;
      case 2:
        return <div>Teams Content</div>;
      case 3:
        return <div>Projects Content</div>;
      case 4:
        return <div>Connection Content</div>;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="text-subTXTColor flex">
        User Profile /<span className={styles.textCLR}>Profile</span>
      </div>
      <div className={styles.mainContainer}>
        <img
          src="/images/profilePageBG.png"
          alt="Profile BG"
          className={styles.mainIMGStyles}
        />
      </div>
      <div className={styles.profileIMGContainer}>
        <img
          src="/images/devonLaneIMG.png"
          alt="Profile"
          className={styles.mainIMG}
        />
        <div>
          <h3>Devon Lane</h3>
          <div className="flex gap-8 mt-4">
            {profileData.map((item: ProfileDataDetail, index: number) => (
              <div
                key={item.id}
                className={`${styles.iconWithTitle} ${
                  index === Math.floor(profileData.length / 2)
                    ? styles.centerDiv
                    : ""
                }`}
              >
                <div>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={24}
                    height={24}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
                <p className="text-customParaColor">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="my-10 flex gap-10" style={{ alignItems: "center" }}>
        {tabs.map((item: TabsDetail) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.id}
              className={`${styles.tabs} ${
                activeTab === item.id ? styles.activeTab : ""
              }`}
              style={{ alignItems: "center", cursor: "pointer" }}
              onClick={() => setActiveTab(item.id)}
            >
              <div>
                <IconComponent
                  color={activeTab === item.id ? "#F6BE0F" : "gray"}
                />
              </div>
              <p
                style={
                  activeTab === item.id ? { color: "#F6BE0F" } : { color: "" }
                }
              >
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
      <div className={styles.tabContent}>{renderContent()}</div>
    </div>
  );
};

export default Profile;
