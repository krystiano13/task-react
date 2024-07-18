import React from "react";

interface Props {
  children: React.ReactNode;
}

export const Frame: React.FC<Props> = ({ children }) => {
  return (
    <div className="mockup-window bg-base-200 border w-[90vw] md:w-96">
      <div className="bg-base-100 flex justify-center px-4 py-16">
        {children}
      </div>
    </div>
  );
};
