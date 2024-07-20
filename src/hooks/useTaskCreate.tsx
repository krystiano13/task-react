import { createTask } from "../api/createTasks";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { errorHandler } from "../utils/queries";

export function useTaskCreate() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: (e) => errorHandler(e, () => navigate("/")),
  });
}
