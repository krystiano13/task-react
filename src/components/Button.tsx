import React from "react";

interface Props {
  children: React.ReactNode;
  type: "button" | "submit";
}

export const Button: React.FC<Props> = ({ children, type }) => {
  return (
    <button type={type} className="btn btn-primary w-full text-white">
      {children}
    </button>
  );
};
