import React from "react";
import star from "../assets/star.png";
import star2 from "../assets/star2.png";

interface Props {
  text: string;
  bookmarked: boolean;
  create?: () => void;
  bookmark?: () => void;
}

export const TaskItem: React.FC<Props> = ({
  text,
  bookmarked,
  create,
  bookmark,
}) => {
  return (
    <li
      className="w-full animate-fade animate-duration-300"
      onClick={create ? create : bookmark ? bookmark : () => {}}
    >
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
        {!create && (
          <>
            {bookmarked ? (
              <img className="h-[1rem]" src={star2} alt="star icon" />
            ) : (
              <img className="h-[1rem]" src={star} alt="star icon" />
            )}
          </>
        )}
      </label>
    </li>
  );
};
