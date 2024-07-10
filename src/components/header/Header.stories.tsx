import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
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

const meta: Meta<typeof Example> = {
  title: "Header",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Sample: Story = {
  args: {
    userName: "John Doe",
    isMobile: false,
    menuItems: ["Home", "About", "Contact"],
    companyLogo: CompanyLogo,
    logoutLogo: LogoutLogo,
    flags: [
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
    accountLogo: AccountLogo,
    language: "English",
    userCompanyName: "User Company Name",
    companyName: "Company Name",
    clientCode: "123456",
  },
};
