import { useState, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";

import { TaskInput } from "../components/TaskInput";
import { TaskItem } from "../components/TaskItem";
import { getTasks, createTask, bookmarkTask } from "../api/tasks";

type Task = {
  name: string;
  bookmarked: boolean;
  id: number;
};

export function Tasks() {
  const [menu, setMenu] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>("");

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!Cookies.get("user")) {
      navigate("/");
    }
  }, []);

  const tasksQuery = useQuery({
    queryKey: ["tasks"],
    queryFn: () => getTasks(inputValue),
  });

  const createTaskMutation = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const bookmarkTaskMutation = useMutation({
    mutationFn: bookmarkTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  return (
    <div className="w-[100vw] h-[100vh] pt-24 flex justify-center">
      <section
        tabIndex={0}
        onFocus={() => setMenu(true)}
        onBlur={() => setMenu(true)}
      >
        <TaskInput
          change={(value: string) => {
            setInputValue(value);
          }}
        />
        {menu && (
          <>
            <div className="menu p-0 rounded-xl bg-base-100 md:w-[32rem] w-[90vw] mt-2 font-medium">
              <ul>
                <h2 className="text-neutral p-3 text-opacity-70">
                  Bookmarked Tasks
                </h2>
                {tasksQuery.isSuccess && (
                  <>
                    {tasksQuery.data.data.map(
                      (item: Task) =>
                        item.bookmarked && (
                          <TaskItem
                            key={item.id}
                            bookmark={() =>
                              bookmarkTaskMutation.mutate({
                                id: item.id,
                                bookmark: false,
                              })
                            }
                            bookmarked
                            text={item.name}
                          />
                        )
                    )}
                  </>
                )}
              </ul>
              <ul>
                <h2 className="text-neutral p-3 text-opacity-70">Tasks</h2>
                {tasksQuery.isSuccess && (
                  <>
                    {tasksQuery.data.data.map(
                      (item: Task) =>
                        !item.bookmarked && (
                          <TaskItem
                            bookmark={() =>
                              bookmarkTaskMutation.mutate({
                                id: item.id,
                                bookmark: true,
                              })
                            }
                            key={item.id}
                            bookmarked={false}
                            text={item.name}
                          />
                        )
                    )}
                  </>
                )}
              </ul>
              <div>
                <h2 className="text-neutral p-3 text-opacity-70">
                  Create a new task
                </h2>
                <TaskItem
                  create={() => createTaskMutation.mutate(inputValue)}
                  bookmarked={false}
                  text={`Create a new task - "${inputValue}"`}
                />
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
