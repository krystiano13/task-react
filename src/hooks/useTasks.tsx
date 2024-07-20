import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../api/tasks";

export function useTasks(inputValue: string) {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: () => getTasks(inputValue),
  });
}
