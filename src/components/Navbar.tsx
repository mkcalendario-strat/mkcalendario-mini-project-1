"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useCallback, useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/#projects", label: "Projects" },
  { href: "/#stacks", label: "Stacks" },
  { href: "/#experience", label: "Experience" },
  { href: "/#about", label: "About" }
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-1 w-full border-b-1 border-neutral-600 bg-neutral-900 py-[10px]">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="relative h-[40px] w-[40px] overflow-hidden">
            <Image
              fill
              src="/assets/images/logos/light.webp"
              alt="brand logo"
              className="object-contain"
            />
          </Link>

          <Menu />
        </div>
      </div>
    </nav>
  );
}

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  const shouldDisplayLinks = useCallback(() => {
    const screenWidth = window.innerWidth;
    setIsMobile(screenWidth < 768);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    shouldDisplayLinks();
    window.addEventListener("resize", shouldDisplayLinks);

    return () => window.removeEventListener("resize", shouldDisplayLinks);
  }, [shouldDisplayLinks]);

  return (
    <Fragment>
      <MenuItems
        isMobile={isMobile}
        isMenuOpen={isMenuOpen}
      />

      <MenuButton
        isMobile={isMobile}
        toggleMenu={toggleMenu}
      />
    </Fragment>
  );
}

interface MenuItemsProps {
  isMobile: boolean | null;
  isMenuOpen: boolean;
}

function MenuItems({ isMobile, isMenuOpen }: MenuItemsProps) {
  const shouldDisplay = (isMobile && isMenuOpen) || isMobile === false;

  if (!shouldDisplay) return null;

  return (
    <div className="fixed top-[60px] left-0 flex h-[calc(100vh-60px)] w-full flex-col gap-[30px] bg-neutral-900 p-[20px] md:static md:top-auto md:left-auto md:h-auto md:w-auto md:flex-row md:gap-[10px] md:bg-transparent md:p-0">
      {NAV_LINKS.map((link, i) => (
        <Link
          key={i}
          href={link.href}
          className="block rounded-sm font-[500] text-neutral-200 duration-300 ease-in-out md:px-[15px] md:py-[5px] md:text-neutral-200 md:hover:bg-neutral-700">
          {link.label}
        </Link>
      ))}
    </div>
  );
}

interface MenuButtonProps {
  isMobile: boolean | null;
  toggleMenu: () => void;
}

function MenuButton({ isMobile, toggleMenu }: MenuButtonProps) {
  if (!isMobile) return;

  return (
    <button
      onClick={toggleMenu}
      className="cursor-pointer rounded-md bg-neutral-100 p-[5px]">
      <i className="fas fa-bars fa-fw fa-lg" />
    </button>
  );
}
