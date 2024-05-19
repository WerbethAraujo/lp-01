import Image from "next/image";
import SearchIcon from "@/public/icon-search.svg";

const Search = () => {
  return (
    <div className="flex items-center gap-4">
      <Image src={SearchIcon} alt="search icon" />
      <input
        type="text"
        className="bg-transparent outline-none pr-5 text-white placeholder:text-white"
        placeholder="Buscar..."
      />
    </div>
  );
};

export default Search;
