import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { bookmarkTask } from "../api/bookmarkTask";
import { errorHandler } from "../utils/queries";

export function useTaskBookmark() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: bookmarkTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: (e) => errorHandler(e, () => navigate("/")),
  });
}
