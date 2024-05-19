import Container from "./container";
import Image from "next/image";

import ImgGooglePlay from "@/public/btn-google-play.svg";
import ImgAppleStore from "@/public/btn-apple-store.svg";
import ArrowExplore from "@/public/arrow-explorer.svg";
import WomanImage from "@/public/woman.png";

const Hero = () => {
  return (
    <section className="w-full h-[704px] bg-img_bg_hero bg-no-repeat bg-center bg-cover">
      <Container>
        <div className="flex-1 max-w-[497px] pt-12">
          <h1 className="text-white text-6xl font-bold mb-4">
            Tenha seu banco na palma da sua mão.
          </h1>
          <p className="text-white text-xl max-w-[408px] mb-8">
            Todas as operações que você precisa em um so lugar. Simples,
            completo e feito pra você.
          </p>
          <div className="flex gap-4 mb-24">
            <button>
              <Image src={ImgAppleStore} alt="button apple store" />
            </button>
            <button>
              <Image src={ImgGooglePlay} alt="button google paly" />
            </button>
          </div>
          <button className="flex items-center gap-3">
            <Image src={ArrowExplore} alt="arrow down" />
            <span className="font-bold text-white text-sm">
              Continue explorando
            </span>
          </button>
        </div>
        <Image src={WomanImage} alt="woman image mr-[-41px]" />
      </Container>
    </section>
  );
};

export default Hero;
