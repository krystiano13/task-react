import React from "react";

interface Props {
  children: React.ReactNode;
}

export const Toast: React.FC<Props> = ({ children }) => {
  return (
    <div className="toast animate-fade-left animate-duration-150 animate-delay-200">
      {children}
    </div>
  );
};
