"use client";
import React, { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import {
  Dashboard,
  Faq,
  Logout,
  MyCoursesScreen,
  Settings,
  TaskBoardScreen,
} from "../../screens/screensContainer/ScreensContainer";
import styles from "./page.module.css";
import Header from "@/components/header/Header";
import ProjectScreen from "@/screens/projects/ProjectScreen";
import ComingSoonScreen from "@/screens/comingSoon/ComingSoonScreen";
import Profile from "@/screens/profileScreen/Profile";

const HomeScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const renderScreen = () => {
    switch (activeTab) {
      case 0:
        return <Dashboard />;
      case 1:
        return <ProjectScreen />;
      case 2:
        return <MyCoursesScreen />;
      case 3:
        return <Faq />;
      case 4:
        return <Profile />;
      case 5:
        return <TaskBoardScreen />;
      case 7:
        return <Settings />;
      case 8:
        return <Logout />;
      default:
        return <ComingSoonScreen />;
    }
  };

  return (
    <>
      <Header />
      <div className={styles.dashboard}>
        <div className={styles.sidebar}>
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <main className={styles.main_content}>{renderScreen()}</main>
      </div>
    </>
  );
};

export default HomeScreen;
