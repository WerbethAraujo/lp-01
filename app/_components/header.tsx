import Image from "next/image";
import MenuItem from "./menuItem";
import Search from "./search";

import Logo from "@/public/logo.svg";
import UserIcon from "@/public/icon-user.svg";
import Container from "./container";

const Header = () => {
  return (
    <header className="relative flex items-center w-full h-20 bg-primary-orange">
      <div className="absolute right-0 top-0 bg-primary-blue w-[19%] h-full z-0" />
      <Container>
        <div className="flex flex-1 items-center justify-between">
          <div className="flex items-center gap-14">
            <Image src={Logo} alt="logo" />
            <ul className="flex items-center gap-12">
              <MenuItem name="Para Você" />
              <MenuItem name="Para Empresas" />
              <MenuItem name="Serviços" />
              <MenuItem name="Ajuda" />
            </ul>
          </div>
          <Search />
        </div>
        <button className="flex items-center gap-4 bg-primary-blue h-20 p-10 text-white z-10">
          <Image src={UserIcon} alt="user icon" />
          <span>Acessar Conta</span>
        </button>
      </Container>
    </header>
  );
};

export default Header;
