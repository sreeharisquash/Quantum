import Link from "next/link";
import React from "react";
import styles from "./AuthButton.module.css";

interface AuthButtonProps {
  label: string;
  link?: string;
  bgClr?: string;
  fontCLR?: string;
  onClickFnctn?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const AuthButton: React.FC<AuthButtonProps> = ({
  label,
  link,
  onClickFnctn,
}) => {
  return link ? (
    <Link href={link}>
      <button className={styles.buttonStyles} onClick={onClickFnctn}>
        {label}
      </button>
    </Link>
  ) : (
    <button className={styles.buttonStyles} onClick={onClickFnctn}>
      {label}
    </button>
  );
};

export default AuthButton;
