import React from "react";

interface IconProps {
  color: string;
}

const EmailIcon: React.FC<IconProps> = ({ color }) => (
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
      d="M1.76351 9.53885C1.59083 9.84105 1.5 10.1831 1.5 10.5311V18C1.5 19.1046 2.39543 20 3.5 20H19.5C20.6046 20 21.5 19.1046 21.5 18V10.5311C21.5 10.1831 21.4092 9.84105 21.2365 9.53885L18.0758 4.00772C17.7198 3.38457 17.0571 3 16.3394 3H6.66065C5.94293 3 5.28025 3.38457 4.92416 4.00772L1.76351 9.53885ZM16.7735 4.75193C16.6845 4.59614 16.5188 4.5 16.3394 4.5H6.66065C6.48122 4.5 6.31555 4.59614 6.22652 4.75193L3.22763 10H7C7.55229 10 7.9856 10.4568 8.14104 10.9868C8.56707 12.4393 9.9097 13.5 11.5 13.5C13.0903 13.5 14.4329 12.4393 14.859 10.9868C15.0144 10.4568 15.4477 10 16 10H19.7724L16.7735 4.75193ZM20 11.5H16.2707C15.6336 13.5273 13.7407 15 11.5 15C9.2593 15 7.36636 13.5273 6.72932 11.5H3V18C3 18.2761 3.22386 18.5 3.5 18.5H19.5C19.7761 18.5 20 18.2761 20 18V11.5Z"
      fill={color}
    />
  </svg>
);

export default EmailIcon;
