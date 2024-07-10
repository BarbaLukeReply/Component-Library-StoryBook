import { FC } from "react";
import Header, { HeaderProps } from "./Header";
import "../../tailwind.css";
import CompanyLogo from "../../assets/company-logo.jpg";
import LogoutLogo from "../../assets/logout.svg";
import AccountLogo from "../../assets/account.svg";
import ItalyFlag from "../../assets/flags/italy.svg";
import CroatianFlag from "../../assets/flags/croatia.svg";
import SpanishFlag from "../../assets/flags/spain.svg";
import FrenchFlag from "../../assets/flags/france.svg";
import GermanFlag from "../../assets/flags/germany.svg";
import EnglishFlag from "../../assets/flags/united-kingdom.svg";
import UkranianFlag from "../../assets/flags/ukraine.svg";
import PolandFlag from "../../assets/flags/poland.svg";
import PortugaiseFlag from "../../assets/flags/portugal.svg";

const Example: FC<HeaderProps> = ({
  userName = "John Doe",
  isMobile = false,
  menuItems = ["Home", "About", "Services", "Contact"],
  companyLogo = CompanyLogo,
  logoutLogo = LogoutLogo,
  flags = [
    {
      language: "English",
      flag: EnglishFlag,
    },
    {
      language: "Italian",
      flag: ItalyFlag,
    },
    {
      language: "Spanish",
      flag: SpanishFlag,
    },
    {
      language: "French",
      flag: FrenchFlag,
    },
    {
      language: "German",
      flag: GermanFlag,
    },
    {
      language: "Croatian",
      flag: CroatianFlag,
    },
    {
      language: "Ukrainian",
      flag: UkranianFlag,
    },
    {
      language: "Polish",
      flag: PolandFlag,
    },
    {
      language: "Portuguese",
      flag: PortugaiseFlag,
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
