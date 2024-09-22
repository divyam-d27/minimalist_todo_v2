import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { add, update } from "../provider/context/todoSlice";

const TodoInput = () => {
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const { onEdit } = useSelector((state) => state.todos);

  useEffect(() => {
    if (onEdit.isEditing) {
      setDescription(onEdit.todo.description);
    } else {
      setDescription("");
    }
  }, [onEdit.isEditing, onEdit.todo.description]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description === "") return;
    console.log(description);
    if (onEdit.isEditing) {
      dispatch(update({ ...onEdit.todo, description }));
    } else {
      dispatch(
        add({
          _id: crypto.randomUUID(),
          description,
        })
      );
    }
    setDescription("");
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className="flex items-center w-full h-8 px-2 mt-2 text-sm font-medium rounded"
    >
      <button type="submit">
        <svg
          className="w-5 h-5 rounded-full text-gray-500 hover:text-green-600 hover:bg-green-100 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
      <input
        className="flex-grow h-8 ml-4 bg-transparent focus:outline-none font-medium"
        type="text"
        placeholder="add a new task"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </form>
  );
};

export default TodoInput;
