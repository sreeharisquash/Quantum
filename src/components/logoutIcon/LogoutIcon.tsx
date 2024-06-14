import React from "react";

interface LogoutIconProps {
  color: string;
}

const LogoutIcon: React.FC<LogoutIconProps> = ({ color }) => {
  return (
    <svg
      width="25"
      height="26"
      viewBox="0 0 25 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4730_2764)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.625 20.0312C15.625 20.2385 15.5427 20.4372 15.3962 20.5837C15.2497 20.7302 15.051 20.8125 14.8438 20.8125H2.34375C2.13655 20.8125 1.93784 20.7302 1.79132 20.5837C1.64481 20.4372 1.5625 20.2385 1.5625 20.0312V5.96875C1.5625 5.76155 1.64481 5.56284 1.79132 5.41632C1.93784 5.26981 2.13655 5.1875 2.34375 5.1875H14.8438C15.051 5.1875 15.2497 5.26981 15.3962 5.41632C15.5427 5.56284 15.625 5.76155 15.625 5.96875V9.09375C15.625 9.30095 15.7073 9.49966 15.8538 9.64618C16.0003 9.79269 16.199 9.875 16.4062 9.875C16.6135 9.875 16.8122 9.79269 16.9587 9.64618C17.1052 9.49966 17.1875 9.30095 17.1875 9.09375V5.96875C17.1875 5.34715 16.9406 4.75101 16.501 4.31147C16.0615 3.87193 15.4654 3.625 14.8438 3.625H2.34375C1.72215 3.625 1.12601 3.87193 0.686468 4.31147C0.24693 4.75101 0 5.34715 0 5.96875L0 20.0312C0 20.6529 0.24693 21.249 0.686468 21.6885C1.12601 22.1281 1.72215 22.375 2.34375 22.375H14.8438C15.4654 22.375 16.0615 22.1281 16.501 21.6885C16.9406 21.249 17.1875 20.6529 17.1875 20.0312V16.9062C17.1875 16.699 17.1052 16.5003 16.9587 16.3538C16.8122 16.2073 16.6135 16.125 16.4062 16.125C16.199 16.125 16.0003 16.2073 15.8538 16.3538C15.7073 16.5003 15.625 16.699 15.625 16.9062V20.0312Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.7719 13.5531C24.8446 13.4806 24.9024 13.3944 24.9417 13.2994C24.9811 13.2045 25.0014 13.1028 25.0014 13C25.0014 12.8973 24.9811 12.7955 24.9417 12.7006C24.9024 12.6057 24.8446 12.5195 24.7719 12.4469L20.0844 7.75939C19.9377 7.61269 19.7387 7.53027 19.5312 7.53027C19.3238 7.53027 19.1248 7.61269 18.9781 7.75939C18.8314 7.90608 18.749 8.10505 18.749 8.31251C18.749 8.51997 18.8314 8.71894 18.9781 8.86564L22.3328 12.2188H8.59375C8.38655 12.2188 8.18784 12.3011 8.04132 12.4476C7.89481 12.5941 7.8125 12.7928 7.8125 13C7.8125 13.2072 7.89481 13.4059 8.04132 13.5524C8.18784 13.699 8.38655 13.7813 8.59375 13.7813H22.3328L18.9781 17.1344C18.8314 17.2811 18.749 17.4801 18.749 17.6875C18.749 17.895 18.8314 18.0939 18.9781 18.2406C19.1248 18.3873 19.3238 18.4697 19.5312 18.4697C19.7387 18.4697 19.9377 18.3873 20.0844 18.2406L24.7719 13.5531Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_4730_2764">
          <rect
            width="25"
            height="25"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LogoutIcon;