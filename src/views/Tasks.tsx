import { useState } from "react";

import { TaskInput } from "../components/TaskInput";
import { TaskItem } from "../components/TaskItem";

export function Tasks() {
  const [menu, setMenu] = useState<boolean>(true);
  return (
    <div className="w-[100vw] h-[100vh] pt-24 flex justify-center">
      <section
        tabIndex={0}
        onFocus={() => setMenu(true)}
        onBlur={() => setMenu(true)}
      >
        <TaskInput />
        {menu && (
          <>
            <div className="menu p-0 rounded-xl bg-base-100 md:w-[32rem] w-[90vw] mt-2 font-medium">
              <ul>
                <h2 className="text-neutral p-3 text-opacity-70">
                  Bookmarked Tasks
                </h2>
                <TaskItem bookmarked text="API Integration" />
              </ul>
              <ul>
                <h2 className="text-neutral p-3 text-opacity-70">Tasks</h2>
                <TaskItem bookmarked={false} text="API Specification" />
              </ul>
              <div>
                <h2 className="text-neutral p-3 text-opacity-70">
                  Create a new task
                </h2>
                <TaskItem bookmarked={false} text="API Specification" />
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
