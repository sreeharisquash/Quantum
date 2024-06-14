"use client";
import React from "react";
import CommonButton from "@/components/commonButton/CommonButton";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Image from "next/image";
import AuthButton from "@/components/authButton/AuthButton";

const ConfirmEmail: React.FC = () => {
  const router = useRouter();

  return (
    <div className="grid lg:grid-cols-2 h-screen w-screen authScreens">
      <div className="flex justify-center items-center lg:col-span-1 h-full w-screen/2">
        <div>
          <h1 className="authHeading">Confirm Email </h1>
          <div className="flex items-center justify-center my-4 w-[100%]">
            <p className="mx-2 ">
              Check Your Email and Enter Confirmation Code
            </p>
          </div>

          <div className="align-middle justify-center flex">
            <div className="w-[100%] pb-3">
              <div className="mt-2">
                <h6>Confirm Code</h6>
                <input
                  type="number"
                  placeholder="Enter code"
                  className="py-3 px-3 rounded-[5px] mt-2 mb-9 border-gray-300 border-2 w-full"
                />
              </div>
              <AuthButton label="Confirm Email" link="/auth/loggedin" />
            </div>
          </div>
          <div className="w-[90%] mx-auto text-center border-t-2 border-gray-300 my-2 pt-4">
            <p className=" flex gap-1 justify-center">
              Haven’t received your code?
              <span className="text-customBlueColor cursor-pointer">
                Resend Code
              </span>
            </p>
          </div>
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

export default ConfirmEmail;
