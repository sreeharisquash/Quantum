"use client";
import React from "react";
import CommonButton from "@/components/commonButton/CommonButton";
import { createAccountData, createAccountSocialLogin } from "@/utils/mockData";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { Checkbox } from "@mui/material";
import AuthButton from "@/components/authButton/AuthButton";

const LoginPage: React.FC = () => {
  const router = useRouter();
  const socialLoginItem = createAccountSocialLogin[0];

  return (
    <div className="grid lg:grid-cols-2 h-screen w-screen authScreens">
      <div className="flex justify-center items-center lg:col-span-1 h-full w-screen/2">
        <div>
          <h1 className="authHeading">Welcome Back</h1>
          <div className="my-1 align-middle justify-center flex">
            <div className="w-[90%]">
              {socialLoginItem && (
                <div
                  key={socialLoginItem.id}
                  className="my-2 flex items-center align-middle justify-center bg-customLightGray py-2 rounded"
                >
                  <img src={socialLoginItem.icon} alt={socialLoginItem.text} />
                  <span className="ml-2 text-black font-bold">
                    {socialLoginItem.text}
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center justify-center  w-[100%]">
            <hr className="flex-grow border-t border-gray-300" />
            <p className="mx-2 text-customParaColor">OR LOGIN WITH EMAIL</p>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <div className="align-middle justify-center flex">
            <div className="w-[100%] pb-3">
              {createAccountData.map((item) => (
                <div key={item.id} className="mt-2">
                  <h6>{item.label}</h6>
                  <input
                    type="text"
                    placeholder={item.placeholder}
                    className="py-3 px-3 rounded-[5px] mt-2 mb-3 border-gray-300 border-2 w-full"
                  />
                </div>
              ))}
              <div
                className="flex justify-between mb-3"
                style={{ alignItems: "center" }}
              >
                <div className="flex" style={{ alignItems: "center" }}>
                  <Checkbox />
                  <p className="text-xs">Remember me</p>
                </div>

                <Link href="/auth/resetpassword">
                  <p className="text-customBlueColor text-xs">
                    Forgot password?
                  </p>
                </Link>
              </div>
              <AuthButton label="Login" link="/home" />
            </div>
          </div>
          <div className="w-[90%] mx-auto text-center border-t-2 border-gray-300 my-2 pt-4">
            <p className="text-customParaColor flex gap-1 justify-center">
              Don’t have an account?{" "}
              <span
                className="text-customBlueColor cursor-pointer"
                onClick={() => router.push("/auth/createaccount")}
              >
                Sign up
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

export default LoginPage;
