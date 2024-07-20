import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../api/getTasks";

export function useTasks(inputValue: string) {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: () => getTasks(inputValue),
  });
}
