import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import CompanyLogo from "../../assets/company-logo.jpg";
import LogoutLogo from "../../assets/logout.svg";
import AccountLogo from "../../assets/account.svg";
import ItalyFlag from "../../assets/italy.svg";

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
      { language: "English", flag: ItalyFlag },
      { language: "Italian", flag: ItalyFlag },
      { language: "Schifo", flag: ItalyFlag },
      { language: "Tedesco", flag: ItalyFlag },
    ],
    accountLogo: AccountLogo,
    language: "English",
    userCompanyName: "User Company Name",
    companyName: "Company Name",
    clientCode: "123456",
  },
};
