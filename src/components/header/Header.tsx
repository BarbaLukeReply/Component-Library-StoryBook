import React from "react";
import "../../tailwind.css";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import AccountLogo from "../../assets/account.svg";
import LogoutLogo from "../../assets/logout.svg";
import ItalyFlag from "../../assets/italy.svg";
import CompanyLogo from "../../assets/company-logo.jpg";

export type HeaderProps = {
  userName?: string;
};

const Header: React.FC<HeaderProps> = ({ userName }) => {
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar className="bg-[#f7f7f7]" isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarBrand className="grow-[1]">
        <img
          src={CompanyLogo}
          alt="Logo Azienda"
          className="h-6 sm:h-7 md:h-8 mr-2"
        />
        <span className="text-gray-800 text-sm sm:text-base md:text-xl font-bold">
          Nome Azienda
        </span>
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:grow-[3] gap-6 shrink xs:hidden"
        justify="end"
      >
        <NavbarItem className="">
          <span className="text-gray-800 text-sm sm:text-base md:text-xl font-bold">
            Codice Cliente:&nbsp;
          </span>
          <span className="text-gray-800 text-sm sm:text-base md:text-xl">
            000001
          </span>
        </NavbarItem>
        <NavbarItem className="">
          <div className="flex items-center">
            <div className="flex flex-col items-center mr-1">
              <span className="text-gray-800 text-sm sm:text-base md:text-md">
                {userName}
              </span>
              <span className="text-gray-600 text-sm sm:text-base md:text-sm">
                Azienda
              </span>
            </div>
            <img
              src={AccountLogo}
              alt="Logo Utente"
              className="h-6 sm:h-7 md:h-8"
            />
          </div>
        </NavbarItem>
        <NavbarItem className="">
          <div className="flex items-center">
            <span className="text-gray-600 text-sm sm:text-base md:text-sm mr-1">
              Italy
            </span>
            <img
              src={ItalyFlag}
              alt="Logo Utente"
              className="h-6 sm:h-7 md:h-8"
            />
          </div>
        </NavbarItem>
        <NavbarItem className="">
          <Link href="#">
            <img
              src={LogoutLogo}
              alt="Logo Utente"
              className="h-6 sm:h-7 md:h-6"
            />
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
  /*
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
  */
};

export default Header;
