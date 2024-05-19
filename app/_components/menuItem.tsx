import Image from "next/image";
import Arrow from "@/public/arrow-down.svg";

type MenuItemProps = {
  name: string;
};

const MenuItem = ({ name }: MenuItemProps) => {
  return (
    <li>
      <button className="flex items-center gap-3">
        <span className="text-white font-bold">{name}</span>
        <Image src={Arrow} alt="arrow dropdown" />
      </button>
    </li>
  );
};

export default MenuItem;
