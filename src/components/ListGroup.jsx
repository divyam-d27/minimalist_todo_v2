import React from "react";
import { useSelector } from "react-redux";
import ListItem from "./ListItem";
import TodoInput from "./TodoInput";
import TodoActionBtn from "./TodoActionBtn";

const ListGroup = () => {
  const dark = useSelector((state) => state.theme);
  const { allTodos } = useSelector((state) => state.todos);

  return (
    <div
      className={`max-w-full py-8 px-4 rounded-lg shadow-lg w-96 ${
        dark ? "bg-gray-800 text-gray-200" : "bg-white"
      }`}
    >
      <div className="flex items-center mb-4">
        <svg
          className="h-8 w-8 text-indigo-500 stroke-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
          />
        </svg>
        {allTodos.length !== 0 ? (
          <h4 className="font-semibold ml-3 text-lg">Your Todo&apos;s</h4>
        ) : (
          <h4 className="font-semibold ml-3 text-lg">Nothing on the Horizon</h4>
        )}
      </div>
      {allTodos.map((item, i, arr) => (
        <React.Fragment key={item._id}>
          <ListItem item={item} dark={dark} index={i} />
          {i !== arr.length - 1 && (
            <hr className=" h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
          )}
        </React.Fragment>
      ))}
      <TodoInput />
      {allTodos.length !== 0 && <TodoActionBtn />}
    </div>
  );
};

export default ListGroup;
