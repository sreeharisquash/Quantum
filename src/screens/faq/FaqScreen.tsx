import React, { useState } from "react";
import styles from "./FaqScreen.module.css";
import { FaqData } from "@/utils/mockData";
import PaymentTab from "./PaymentTab";
import Image from "next/image";
import PaymentIcon from "@/components/paymentIcon/PaymentIcon";
import MyProjectIcon from "@/components/myProjectIcon/MyProjectIcon";
import ServiceIcon from "@/components/serviceIcon/ServiceIcon";
import QuestionsIcon from "@/components/questionsIcon/QuestionsIcon";
import PricingIcon from "@/components/pricingIcon/PricingIcon";

interface FaqDataDetail {
  id: number;
  title: string;
}

const FaqScreen: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<number | null>(1);

  const handleTabClick = (id: number) => {
    setSelectedTab(id);
  };

  const renderContent = () => {
    switch (selectedTab) {
      case 1:
        return <PaymentTab />;
      case 2:
        return <PaymentTab />;
      case 3:
        return <PaymentTab />;
      case 4:
        return <PaymentTab />;
      case 5:
        return <PaymentTab />;
      default:
        return <PaymentTab />;
    }
  };

  const iconsMap: { [key: number]: React.FC<{ color: string }> } = {
    1: PaymentIcon,
    2: MyProjectIcon,
    3: ServiceIcon,
    4: PricingIcon,
    5: QuestionsIcon,
  };

  return (
    <div className="bg-white p-7" style={{ borderRadius: "20px" }}>
      <div className={styles.blueContainer}>
        <h3 className="text-white">Hello, how can we help?</h3>
        <p className="text-white">
          or choose a category to quickly find the help you need
        </p>
        <div className="flex justify-center mt-5">
          <div className="flex">
            <input
              type="text"
              placeholder="Ask a question"
              className="bg-inputBackground py-2 px-3 rounded-tl-xl rounded-bl-xl border-none"
            />
            <Image
              src="/svg/searchIcon.svg"
              className="bg-inputBackground py-2 px-4 rounded-tr-xl rounded-br-xl border-none"
              alt="search"
              width={24}
              height={24}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex align-middle w-full gap-10">
        <div style={{ marginTop: "6rem", width: "45%" }}>
          {FaqData.map((item: FaqDataDetail) => {
            const IconComponent = iconsMap[item.id];

            return (
              <div
                key={item.id}
                className={`flex align-middle gap-2 mb-3 p-2 cursor-pointer ${
                  styles.tabs
                } ${
                  selectedTab === item.id
                    ? styles.selectedTab
                    : styles.inactiveTab
                }`}
                onClick={() => handleTabClick(item.id)}
              >
                {IconComponent && (
                  <IconComponent
                    color={selectedTab === item.id ? "white" : "#A4A8BE"}
                  />
                )}
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.contentContainer}>{renderContent()}</div>
      </div>
    </div>
  );
};

export default FaqScreen;
