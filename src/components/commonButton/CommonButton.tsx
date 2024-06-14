import React from "react";
import styles from "./CommonButton.module.css";
import Link from "next/link";

interface CommonButtonProps {
  label: string;
  link?: string;
  bgClr?: string;
  fontCLR?: string;
  onClickFnctn?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CommonButton: React.FC<CommonButtonProps> = ({
  label,
  link,
  bgClr,
  fontCLR,
  onClickFnctn,
}) => {
  return link ? (
    <Link href={link}>
      <button
        className={styles.buttonStyles}
        style={{
          backgroundColor: bgClr ? bgClr : "#30047C",
          color: fontCLR ? fontCLR : "white",
        }}
        onClick={onClickFnctn}
      >
        {label}
      </button>
    </Link>
  ) : (
    <button
      className={styles.buttonStyles}
      style={{
        backgroundColor: bgClr ? bgClr : "#30047C",
        color: fontCLR ? fontCLR : "white",
      }}
      onClick={onClickFnctn}
    >
      {label}
    </button>
  );
};

export default CommonButton;
