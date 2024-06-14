import React from "react";
import { createAccountData, createAccountSocialLogin } from "@/utils/mockData";
import styles from "./page.module.css";
import CommonButton from "@/components/commonButton/CommonButton";
import Image from "next/image";
import AuthButton from "@/components/authButton/AuthButton";

// Define the types for the data items
interface AccountData {
  id: number;
  label: string;
  placeholder: string;
}

interface SocialLogin {
  id: number;
  icon: string;
  text: string;
}

const CreateAccount: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-2 h-screen w-screen authScreens">
      <div className="flex justify-center items-center lg:col-span-1 h-full w-screen/2">
        <div>
          <h1 className="authHeading">Create an account</h1>
          <div className="align-middle justify-center flex">
            <div className="w-[90%] pb-3">
              {createAccountData.map((item: AccountData) => (
                <div key={item.id} className="mt-2">
                  <h6>{item.label}</h6>
                  <input
                    type="text"
                    placeholder={item.placeholder}
                    className="py-3 px-3 rounded-[5px] mt-2 mb-3 border-gray-300 border-2 w-full"
                  />
                </div>
              ))}
              <AuthButton label="Create Account" link="/auth/login" />
            </div>
          </div>
          <div className="w-[90%] mx-auto text-center border-b-2 border-gray-300">
            <p className="text-customParaColor">
              By creating an account, you agree to our
            </p>
            <h6 className="text-customBlueColor my-2 cursor-pointer">
              Terms of Service
            </h6>
          </div>
          <div className="my-1 align-middle justify-center flex">
            <div className="w-[90%]">
              {createAccountSocialLogin.map((item: SocialLogin) => (
                <div
                  key={item.id}
                  className="my-2 flex items-center align-middle justify-center bg-customLightGray py-2 rounded cursor-pointer"
                >
                  <img src={item.icon} alt={item.text} />
                  <span className="ml-2 text-black font-bold">{item.text}</span>
                </div>
              ))}
            </div>
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

export default CreateAccount;
