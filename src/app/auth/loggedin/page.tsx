"use client";
import React from "react";
import CommonButton from "@/components/commonButton/CommonButton";
import styles from "./page.module.css";
import Image from "next/image";
import AuthButton from "@/components/authButton/AuthButton";

const LoggedIn: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-2 h-screen w-screen authScreens">
      <div className="flex justify-center items-center lg:col-span-1 h-full w-screen/2">
        <div>
          <img src="/svg/almostThereIMG.svg" alt="" className="mx-auto mb-6" />
          <h1>Almost There!</h1>
          <div className="flex items-center justify-center my-4 w-[100%]">
            <p className="mx-2 text-customParaColor">
              Check your email inbox and confirm your account
            </p>
          </div>
          <div className="w-[90%] mx-auto text-center border-t-2 border-gray-300 my-7 pt-6">
            <p className="text-customParaColor">Didn’t receive any mail?</p>
          </div>
          <AuthButton label="Resend Confirmation" />
        </div>
      </div>
      <div
        className={`flex justify-center items-center lg:col-span-1 h-full w-screen/2 ${styles.imgBG}`}
      >
        <div className="mx-auto w-[60%]">
          <Image
            src="/logo/LOGO.svg"
            alt="Logo"
            width={400}
            height={160}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          <p className="text-white text-center">
            &quot;Revolutionizing Education in the Digital Age Seamless
            Learning, Anytime, Anywhere.&quot;
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoggedIn;
