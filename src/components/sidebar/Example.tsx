import { FC } from "react";
import Sidebar, { SidebarProps } from "./Sidebar";
import "../../tailwind.css";

const Example: FC<SidebarProps> = ({
  menuItems = [
    <h2
      key="1"
      className="block py-2.5 px-4 rounded-lg transition duration-200 hover:bg-gray-400 text-gray-800 font-semibold shadow-md"
    >
      Page 1
    </h2>,
    <h2
      key="2"
      className="block py-2.5 px-4 rounded-lg transition duration-200 hover:bg-gray-400 text-gray-800 font-semibold shadow-md mt-4"
    >
      Page 2
    </h2>,
  ],
}) => {
  return (
    <div className="flex justify-center items-center h-full">
      <Sidebar menuItems={menuItems} />
    </div>
  );
};

export default Example;
