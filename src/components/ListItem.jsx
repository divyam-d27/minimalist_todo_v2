import { useDispatch } from "react-redux";
import { check, edit, remove, uncheck } from "../provider/context/todoSlice";
import { useState } from "react";

const ListItem = ({ dark, index, item }) => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  const handleCheck = () => {
    !checked ? dispatch(check(item._id)) : dispatch(uncheck(item._id));
    setChecked(!checked);
  };

  return (
    <>
      <div className="my-1">
        <input
          className="hidden"
          type="checkbox"
          id={`task_${index + 1}`}
          value={checked}
          onClick={handleCheck}
        />
        <label
          className={`flex items-center min-h-10 px-2 rounded ${
            dark ? "hover:bg-gray-900" : "hover:bg-gray-100"
          }`}
          htmlFor={`task_${index + 1}`}
        >
          <span
            className={` cursor-pointer flex items-center justify-center w-5 h-5 text-transparent border-2 ${
              dark ? "border-gray-500" : "border-gray-300"
            } rounded-full`}
          >
            <svg
              className="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span className="ml-4 text-sm">{item.description}</span>
          <div className="grow flex-shrink-0 flex-auto flex items-center justify-end">
            {/* Edit todo Btn */}
            <button
              className={`ml-4 ${
                dark
                  ? "fill-gray-500 hover:fill-white"
                  : "fill-gray-400 hover:fill-gray-900"
              }`}
              onClick={() => dispatch(edit(item))}
            >
              <svg
                className="fill-inherit"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M 13.550781 2.0019531 C 13.412183 1.9997829 13.332031 2.0058594 13.332031 2.0058594 A 0.750075 0.750075 0 0 0 12.773438 2.3300781 L 3.3632812 16.035156 A 0.750075 0.750075 0 0 0 3.234375 16.414062 L 3.0019531 20.205078 A 0.750075 0.750075 0 0 0 4.0625 20.931641 L 7.515625 19.353516 A 0.750075 0.750075 0 0 0 7.8222656 19.095703 L 17.230469 5.390625 A 0.750075 0.750075 0 0 0 17.332031 4.7519531 C 17.332031 4.7519531 16.976363 3.5163841 15.794922 2.7050781 C 14.908866 2.0966156 13.966577 2.0084638 13.550781 2.0019531 z M 13.730469 3.5839844 C 13.943458 3.5852744 14.366076 3.5422985 14.947266 3.9414062 C 15.527011 4.3395226 15.638307 4.7455582 15.716797 4.9453125 L 14.640625 6.5117188 L 12.65625 5.1484375 L 13.730469 3.5839844 z M 11.806641 6.3867188 L 13.792969 7.7480469 L 6.703125 18.074219 L 4.5742188 19.048828 L 4.71875 16.712891 L 11.806641 6.3867188 z M 10.75 19.5 A 0.75 0.75 0 0 0 10.75 21 A 0.75 0.75 0 0 0 10.75 19.5 z M 14.75 19.5 A 0.75 0.75 0 0 0 14.75 21 A 0.75 0.75 0 0 0 14.75 19.5 z M 18.75 19.5 A 0.75 0.75 0 0 0 18.75 21 A 0.75 0.75 0 0 0 18.75 19.5 z"></path>
              </svg>
            </button>
            {/* Delete todo Btn */}
            <button
              className={`ml-4 ${
                dark
                  ? "fill-gray-500 hover:fill-white"
                  : "fill-gray-400 hover:fill-gray-900"
              }`}
              onClick={() => dispatch(remove(item._id))}
            >
              <svg
                className="fill-inherit"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"></path>
              </svg>
            </button>
          </div>
        </label>
      </div>
    </>
  );
};

export default ListItem;
