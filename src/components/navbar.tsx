import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
  Button,
} from "@material-tailwind/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}
function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_self" : "_blank"}
        variant="small"
        className="font-medium"
        placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}

      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color={isScrolling ? "black" : "transparent"}
      className="fixed top-0 z-50 border-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <img
            src="/image/logo.png"
            alt="nature image"
          />
        </Link>
        {/* <Typography variant="h6" color={isScrolling ? "blue-gray" : "white"}>
          Material Tailwind
        </Typography> */}
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${isScrolling ? "text-gray-900" : "text-white"
            }`}
        >
          <NavItem href="/">Home</NavItem>
          <NavItem href="/guide-focus">Guide Focus</NavItem>
          <NavItem href="/offerings">Offerings</NavItem>
          <NavItem href="/carbon-footprint">Carbon Footprint</NavItem>
          <NavItem href="/activities">Activities</NavItem>
          <NavItem href="/program">Program</NavItem>
          <NavItem href="/news">News</NavItem>
          <NavItem href="/know-more">Know More</NavItem>
          <NavItem href="/downloads">Downloads</NavItem>
          <NavItem href="/gallery">Gallery</NavItem>
          <NavItem href="/contact-us">Contact Us</NavItem>
        </ul>
        <div className="hidden gap-2 lg:flex">
          <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer">
            <IconButton
              variant="text"
              color={isScrolling ? "gray" : "white"}
              size="sm"
            >
              <i className="fa-brands fa-twitter text-base" />
            </IconButton>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <IconButton
              variant="text"
              color={isScrolling ? "gray" : "white"}
              size="sm"
            >
              <i className="fa-brands fa-facebook text-base" />
            </IconButton>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <IconButton
              variant="text"
              color={isScrolling ? "gray" : "white"}
              size="sm"
            >
              <i className="fa-brands fa-instagram text-base" />
            </IconButton>
          </a>
          <a href="https://api.whatsapp.com/send?phone=919811608009&text=I%20want%20more%20information,Please%20Contact%20Me." target="_blank" rel="noopener noreferrer">
            <IconButton
              variant="text"
              color={isScrolling ? "gray" : "white"}
              size="sm"
            >
              <i className="fa-brands  fa-whatsapp text-base" />
            </IconButton>
          </a>
        </div>
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/guide-focus">Guide Focus</NavItem>
            <NavItem href="/offerings">Offerings</NavItem>
            <NavItem href="/carbon-footprint">Carbon Footprint</NavItem>
            <NavItem href="/activities">Activities</NavItem>
            <NavItem href="/program">Program</NavItem>
            <NavItem href="/news">News</NavItem>
            <NavItem href="/know-more">Know More</NavItem>
            <NavItem href="/downloads">Downloads</NavItem>
            <NavItem href="/gallery">Gallery</NavItem>
            <NavItem href="/contact-us">Contact Us</NavItem>
          </ul>
          <div className="mt-4 flex gap-2">
            <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer">
              <IconButton
                variant="text"
                color={isScrolling ? "gray" : "white"}
                size="sm"
              >
                <i className="fa-brands fa-twitter text-base" />
              </IconButton>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <IconButton
                variant="text"
                color={isScrolling ? "gray" : "white"}
                size="sm"
              >
                <i className="fa-brands fa-facebook text-base" />
              </IconButton>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <IconButton
                variant="text"
                color={isScrolling ? "gray" : "white"}
                size="sm"
              >
                <i className="fa-brands fa-instagram text-base" />
              </IconButton>
            </a>
            <a href="https://api.whatsapp.com/send?phone=919811608009&text=I%20want%20more%20information,Please%20Contact%20Me." target="_blank" rel="noopener noreferrer">
              <IconButton
                variant="text"
                color={isScrolling ? "gray" : "white"}
                size="sm"
              >
                <i className="fa-brands  fa-whatsapp text-base" />
              </IconButton>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
