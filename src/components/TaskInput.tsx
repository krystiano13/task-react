import { debounce } from "../utils/debounce";
import { useTaskSearch } from "../hooks/useTaskSearch";

interface Props {
  change: (value: string, mutation: () => void) => void;
}

export const TaskInput: React.FC<Props> = ({ change }) => {
  const search = useTaskSearch();

  return (
    <label
      id="taskInput"
      className="input input-bordered md:w-[32rem] w-[90vw] transition flex items-center gap-2 animate-fade-up animate-duration-150"
    >
      <input
        onChange={debounce((e) => {
          change(e.target.value, () => search.mutate(e.target.value));
        }, 250)}
        type="text"
        className="grow font-medium"
        placeholder="Search"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="#48555f77"
        className="h-4 w-4 opacity-70"
      >
        <path
          fillRule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clipRule="evenodd"
        />
      </svg>
    </label>
  );
};
