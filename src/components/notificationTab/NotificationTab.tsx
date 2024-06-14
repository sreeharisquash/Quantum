import { settingsNotificationData } from "@/utils/mockData";
import React, { useState } from "react";
import Switch from "react-switch";
import styles from "./NotificationTab.module.css";

interface NotificationDataDetail {
  id: number;
  title: string;
  para: string;
}

const NotificationTab: React.FC = () => {
  const [switchStates, setSwitchStates] = useState<{ [key: number]: boolean }>(
    {}
  );

  const handleChange = (id: number, checked: boolean) => {
    setSwitchStates((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
  };

  interface ButtonDetail {
    id: number;
    label: string;
    bgClr: string;
    textClr: string;
    border: boolean;
  }

  const buttons = [
    { id: 1, label: "Cancel", bgClr: "white", textClr: "black", border: true },
    { id: 2, label: "Save", bgClr: "#37AD24", textClr: "white", border: false },
  ];

  return (
    <div>
      <div className="w-full bg-white px-7 py-4 rounded-lg">
        {settingsNotificationData.map((item: NotificationDataDetail) => (
          <div
            key={item.id}
            className="flex justify-between border-gray-200 border-b-2 w-full py-4"
          >
            <div>
              <h3>{item.title}</h3>
              <p className="text-subTXTColor">{item.para}</p>
            </div>
            <Switch
              onChange={(checked) => handleChange(item.id, checked)}
              checked={switchStates[item.id] || false}
              uncheckedIcon={false}
              checkedIcon={false}
              onColor="#37AD24"
              height={32}
              width={60}
            />
          </div>
        ))}
      </div>
      <div className={styles.underlining} />
      <div className={styles.finalBTNs}>
        {buttons.map((item: ButtonDetail) => (
          <div
            key={item.id}
            className={styles.buttons}
            style={{
              backgroundColor: item.bgClr,
              borderWidth: item.border ? 1 : undefined,
              borderColor: item.border ? "black" : undefined,
              borderStyle: item.border ? "solid" : undefined,
            }}
          >
            <p style={{ color: item.textClr }}>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationTab;
