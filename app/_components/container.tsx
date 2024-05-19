import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="flex items-center justify-between w-full max-w-[1246px] px-4 mx-auto">
      {children}
    </div>
  );
};

export default Container;
