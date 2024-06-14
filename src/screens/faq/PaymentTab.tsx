import React, { useState } from "react";
import { paymentTabData } from "@/utils/mockData";
import styles from "./PaymentTab.module.css";

interface PaymentTabDataDetail {
  id: number;
  title: string;
  para: string;
}

const PaymentTab: React.FC = () => {
  const [expandedItemId, setExpandedItemId] = useState<number | null>(null);

  const handleTitleClick = (id: number) => {
    setExpandedItemId(expandedItemId === id ? null : id);
  };

  return (
    <div className={styles.container}>
      {paymentTabData.map((item: PaymentTabDataDetail) => (
        <div key={item.id} className={styles.item}>
          <div
            onClick={() => handleTitleClick(item.id)}
            className={styles.MainContain}
          >
            <div className={styles.title}>{item.title}</div>
            {expandedItemId === item.id ? (
              <img src="/svg/dropdownOpenedIcon.svg" alt="" />
            ) : (
              <img src="/svg/dropdownClosedIcon.svg" alt="" />
            )}
          </div>

          {expandedItemId === item.id && (
            <div className={styles.para}>{item.para}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PaymentTab;
