import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import { HeaderProps } from "../header/Header";
import { FC, useEffect, useState } from "react";
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

const HeaderPage: FC<HeaderProps> = ({
  userName = "John Doe",
  isMobile = false,
  menuItems = [
    {
      name: "Pagina Iniziale",
      link: "/home",
      active: true,
      accordion: false,
      subMenuItems: [],
    },
    {
      name: "Notifiche",
      link: "/notifications",
      active: false,
      accordion: false,
      subMenuItems: [],
    },
    {
      name: "Anagrafica",
      link: "",
      active: false,
      accordion: true,
      subMenuItems: [
        {
          name: "Informazioni Generali",
          link: "/general-information",
          active: false,
          accordion: false,
          subMenuItems: [],
        },
        {
          name: "Contatti",
          link: "/contacts",
          active: false,
          accordion: false,
          subMenuItems: [],
        },
        {
          name: "Utente Master/altri utenti",
          link: "/users",
          active: false,
          accordion: false,
          subMenuItems: [],
        },
      ],
    },
    {
      name: "Amministrazione",
      link: "",
      active: false,
      accordion: true,
      subMenuItems: [
        {
          name: "Documenti Fiscali",
          link: "/fee-documents",
          active: false,
          accordion: false,
          subMenuItems: [],
        },
        {
          name: "Documenti",
          link: "/documents",
          active: false,
          accordion: false,
          subMenuItems: [],
        },
        {
          name: "Documenti Personali",
          link: "/personal-documents",
          active: false,
          accordion: false,
          subMenuItems: [],
        },
      ],
    },
    {
      name: "Veicoli",
      link: "",
      active: false,
      accordion: true,
      subMenuItems: [
        {
          name: "Anagrafica Veicoli",
          link: "/vehicles",
          active: false,
          accordion: false,
          subMenuItems: [],
        },
        {
          name: "Parco Mezzi",
          link: "/fleet",
          active: false,
          accordion: false,
          subMenuItems: [],
        },
      ],
    },
    {
      name: "Servizi",
      link: "",
      active: false,
      accordion: true,
      subMenuItems: [
        {
          name: "Offerta Servizi",
          link: "/services",
          active: false,
          accordion: false,
          subMenuItems: [],
        },
        {
          name: "Attivazione Servizi",
          link: "/services-activation",
          active: false,
          accordion: false,
          subMenuItems: [],
        },
        {
          name: "Servizi al veicolo",
          link: "/vehicle-services",
          active: false,
          accordion: false,
          subMenuItems: [],
        },
        {
          name: "Supporto dispositivi",
          link: "/device-support",
          active: false,
          accordion: false,
          subMenuItems: [],
        },
        {
          name: "Assicurazioni",
          link: "/insurances",
          active: false,
          accordion: false,
          subMenuItems: [],
        },
      ],
    },
    {
      name: "FAQ",
      link: "/faq",
      active: false,
      accordion: false,
      subMenuItems: [],
    },
  ],
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
  const [isMobileCalculated, setIsMobileCalculated] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => window.innerWidth < 768;
    setIsMobileCalculated(checkIfMobile());
    window.addEventListener("resize", () =>
      setIsMobileCalculated(checkIfMobile()),
    );
    return () =>
      window.removeEventListener("resize", () =>
        setIsMobileCalculated(checkIfMobile()),
      );
  }, []);

  return (
    <div className="flex flex-col h-screen w-screen bg-[#f7fae7]">
      <div className="flex">
        <Header
          userName={userName}
          isMobile={isMobileCalculated || isMobile}
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
      </div>
      <div className="flex flex-grow">
        <div className="hidden md:flex">
          <Sidebar menuItems={menuItems} />
        </div>
        <div className="flex-grow p-4 h-full"></div>
      </div>
      <div className="flex">sono il footer</div>
    </div>
  );
};
export default HeaderPage;
