import React from "react";

interface SettingsIconProps {
  color: string;
}

const SettingsIcon: React.FC<SettingsIconProps> = ({ color }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5 16C13.7092 16 15.5 14.2091 15.5 12C15.5 9.79086 13.7092 8 11.5 8C9.29086 8 7.5 9.79086 7.5 12C7.5 14.2091 9.29086 16 11.5 16ZM11.5 14.5C12.8807 14.5 14 13.3807 14 12C14 10.6193 12.8807 9.5 11.5 9.5C10.1193 9.5 9 10.6193 9 12C9 13.3807 10.1193 14.5 11.5 14.5Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.6182 1.86489L15.0203 4.81406C15.3475 4.97464 15.6621 5.1569 15.9623 5.35898L18.7185 4.23223C19.1814 4.043 19.7129 4.2248 19.963 4.65787L22.0901 8.34213C22.3401 8.77521 22.2318 9.3264 21.8365 9.63266L19.4821 11.4566C19.4941 11.6362 19.5002 11.8174 19.5002 12C19.5002 12.1826 19.4941 12.3638 19.4821 12.5434L21.8365 14.3673C22.2318 14.6736 22.3401 15.2248 22.0901 15.6579L19.963 19.3421C19.7129 19.7752 19.1814 19.957 18.7185 19.7678L15.9623 18.641C15.6621 18.8431 15.3475 19.0254 15.0203 19.1859L14.6182 22.1351C14.5506 22.6306 14.1274 23 13.6273 23H9.37313C8.87306 23 8.44987 22.6306 8.3823 22.1351L7.98014 19.1859C7.65296 19.0254 7.33835 18.8431 7.03818 18.641L4.28195 19.7678C3.81907 19.957 3.28756 19.7752 3.03752 19.3421L0.910418 15.6579C0.660379 15.2248 0.768689 14.6736 1.16401 14.3673L3.51841 12.5434C3.50636 12.3638 3.50025 12.1826 3.50025 12C3.50025 11.8174 3.50636 11.6362 3.51841 11.4566L1.16401 9.63266C0.768689 9.3264 0.660379 8.77521 0.910409 8.34213L3.03752 4.65787C3.28755 4.2248 3.81906 4.043 4.28195 4.23223L7.03818 5.35898C7.33835 5.1569 7.65296 4.97464 7.98014 4.81406L8.3823 1.86489C8.44987 1.3694 8.87306 1 9.37313 1H13.6273C14.1274 1 14.5506 1.3694 14.6182 1.86489ZM13.6421 5.80854L14.3595 6.16063C14.6251 6.29098 14.8806 6.43902 15.1246 6.60328L15.7888 7.05042L18.8822 5.78584L20.5728 8.71416L17.932 10.76L17.9854 11.557C17.9952 11.7032 18.0002 11.8509 18.0002 12C18.0002 12.1491 17.9952 12.2968 17.9854 12.443L17.932 13.24L20.5728 15.2858L18.8822 18.2142L15.7888 16.9496L15.1246 17.3967C14.8806 17.561 14.6251 17.709 14.3595 17.8394L13.6421 18.1915L13.1909 21.5H9.8096L9.35841 18.1915L8.64101 17.8394C8.37543 17.709 8.11987 17.561 7.87587 17.3967L7.2117 16.9496L4.11834 18.2142L2.42768 15.2858L5.0685 13.24L5.01505 12.443C5.00524 12.2968 5.00024 12.1491 5.00024 12C5.00024 11.8509 5.00524 11.7032 5.01505 11.557L5.0685 10.76L2.42767 8.71416L4.11834 5.78584L7.2117 7.05042L7.87587 6.60328C8.11986 6.43902 8.37543 6.29098 8.64102 6.16063L9.35841 5.80854L9.8096 2.5H13.1909L13.6421 5.80854Z"
        fill={color}
      />
    </svg>
  );
};

export default SettingsIcon;