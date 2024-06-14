// components/DropdownIcon.tsx

import React from "react";

interface DropdownIconProps {
  color: string;
}

const DropdownIcon: React.FC<DropdownIconProps> = ({ color }) => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.41427 3.05575C2.02374 2.66523 1.46972 2.58608 1.17683 2.87898C0.883936 3.17187 0.963081 3.72589 1.35361 4.11641L4.18203 6.94484C4.42398 7.18679 4.72869 7.30922 4.99518 7.2977C5.26407 7.31285 5.5735 7.1904 5.81855 6.94535L8.64698 4.11692C9.0375 3.7264 9.11664 3.17238 8.82375 2.87949C8.53086 2.58659 7.97684 2.66574 7.58631 3.05626L5.00054 5.64203L2.41427 3.05575Z"
        fill={color}
      />
    </svg>
  );
};

export default DropdownIcon;
