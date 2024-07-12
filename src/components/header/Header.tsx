import React from "react";
import "../../tailwind.css";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Accordion,
  AccordionItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  User,
} from "@nextui-org/react";

export type flagsObject = {
  language: string;
  flag: string;
};

export type MenuItem = {
  name: string;
  link: string;
  active: boolean;
  accordion: boolean;
  subMenuItems: MenuItem[];
};

export type HeaderProps = {
  userName: string;
  isMobile: boolean;
  menuItems: MenuItem[];
  companyLogo: string;
  logoutLogo: string;
  flags: flagsObject[];
  accountLogo: string;
  language: string;
  companyName: string;
  userCompanyName: string;
  clientCode: string;
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
    <Navbar className="bg-[#ffffff]" isBordered>
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
        {menuItems?.map((item, index) => {
          return (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Accordion
                selectionMode={"single"}
                isCompact={true}
                showDivider={false}
              >
                {item.accordion ? (
                  <AccordionItem
                    key={index}
                    aria-label={item.name}
                    title={item.name}
                    classNames={{
                      content: "pl-2",
                    }}
                  >
                    {item.subMenuItems.map((subItem, subIndex) => {
                      return (
                        <Accordion
                          selectionMode={"single"}
                          isCompact={true}
                          showDivider={false}
                          key={subIndex}
                        >
                          <AccordionItem
                            key={subIndex}
                            aria-label={subItem.name}
                            title={subItem.name}
                            hideIndicator={true}
                            disableAnimation={true}
                            classNames={{
                              content: "p-0 h-0",
                            }}
                          />
                        </Accordion>
                      );
                    })}
                  </AccordionItem>
                ) : (
                  <AccordionItem
                    key={index}
                    aria-label={item.name}
                    title={item.name}
                    hideIndicator={true}
                    disableAnimation={true}
                    classNames={{
                      content: "p-0 h-0",
                    }}
                  />
                )}
              </Accordion>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );

  return (
    <>
      {isMobile ? (
        <MobileMenu />
      ) : (
        <header className="w-full flex items-center justify-between bg-[#ffffff] p-2 sm:p-3 md:p-4">
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
              <span className="text-gray-800 text-sm sm:text-base md:text-base font-bold">
                Codice Cliente:&nbsp;
              </span>
              <span className="text-gray-800 text-sm sm:text-base md:text-xl">
                {clientCode}
              </span>
            </div>
            <Dropdown>
              <DropdownTrigger>
                <Button color="primary" variant="light" className="p-4">
                  <User
                    name={userName}
                    description={userCompanyName}
                    avatarProps={{
                      src: accountLogo,
                    }}
                  />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem
                  key="new"
                  title={"Modifica impoastazioni di accesso"}
                />
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  color="primary"
                  variant="light"
                  startContent={
                    <span className="text-gray-600 text-sm sm:text-base md:text-sm mr-1">
                      {
                        flags?.find((flag) => flag.language === currentLanguage)
                          ?.language
                      }
                    </span>
                  }
                  endContent={
                    <img
                      src={
                        flags.find((flag) => flag.language === currentLanguage)
                          ?.flag
                      }
                      alt="Bandiera Lingua"
                      className="h-6 sm:h-7 md:h-8"
                    />
                  }
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                {flags
                  ?.filter((flag) => flag.language !== currentLanguage)
                  ?.map(({ language, flag }) => (
                    <DropdownItem
                      key={language}
                      onClick={() => handleCurrentLanguage(language)}
                      endContent={
                        <img
                          src={flag}
                          alt={`Bandiera ${language}`}
                          className="h-6 sm:h-7 md:h-8"
                        />
                      }
                      startContent={<h1 className="text-xl">{language}</h1>}
                    />
                  ))}
              </DropdownMenu>
            </Dropdown>
            <Button color="primary" variant="light">
              <img
                src={logoutLogo}
                alt="Logo Utente"
                className="h-6 sm:h-7 md:h-6"
              />
            </Button>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
