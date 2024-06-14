import React from "react";

interface TrashIconProps {
  color: string;
}

const TrashIcon: React.FC<TrashIconProps> = ({ color }) => {
  return (
    <svg
      width="20"
      height="23"
      viewBox="0 0 20 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.75 4.5C19.75 4.89782 19.592 5.27936 19.3107 5.56066C19.0294 5.84196 18.6478 6 18.25 6H17.5V19.5C17.5 20.2956 17.1839 21.0587 16.6213 21.6213C16.0587 22.1839 15.2956 22.5 14.5 22.5H5.5C4.70435 22.5 3.94129 22.1839 3.37868 21.6213C2.81607 21.0587 2.5 20.2956 2.5 19.5V6H1.75C1.35218 6 0.970644 5.84196 0.68934 5.56066C0.408035 5.27936 0.25 4.89782 0.25 4.5V3C0.25 2.60218 0.408035 2.22064 0.68934 1.93934C0.970644 1.65804 1.35218 1.5 1.75 1.5H7C7 1.10218 7.15804 0.720644 7.43934 0.43934C7.72064 0.158035 8.10218 0 8.5 0L11.5 0C11.8978 0 12.2794 0.158035 12.5607 0.43934C12.842 0.720644 13 1.10218 13 1.5H18.25C18.6478 1.5 19.0294 1.65804 19.3107 1.93934C19.592 2.22064 19.75 2.60218 19.75 3V4.5ZM4.177 6L4 6.0885V19.5C4 19.8978 4.15804 20.2794 4.43934 20.5607C4.72064 20.842 5.10218 21 5.5 21H14.5C14.8978 21 15.2794 20.842 15.5607 20.5607C15.842 20.2794 16 19.8978 16 19.5V6.0885L15.823 6H4.177ZM1.75 4.5V3H18.25V4.5H1.75Z"
        fill={color}
      />
    </svg>
  );
};

export default TrashIcon;