import { TaskItem } from "./TaskItem";

type Task = {
  name: string;
  bookmarked: boolean;
  id: number;
};

interface Props {
  queryData: Task[];
  bookmarked: boolean;
}

export const TaskList: React.FC<Props> = ({ queryData, bookmarked }) => {
  return (
    <>
      {bookmarked ? (
        <>
          {queryData.map(
            (item: Task) =>
              item.bookmarked && (
                <TaskItem
                  taskID={item.id}
                  key={item.id}
                  bookmarked
                  text={item.name}
                />
              )
          )}
        </>
      ) : (
        <>
          <>
            {queryData.map(
              (item: Task) =>
                !item.bookmarked && (
                  <TaskItem
                    taskID={item.id}
                    key={item.id}
                    bookmarked={false}
                    text={item.name}
                  />
                )
            )}
          </>
        </>
      )}
    </>
  );
};
