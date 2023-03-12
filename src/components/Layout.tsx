import { ReactNode } from "react";
import { OpenBurger } from "./Navigation/Burger";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="absolute top-9 right-5 z-20">
        <OpenBurger />
      </div>
      {children}
    </>
  );
};
