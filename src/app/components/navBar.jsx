"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import styles from "./navBar.module.css";

const NavBar = () => {
  const [isPhoneNavOpen, setIsPhoneNavOpen] = useState(false);

  const currPath = usePathname();
  const router = useRouter();

  const navLinkClick = (destination) => {
    if (isPhoneNavOpen) setIsPhoneNavOpen(false);

    if (currPath !== "/") {
      router.push("/");
      sessionStorage.setItem("scrollTarget", destination);
    } else {
      window.scrollTo({
        top: document.getElementById(destination).offsetTop - 64,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className={styles.container}>
        {currPath === "/" ? (
          <div
            className={styles.logoLink}
            onClick={() => {
              navLinkClick("homeCarousel");
            }}
          >
            <Image
              src="/portfolioAssets/logo.svg"
              alt="Ellie's Portfolio logo"
              width={75}
              height={50}
            />
          </div>
        ) : (
          <a className={styles.logoLink} href="/">
            <Image
              src="/portfolioAssets/logo.svg"
              alt="Ellie's Portfolio logo"
              width={75}
              height={50}
            />
          </a>
        )}

        <div className={styles.navLinkContainer}>
          <div
            className={styles.phoneNav}
            onClick={() => {
              setIsPhoneNavOpen(!isPhoneNavOpen);
            }}
          >
            {isPhoneNavOpen ? (
              <X size={30} color="#000000" />
            ) : (
              <Menu size={30} color="#000000" />
            )}
          </div>
          <div
            className={
              isPhoneNavOpen ? styles.phoneNavLinkGroup : styles.navLinkGroup
            }
          >
            <div
              onClick={() => {
                navLinkClick("work");
              }}
              className={isPhoneNavOpen ? styles.phoneNavLink : styles.navLink}
            >
              WORK
            </div>
            <div
              onClick={() => {
                navLinkClick("about");
              }}
              className={isPhoneNavOpen ? styles.phoneNavLink : styles.navLink}
            >
              ABOUT
            </div>
            <div
              onClick={() => {
                navLinkClick("contact");
              }}
              className={isPhoneNavOpen ? styles.phoneNavLink : styles.navLink}
            >
              CONTACT
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavBar;
