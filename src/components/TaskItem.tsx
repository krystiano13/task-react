import React from "react";

interface Props {
  text: string;
  bookmarked: boolean;
}

export const TaskItem: React.FC<Props> = ({ text, bookmarked }) => {
  return (
    <li className="w-full">
      <label
        className={`${
          bookmarked && "bg-secondary hover:bg-[#c6f7f4]"
        } cursor-pointer label hover:bg-base-200 p-3 pl-5 pr-5 rounded-none`}
      >
        <span
          className={`transition-colors label-text font-medium ${
            bookmarked && "text-[#40c2b3]"
          }`}
        >
          {text}
        </span>
      </label>
    </li>
  );
};