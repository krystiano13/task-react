import React from "react";
import { useTaskBookmark } from "../hooks/useTaskBookmark";

import star from "../assets/star.png";
import star2 from "../assets/star2.png";

interface Props {
  taskID: number;
  text: string;
  bookmarked: boolean;
  create?: () => void;
}

export const TaskItem: React.FC<Props> = ({
  taskID,
  text,
  bookmarked,
  create,
}) => {
  const bookmark = useTaskBookmark();

  return (
    <li
      className="w-full animate-fade animate-duration-300"
      onClick={
        create
          ? create
          : () => bookmark.mutate({ id: taskID, bookmark: !bookmarked })
      }
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
