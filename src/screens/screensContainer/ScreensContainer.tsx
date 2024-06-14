// Screens.tsx
import React from "react";
import MyCourses from "../myCourses/MyCourses";
import DashboardScreen from "../dashboardScreen/Dashboard";
import SettingsScreen from "../settingsScreen/SettingsScreen";
import FaqScreen from "../faq/FaqScreen";
import TaskBoard from "../taskBoard/TaskBoard";
import LogoutScreen from "../logoutScreen/LogoutScreen";

const Dashboard: React.FC = () => {
  return <DashboardScreen />;
};

const TaskBoardScreen: React.FC = () => {
  return <TaskBoard />;
};

const MyCoursesScreen: React.FC = () => {
  return <MyCourses />;
};

const Faq: React.FC = () => {
  return <FaqScreen />;
};

const Settings: React.FC = () => {
  return <SettingsScreen />;
};

const Logout: React.FC = () => {
  return <LogoutScreen />;
};
export { Dashboard, TaskBoardScreen, MyCoursesScreen, Faq, Settings, Logout };
