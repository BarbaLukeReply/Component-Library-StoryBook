import { FC } from "react";
import Header, { HeaderProps } from "./Header";
import "../../tailwind.css";
import CompanyLogo from "../../assets/company-logo.jpg";
import LogoutLogo from "../../assets/logout.svg";
import AccountLogo from "../../assets/account.svg";
import ItalyFlag from "../../assets/italy.svg";

const Example: FC<HeaderProps> = ({
  userName = "John Doe",
  isMobile = false,
  menuItems = ["Home", "About", "Services", "Contact"],
  companyLogo = CompanyLogo,
  logoutLogo = LogoutLogo,
  flags = [
    {
      language: "English",
      flag: ItalyFlag,
    },
    {
      language: "Italian",
      flag: ItalyFlag,
    },
    {
      language: "Spanish",
      flag: ItalyFlag,
    },
    {
      language: "French",
      flag: ItalyFlag,
    },
  ],
  accountLogo = AccountLogo,
  language = "English",
  userCompanyName = "Company Name",
  companyName = "Company Name",
  clientCode = "123456",
}) => {
  return (
    <Header
      userName={userName}
      isMobile={isMobile}
      menuItems={menuItems}
      companyLogo={companyLogo}
      logoutLogo={logoutLogo}
      flags={flags}
      accountLogo={accountLogo}
      language={language}
      userCompanyName={userCompanyName}
      companyName={companyName}
      clientCode={clientCode}
    />
  );
};

export default Example;
