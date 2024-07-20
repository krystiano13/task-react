import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";

import { TaskInput } from "../components/TaskInput";
import { TaskItem } from "../components/TaskItem";
import { Button } from "../components/Button";
import { Toast } from "../components/Toast";
import { getTasks } from "../api/tasks";
import { TaskList } from "../components/TaskList";
import { useTaskCreate } from "../hooks/useTaskCreate";

export function Tasks() {
  const [menu, setMenu] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const navigate = useNavigate();
  const taskCreate = useTaskCreate();

  useEffect(() => {
    if (!Cookies.get("user")) {
      navigate("/");
    }
  }, []);

  const tasksQuery = useQuery({
    queryKey: ["tasks"],
    queryFn: () => getTasks(inputValue),
  });

  function logout() {
    Cookies.remove("user");
    navigate("/");
  }

  return (
    <div className="w-[100vw] h-[100vh] pt-24 flex justify-center">
      <section>
        <TaskInput
          change={(value: string, mutation: () => void) => {
            value ? setMenu(true) : setMenu(false);
            setInputValue(value);
            mutation();
          }}
        />
        {menu && (
          <>
            <div className="animate-fade-up animate-duration-150 menu p-0 rounded-xl bg-base-100 md:w-[32rem] w-[90vw] mt-2 font-medium">
              <ul>
                <h2 className="text-neutral p-3 text-opacity-70">
                  Bookmarked Tasks
                </h2>
                {tasksQuery.isSuccess && (
                  <TaskList bookmarked queryData={tasksQuery.data.data} />
                )}
              </ul>
              <ul>
                <h2 className="text-neutral p-3 text-opacity-70">Tasks</h2>
                {tasksQuery.isSuccess && (
                  <TaskList
                    bookmarked={false}
                    queryData={tasksQuery.data.data}
                  />
                )}
              </ul>
              <div>
                <h2 className="text-neutral p-3 text-opacity-70">
                  Create a new task
                </h2>
                <TaskItem
                  taskID={-1}
                  create={() => taskCreate.mutate(inputValue)}
                  bookmarked={false}
                  text={`Create a new task - "${inputValue}"`}
                />
              </div>
            </div>
          </>
        )}
      </section>
      <Toast>
        <Button onClick={logout} type="button">
          Log Out
        </Button>
      </Toast>
    </div>
  );
}
