import React from "react";
import "../../tailwind.css";

export type SidebarProps = {
  menuItems?: React.ReactNode[];
};

const Sidebar: React.FC<SidebarProps> = ({ menuItems }) => {
  return (
    <React.Fragment>
      <div className="w-64 bg-gray-300 text-gray-800 overflow-auto p-2">
        <div className="flex flex-col items-center justify-center p-5">
          <div className="text-3xl font-bold">Menu</div>
          <p className="text-gray-600 text-sm italic mt-2">Shell Component</p>
        </div>
        <nav className="mt-10 text-right">{menuItems?.map((item) => item)}</nav>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
