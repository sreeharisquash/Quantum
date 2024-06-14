import React from "react";
import styles from "./ComingSoonScreen.module.css";

const ComingSoonScreen: React.FC = () => {
  return (
    <div className={`${styles.mainContainer} rounded-lg p-7`}>
      <h1>We are launching soon 🚀</h1>
      <p className={styles.para}>
        We&apos;re creating something awesome. Please subscribe to get notified
        when it&apos;s ready!
      </p>

      <div className="flex align-middle items-center justify-center my-10">
        <img
          src="/svg/Email-2.svg"
          alt=""
          className="bg-inputBackground py-2 px-3 rounded-tl-xl rounded-bl-xl"
        />
        <input
          type="text"
          placeholder="Search..."
          className="bg-inputBackground py-2 px-3 rounded-none border-none "
          style={{ width: "20%" }}
        />
        <img
          src="/svg/sendMailIcon.svg"
          className="bg-customYellow py-2 px-4 rounded-tr-xl rounded-br-xl"
          style={{ backgroundColor: "#F6BE0F" }}
        />
      </div>
      <div className="w-full flex align-middle justify-center my-5">
        <img src="/svg/comingSoon.svg" alt="comingSoon" />
      </div>
    </div>
  );
};

export default ComingSoonScreen;
