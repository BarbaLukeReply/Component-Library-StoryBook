import { FC } from "react";
import Header, { HeaderProps } from "./Header";
import "../../tailwind.css";
import sampleCompanyLogo from "../../assets/company-logo.jpg"; // Percorso al logo dell'azienda
import sampleUserLogo from "../../assets/user-icon.png"; // Percorso al logo dell'utente

const Example: FC<HeaderProps> = ({
  companyLogo = sampleCompanyLogo,
  userLogo = sampleUserLogo,
  companyName = "Nome Azienda",
  userName = "Nome Utente",
}) => {
  return (
    <div className="flex justify-center items-center h-full">
      <Header
        companyLogo={companyLogo}
        userLogo={userLogo}
        companyName={companyName}
        userName={userName}
      />
    </div>
  );
};

export default Example;
