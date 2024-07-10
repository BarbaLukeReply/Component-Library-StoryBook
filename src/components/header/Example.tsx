import { FC } from "react";
import Header, { HeaderProps } from "./Header";
import "../../tailwind.css";

const Example: FC<HeaderProps> = ({ userName = "Nome Utente" }) => {
  return <Header userName={userName} />;
};

export default Example;
