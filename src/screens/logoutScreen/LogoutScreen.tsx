import React from "react";
import styles from "./LogoutScreen.module.css";
import Link from "next/link";
import Image from "next/image";

interface LogoutButtonsDetail {
  id: number;
  label: string;
  styles: string;
  link: string;
}

const logoutButtons: LogoutButtonsDetail[] = [
  { id: 1, label: "Cancel", styles: styles.cancelClass, link: "" },
  { id: 2, label: "Confirm", styles: styles.confirmClass, link: "/auth/login" },
];

const LogoutScreen: React.FC = () => {
  return (
    <div className={styles.mainContainer}>
      <h3>Confirm Logout</h3>
      <div className="flex gap-2 my-7">
        {logoutButtons.map((item: LogoutButtonsDetail) => (
          <Link key={item.id} href={item.link}>
            <button className={item.styles}>{item.label}</button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LogoutScreen;
