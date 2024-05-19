import Image from "next/image";
import Container from "./container";

import IconPhone from "@/public/icon-phone.svg";
import IconSolutions from "@/public/icon-solutions.svg";
import IconOptions from "@/public/icon-options.svg";
import IconCard from "@/public/icon-card.svg";
import ImagePhone from "@/public/phone.png";

const Services = () => {
  return (
    <section className="relative w-full h-[965px]">
      <Container>
        <div className="flex-1 max-w-[594px] pt-32">
          <h3 className="block text-primary-orange text-sm font-bold uppercase mb-9">
            Serviços Exclusivos
          </h3>
          <h2 className="text-5xl text-primary-gray font-bold mb-6">
            Gerencie suas finanças sem sair de casa
          </h2>
          <p className="text-lg max-w-[554px] mb-16 text-second-gray">
            Veja como voçê pode cuidar das suas finançaspelo app Itaú de forma
            segura, rápida e melhor, no conforto da sua casa
          </p>
          <ul className="flex flex-col items-start gap-9">
            <li className="flex items-center gap-8 pb-9 border-b-[1px] border-opacity-gray">
              <div className="w-7 h-7 flex items-center justify-center">
                <Image src={IconPhone} alt="icon phione" />
              </div>
              <p className="flex-1 text-text-gray pr-2">
                Acompanhar sua conta, faça transferências e pagamentos de onde
                estiver
              </p>
            </li>
            <li className="flex items-center gap-8 pb-9 border-b-[1px] border-opacity-gray">
              <div className="w-7 h-7 flex items-center justify-center">
                <Image src={IconSolutions} alt="icon phione" />
              </div>
              <p className="flex-1 text-text-gray pr-2">
                Solucões de empréstimos e renegociação para organizar suas
                finanças
              </p>
            </li>
            <li className="flex items-center gap-8 pb-9 border-b-[1px] border-opacity-gray">
              <div className="w-7 h-7 flex items-center justify-center">
                <Image src={IconOptions} alt="icon phione" />
              </div>
              <p className="flex-1 text-text-gray pr-2">
                Diversas opções de investimentos de acordo com o seu perfil
              </p>
            </li>
            <li className="flex items-center gap-8 pb-9">
              <div className="w-7 h-7 flex items-center justify-center">
                <Image src={IconCard} alt="icon phione" />
              </div>
              <p className="flex-1 text-text-gray pr-2">
                Acompanhe a fatura do seu cartão e faça compras. Tudo online
              </p>
            </li>
          </ul>
        </div>
      </Container>
      <div className="flex items-center absolute top-0 right-0 w-[32%] h-full  bg-gray-phone">
        <Image
          src={ImagePhone}
          alt="image phone"
          className="translate-x-[-50%]"
        />
      </div>
    </section>
  );
};

export default Services;
