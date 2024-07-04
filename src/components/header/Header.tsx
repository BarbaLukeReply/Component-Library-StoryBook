import React from "react";
import "../../tailwind.css";

export type HeaderProps = {
  companyLogo?: string;
  userLogo?: string;
  companyName?: string;
  userName?: string;
};

const Header: React.FC<HeaderProps> = ({
  companyLogo,
  userLogo,
  companyName,
  userName,
}) => {
  return (
    <header className="w-full flex items-center justify-between bg-[#f7f7f7] p-2 sm:p-3 md:p-4">
      <div className="flex items-center">
        <img
          src={companyLogo}
          alt="Logo Azienda"
          className="h-6 sm:h-7 md:h-8 mr-2"
        />
        <span className="text-gray-800 text-sm sm:text-base md:text-xl font-bold">
          {companyName}
        </span>
      </div>
      <div className="flex items-center">
        <img
          src={userLogo}
          alt="Logo Utente"
          className="h-6 sm:h-7 md:h-8 mr-2"
        />
        <span className="text-gray-800 text-sm sm:text-base md:text-xl">
          {userName}
        </span>
      </div>
    </header>
  );
};

export default Header;
