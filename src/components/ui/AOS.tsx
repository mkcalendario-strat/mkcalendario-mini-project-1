"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { Fragment, useEffect } from "react";

interface AOSComponentProps {
  children: React.ReactNode;
}

export default function AOSComponent({ children }: AOSComponentProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  return <Fragment>{children}</Fragment>;
}
