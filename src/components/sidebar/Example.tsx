import { FC } from "react";
import Sidebar, { SidebarProps } from "./Sidebar";
import "../../tailwind.css";

const Example: FC<SidebarProps> = ({
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
}) => {
  return (
    <div className="flex justify-center items-center h-full bg-[#868686]">
      <Sidebar menuItems={menuItems} />
    </div>
  );
};

export default Example;
