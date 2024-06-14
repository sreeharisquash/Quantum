// Tab.tsx
import React from "react";
import "./Tab.module.css";

interface TabProps {
  tab: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ tab, isActive, onClick }) => {
  return (
    <li
      className={`tab ${isActive ? "text-activeTabFontColor" : ""}`}
      onClick={onClick}
    >
      {tab}
    </li>
  );
};

export default Tab;
