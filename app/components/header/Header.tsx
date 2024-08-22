"use client";
// import { useState  } from 'react';
// import { Image } from "antd";
import { navBarDropdown } from "@/app/data/data";
import {
  decreaseCSSProperties,
  increaseCSSProperties,
  resetCSSProperties,
} from "@/app/utlis/fontResize";
import { Link } from "@/i18n.config";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";
import LocaleSwitcher from "../LocaleSwitcher";
import {ScreenContainer,DrawerCollapsable} from "@/app/components/shared";
import styles from "./styles.module.css";

const stripLocale = (pathname: string) => {
  const parts = pathname.split("/");
  if (parts[1] && ["en", "ar"].includes(parts[1])) {
    return "/" + parts.slice(2).join("/");
  }
  return pathname;
};

const Header = ({ navLinksData, locale }: any) => {
  const pathname = usePathname();
  const navLength = navBarDropdown?.length;
  const strippedPathname = stripLocale(pathname);
  const [isOpen, setIsOpen] = useState(false);
  const [accessibility, setAccessibility] = useState(false);
  const [searchflag, setSearchFalg] = useState(false);
  const dropdownRef = useRef(null);


  // Sticky Header Functionality

  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
      const stickyPoint = 800; // Scroll position in pixels
      if (window.scrollY >= stickyPoint) {
          setIsSticky(true);
      } else {
          setIsSticky(false);
      }
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);


  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (
        dropdownRef.current &&
        //@ts-ignore
        !dropdownRef.current?.contains(event.target)
      ) {
        setAccessibility(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside,
    );
    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside,
      );
    };
  }, [dropdownRef]);

  const [current, setCurrent] = useState<null | number>(
    null,
  );
  const [currentSubMenu, setCurrentSubMenu] = useState<
    null | number
  >(1);
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };
  const menuItem = navBarDropdown.find(
    (item) => item.id === current,
  );
  const submenuItem = menuItem?.subMenu?.find(
    (item) => item.id === currentSubMenu,
  );
  const isActive = (href: string) => {
    return strippedPathname === href;
  };
  const isAnySubLinkActive = (links: string[]) => {
    return links.some((link) => isActive(link));
  };
  const fun = () => {};
  const drawerData = [
    { id: 1, name: "Agent Login", func: fun },
    { id: 2, name: "Register Now", func: fun },
    { id: 3, name: "Book Now", func: fun },
  ];
  const { home, aboutUs } = navLinksData;
  const dirChange =
    locale === "en" ? "row" : "flex-row-reverse";
  return (
    // <section className="absolute z-[9999] w-full" id="header">
    <section className={`${isSticky ? 'fixed top-0 left-0 right-0 bg-footerBg z-[9999]' : 'absolute z-[9999] w-full'} transition-all duration-300`} id="header">
      <nav className="navGradient headerSec">
        <ScreenContainer>
          <div className="flex items-center justify-between py-[10px]  lg:px-[20px] ">
            <div>
              {/* className="h-[60px] w-full max-w-[92px]" */}
              <Link href={"/"}>
                <img
                  src="https://visitoman.s3.me-south-1.amazonaws.com/vo_nav_logo_c462f10239.svg"
                  alt="visit-oman-logo"
                  className="w-[92px] lg:hidden md:w-[80px]  sm:w-[60px]"
                />
                <img
                  src="/assets/images/drawer-nav-logo.svg"
                  alt="visit-oman-logo"
                  className="hidden w-[92px] lg:block md:w-[80px] sm:w-[60px]"
                />
              </Link>
            </div>
            <div className="flex flex-1  justify-end gap-[26px] lg:hidden">
              {/* ${dirChange} */}
              <ul
                className={`flex items-center gap-[20px]`}
              >
                { isSticky &&
                <li>
                  <button className="vo-primary-btn">
                    <span>Book Now
                      <svg 
                        version="1.1" 
                        id="Layer_1" 
                        xmlns="http://www.w3.org/2000/svg" 
                        xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" 
                        viewBox="0 0 36.1 25.8" 
                        enable-background="new 0 0 36.1 25.8" 
                        xmlSpace="preserve">
                          <g>
                            <line fill="none" stroke="#FFFFFF" stroke-width="3" stroke-miterlimit="10" x1="0" y1="12.9" x2="34" y2="12.9"></line>
                            <polyline fill="none" stroke="#FFFFFF" stroke-width="3" stroke-miterlimit="10" points="22.2,1.1 34,12.9 22.2,24.7   "></polyline>
                          </g>
                      </svg>
                    </span>
                  </button>  
                </li>
                }

<li className="flex h-[20px] items-center">
                  <div
                    className={`${styles.dropdownBtn} relative w-auto`}
                  >
                    {/* <div className=" dropdown-btn "> */}
                    <button
                      className={`flex h-[40px] items-center gap-[8px] pb-0 ${locale === "en" ? "pl-[5px] " : "pl-[5px] pr-[5px]"}  pt-0`}
                    >
                      <div>
                        <img src="/assets/images/default-avatar.svg" />
                      </div>
                      <div className="flex items-center gap-[8px]">
                        <span className="vo-navbar-links">
                          AGENT LOG IN
                        </span>
                      </div>
                    </button>
                  </div>
                </li>

                <li className="flex h-[20px] items-center">
                  <LocaleSwitcher locale={locale} />
                </li>

                <li ref={dropdownRef}>
                  <img
                    src="/assets/images/nav-accessibility.svg"
                    onClick={() =>
                      setAccessibility(!accessibility)
                    }
                  />

                  {accessibility && (
                    <Fade className="relative z-10">
                      <div
                        className={`absolute ${locale === "en" ? "right-[-21px]" : "left-0"}  top-[30px] w-[219px]  rounded-[12px] bg-white py-[16px] `}
                        style={{
                          boxShadow:
                            "0px 0px 10px 0px rgba(0, 0, 0, 0.10)",
                        }}
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        <div className="relative ">
                          <div className="mx-[16px] mb-[8px] flex  gap-[8px] p-[8px]">
                            <p className="vo-paragraph">
                              Accessibility
                            </p>
                          </div>
                          <div
                            className={`absolute ${locale === "en" ? "right-[28px]" : "left-[28px]"}  top-[-26px] h-[16px] w-[16px] `}
                          >
                            <img
                              src="/assets/icons/nav-dropdown-caret.svg"
                              width={"16px"}
                              height={"16px"}
                            />
                          </div>
                          <div
                            className="vo-paragraph mx-[16px] mb-[8px] flex  gap-[8px] p-[8px]"
                            role="none"
                          >
                            Font Size
                            <button
                              onClick={
                                increaseCSSProperties
                              }
                            >
                              A+
                            </button>
                            <button
                              onClick={
                               resetCSSProperties                              }
                            >
                              A
                            </button>
                            <button
                              onClick={
                                decreaseCSSProperties
                              }
                            >
                              A-
                            </button>
                          </div>
                          <hr className="border-[#D9D9D9]" />
                          <div className=" mt-[8px] flex flex-col gap-[8px]">
                            <div
                              className="mx-[16px] flex  gap-[8px] p-[8px]"
                              role="none"
                            >
                              <img src="/assets/icons/nav-user-register.svg" />
                              <Link
                                href="#"
                                className="vo-paragraph"
                                role="menuitem"
                              >
                                Contrast
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Fade>
                  )}
                </li>

                

                
              </ul>
            </div>
            <div
              onClick={toggleDrawer}
              className="hidden lg:block"
            >
              <img
                src="/assets/icons/menu-hamburger.svg"
                alt="menu-hamburger"
              />
            </div>
          </div>
        </ScreenContainer>

        <hr />

        <div
          className=" lg:hidden"
          onMouseLeave={() => {
            setCurrent(null);
            setAccessibility(false)
            setCurrentSubMenu(1);
          }}
        >
          <ScreenContainer>
            <div className="flex justify-between">
              <ul className="flex  gap-[18px] ">
                {navBarDropdown?.slice(0,4)?.map((value, index) => (
                  <li
                    key={index}
                    onMouseEnter={() => {
                      setCurrent(value?.id);
                      setAccessibility(false)

                      setIsOpen(false);
                    }}
                    className={`${current === value?.id ? "bg-dropdownBg" : ""} px-[10px] py-[14px]`}
                    // onMouseLeave={() => setCurrent(null)}
                  >
                    <Link href={value?.url}>
                      <div className="flex items-center gap-[10px]  ">
                        <img
                          src={value?.icon}
                          width={"24px"}
                          height={"24px"}
                          alt={value?.name}
                        />
                        <p className="vo-navbar-links ">
                          {value?.name} 
                        </p>
                        {value?.subMenu && (
                          <img
                            className={`transform transition-transform duration-300 ${current === value?.id ? "rotate-180" : ""}`}
                            //  className="nav-dropdown-icon"
                            src={
                              "/assets/icons/chevron-down.svg"
                            }
                            width={"11px"}
                            height={"6px"}
                          />
                        )}
                      </div>
                    </Link>
                  </li>
                ))}

                <li
                  onMouseEnter={() => {
                    setCurrent(5);
                    setIsOpen(false);
                    setAccessibility(false)

                  }}
                  className={`${current === 5 ? "bg-dropdownBg" : ""} px-[10px] py-[14px]`}
                  onMouseLeave={() => setCurrent(null)}
                >
                  <Link href="">
                    <div className="flex items-center gap-[10px]  ">
                      <img
                        src={
                          "/assets/icons/nav-register-secondary.svg"
                        }
                        width={"24px"}
                        height={"24px"}
                        alt={"register"}
                      />
                      <p className="vo-navbar-links ">
                        Registration
                      </p>
                      {/* {value?.subMenu && ( */}
                      <img
                        //  className="nav-dropdown-icon"
                        src={
                          "/assets/icons/chevron-down.svg"
                        }
                        width={"11px"}
                        height={"6px"}
                        className={`transform transition-transform duration-300 ${current === 5 ? "rotate-180" : ""}`}
                      />
                      {/* )} */}
                    </div>
                  </Link>
                  {current == 5 ? (
                    <div className="w-full max-w-[259px] rounded-b-[6px]   pt-[30px]">
                      {[
                        {
                          id: 1,
                          key: "trade_partners",
                          name: "Trade Partners",
                          url: "https://booking.visitoman.om/agent-registration.aspx",
                          img: "/assets/images/nav-useful-info.svg",
                          description:
                            "Boasting barren peaks, deep wadi gorges, desert dunes, remote villages, and a capital, Muscat, which exudes old Arabia, Oman",
                        },
                        {
                          id: 2,
                          key: "suppliers",
                          name: "Tourism Providers",
                          url: "/suppliers",
                          img: "/assets/images/nav-useful-info.svg",
                          description:
                            "Boasting barren peaks, deep wadi gorges, desert dunes, remote villages, and a capital, Muscat, which exudes old Arabia, Oman",
                        },
                      ].map((value, index) => (
                        <Link href={value?.url} target={ value.id===1 ? "_blank":"_self"} key={index}>
                          <div
                            onMouseEnter={() =>
                              setCurrentSubMenu(value?.id)
                            }
                            className="group relative mb-6 flex gap-2"
                          >
                            <p className="vo-navbar-inner-links hover:text-primary">
                              {value?.name}
                            </p>
                            <img
                              src="/assets/icons/arrow-right-secondary.svg"
                              alt="arrow-right-secondary"
                              width="24px"
                              height="24px"
                              className="hidden group-hover:block"
                            />
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </li>
              </ul>
              <div className="py-[14px]">
                <img
                  src="/assets/icons/nav-search-icon.svg"
                  onClick={() => setSearchFalg(!searchflag)}
                />
                {searchflag && (
                  <div className="relative">
                    <div className="absolute top-[22px]">
                      <img
                        src="/assets/icons/nav-dropdown-caret.svg"
                        width={"16px"}
                        height={"16px"}
                      />
                    </div>
                    <div className="rouned-[4px] absolute right-0 top-[32px] w-[332px] bg-white">
                      <input
                        placeholder="Search within Visit Oman"
                        className="w-full px-[30px] py-[16px] focus:!outline-none"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </ScreenContainer>
          {/* current && menuItem?.subMenu */}
          {/* current!==5 (for register dropdown is diff) */}

          {current && current!==5 && menuItem?.subMenu && (
            <div
              onMouseLeave={() => {
                setCurrent(null);
                setCurrentSubMenu(1);
              }}
              // h-[377px]
              className="relative z-[9999]  rounded-b-[6px]  bg-dropdownBg py-[40px]"
            >
              <ScreenContainer>
                <div className="flex justify-between gap-[30px]">
                  <div className="w-full max-w-[259px]">
                    {menuItem?.subMenu?.map(
                      (value, index) => (
                        <Link href={value?.url} key={index}  >
                          <div
                            onMouseEnter={() =>{

                              setCurrentSubMenu(value?.id)
                              setAccessibility(false)
                            }
                              

                            }
                            
                            onClick={()=>setCurrent(null)}
                            className="group relative mb-6 flex gap-2"
                          >
                            <p className="vo-navbar-inner-links hover:text-primary">
                              {value?.name}
                            </p>
                            <img
                              src="/assets/icons/arrow-right-secondary.svg"
                              alt="arrow-right-secondary"
                              width="24px"
                              height="24px"
                              className="hidden group-hover:block"
                            />
                          </div>
                        </Link>
                      ),
                    )}
                  </div>
                  <div className=" flex w-full max-w-[407px] flex-col gap-[30px] ">
                    <img
                      src={submenuItem?.img}
                      width={"407px"}
                      height={"160px"}
                    />
                    <div className="line-clamp-3 h-[80px]  overflow-hidden">
                      <p className="vo-navbar-inner-links">
                        {submenuItem?.description}
                      </p>
                    </div>
                    <p className="vo-navbar-inner-links underline">
                      Explore
                    </p>
                  </div>
                </div>
              </ScreenContainer>
            </div>
          )}
        </div>
        {/* drawer */}
        <div
          className={`fixed top-0 z-[9999] h-[100vh]  w-full  transform overflow-hidden overflow-y-auto   bg-white transition-all duration-500 [-ms-overflow-style:none]  [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${drawer ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="px-[30px]">
            <div
              className=" py-[15px] text-right"
              onClick={toggleDrawer}
            >
              <img
                src="/assets/icons/close-icon.svg"
                alt="close-icon"
                className="inline-block"
              />
            </div>
            <div className="flex items-center justify-between py-[15px] ">
            <Link href={"/"}>
               
                <img
                  src="/assets/images/drawer-nav-logo.svg"
                  alt="visit-oman-logo"
                  className="  h-full w-full"
                />
              </Link>
              <div className="flex items-center gap-[10px]">
              <img
                  src="/assets/icons/nav-globe.svg"
                  alt="language-globe"
                />
              <LocaleSwitcher locale={locale} />
              </div>
            </div>
            <div className="mb-[60px] mt-[30px] ">
              {navBarDropdown
                ?.filter((value) => value?.subMenu)
                .map((value, index, array) => (
                  <DrawerCollapsable
                    itemList={value}
                    title={"About Oman"}
                    key={index}
                    isLast={index === array.length - 1}
                    toggleDrawer={toggleDrawer}
                  />
                ))}
            </div>
          </div>
          {/* part 2 */}
          <div
            className={
              "bg-primaryLight  px-[30px] pb-[60px] pt-[30px]"
            }
          >
            {drawerData?.map((value, index) => (
              <div
                key={value.id}
                onClick={() => value.func()}
                className={`py-[30px] ${drawerData?.length === value?.id ? "border-0" : "border-borderGrey border-b"}`}
              >
                <p className="vo-drawer-content !text-primary uppercase">
                  {value.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </section>
  );
};
export default Header;
