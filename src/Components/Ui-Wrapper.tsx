"use client";

import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

type WrapperProps = {
  children: ReactNode;
};

export const UiWrapper = ({ children }: WrapperProps) => {
  return (
    <div className=" flex flex-col  min-h-dvh">
      <Header />

      {children}
      <Footer />
    </div>
  );
};
