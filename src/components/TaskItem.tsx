import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { errorHandler } from "../utils/queries";
import { useNavigate } from "react-router";

import { bookmarkTask } from "../api/tasks";

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
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const bookmarkTaskMutation = useMutation({
    mutationFn: bookmarkTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: (e) => errorHandler(e, () => navigate("/")),
  });

  return (
    <li
      className="w-full animate-fade animate-duration-300"
      onClick={
        create
          ? create
          : () =>
              bookmarkTaskMutation.mutate({ id: taskID, bookmark: !bookmarked })
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
