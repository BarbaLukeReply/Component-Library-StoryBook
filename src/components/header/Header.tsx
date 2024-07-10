import React from "react";
import "../../tailwind.css";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export type flagsObject = {
  language: string;
  flag: string;
};

export type HeaderProps = {
  userName?: string;
  isMobile?: boolean;
  menuItems: string[];
  companyLogo: string;
  logoutLogo: string;
  flags: flagsObject[];
  accountLogo: string;
  language: string;
  companyName?: string;
  userCompanyName?: string;
  clientCode?: string;
};

const Header: React.FC<HeaderProps> = ({
  userName,
  isMobile,
  menuItems,
  companyLogo,
  logoutLogo,
  flags,
  accountLogo,
  language,
  userCompanyName,
  companyName,
  clientCode,
}) => {
  const [currentLanguage, setCurrentLanguage] = React.useState(language);

  const handleCurrentLanguage = (language: string) => {
    setCurrentLanguage(language);
  };

  const MobileMenu = () => (
    <Navbar className="bg-[#f7f7f7]" isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarBrand className="grow-[1]">
        <img
          src={companyLogo}
          alt="Logo Azienda"
          className="h-6 sm:h-7 md:h-8 mr-2"
        />
        <span className="text-gray-800 text-sm sm:text-base md:text-xl font-bold">
          {companyName}
        </span>
      </NavbarBrand>
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

  return (
    <>
      {isMobile ? (
        <MobileMenu />
      ) : (
        <header className="w-full flex items-center justify-between bg-[#f7f7f7] p-2 sm:p-3 md:p-4">
          <div className="grow">
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
          </div>
          <div className="grow-[2] flex justify-end items-center gap-8">
            <div>
              <span className="text-gray-800 text-sm sm:text-base md:text-xl font-bold">
                Codice Cliente:&nbsp;
              </span>
              <span className="text-gray-800 text-sm sm:text-base md:text-xl">
                {clientCode}
              </span>
            </div>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="bordered">
                  <div className="flex items-center">
                    <div className="flex flex-col items-center mr-1">
                      <span className="text-gray-800 text-sm sm:text-base md:text-md">
                        {userName}
                      </span>
                      <span className="text-gray-600 text-sm sm:text-base md:text-sm">
                        {userCompanyName}
                      </span>
                    </div>
                    <img
                      src={accountLogo}
                      alt="Logo Utente"
                      className="h-6 sm:h-7 md:h-8"
                    />
                  </div>
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new">
                  Modifica impoastazioni di accesso
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="bordered">
                  <div className="flex items-center">
                    <span className="text-gray-600 text-sm sm:text-base md:text-sm mr-1">
                      {
                        flags.find((flag) => flag.language === currentLanguage)
                          ?.language
                      }
                    </span>
                    <img
                      src={
                        flags.find((flag) => flag.language === currentLanguage)
                          ?.flag
                      }
                      alt="Bandiera Lingua"
                      className="h-6 sm:h-7 md:h-8"
                    />
                  </div>
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                {flags
                  .filter((flag) => flag.language !== currentLanguage)
                  .map(({ language, flag }) => (
                    <DropdownItem
                      key={language}
                      onClick={() => handleCurrentLanguage(language)}
                    >
                      <div className="flex items-center">
                        <span className="text-gray-600 text-sm sm:text-base md:text-sm mr-1">
                          {language}
                        </span>
                        <img
                          src={flag}
                          alt={`Bandiera ${language}`}
                          className="h-6 sm:h-7 md:h-8"
                        />
                      </div>
                    </DropdownItem>
                  ))}
              </DropdownMenu>
            </Dropdown>
            <Link href="#">
              <img
                src={logoutLogo}
                alt="Logo Utente"
                className="h-6 sm:h-7 md:h-6"
              />
            </Link>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
