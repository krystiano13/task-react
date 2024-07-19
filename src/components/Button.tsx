import React from "react";

interface Props {
  children: React.ReactNode;
  type: "button" | "submit";
  onClick?: (...args: any[]) => any;
}

export const Button: React.FC<Props> = ({ children, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="btn btn-primary w-full text-white"
    >
      {children}
    </button>
  );
};
