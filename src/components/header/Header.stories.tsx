import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import sampleCompanyLogo from "../../assets/company-logo.jpg"; // Percorso al logo dell'azienda
import sampleUserLogo from "../../assets/user-icon.png"; // Percorso al logo dell'utente

const meta: Meta<typeof Example> = {
  title: "Header",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Sample: Story = {
  args: {
    companyLogo: sampleCompanyLogo,
    userLogo: sampleUserLogo,
    companyName: "Nome Azienda",
    userName: "Nome Utente",
  },
};
