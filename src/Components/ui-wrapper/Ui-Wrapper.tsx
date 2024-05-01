"use client";

import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

type WrapperProps = {
  children: ReactNode;
};

export const UiWrapper = ({ children }: WrapperProps) => {
  return (
    <div className=" flex flex-col h-dvh min-h-dvh overflow-y-auto">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
