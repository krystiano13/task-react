import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getTasks } from "../api/tasks";
import { useNavigate } from "react-router";
import { errorHandler } from "../utils/queries";

export function useTaskSearch() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (value: string) => getTasks(value),
    onSuccess: () => queryClient.refetchQueries({ queryKey: ["tasks"] }),
    onError: (e) => errorHandler(e, () => navigate("/")),
  });
}
