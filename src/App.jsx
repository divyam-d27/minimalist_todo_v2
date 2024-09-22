import { useSelector } from "react-redux";
import ListGroup from "./components/ListGroup";
import ThemeBtn from "./components/ThemeBtn";

const App = () => {
  const dark = useSelector((state) => state.theme);

  return (
    <div
      className={`flex flex-grow flex-wrap items-center justify-center gap-4 py-12 w-screen min-h-screen font-medium relative ${
        dark ? "bg-gray-900" : "text-gray-600 bg-gray-100"
      }`}
    >
      <ListGroup />
      <ThemeBtn />
    </div>
  );
};

export default App;
