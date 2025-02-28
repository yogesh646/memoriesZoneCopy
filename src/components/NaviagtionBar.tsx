"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import { JSX, useEffect } from "react";
import { BsRocketTakeoff } from "react-icons/bs";
import { LuMessageCircleMore } from "react-icons/lu";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { IoPricetagsSharp } from "react-icons/io5";
import { TfiBag } from "react-icons/tfi";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { IoMdContacts } from "react-icons/io";
// import styles from "../../../styles/common_table.module.css";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { MdMenu } from "react-icons/md";
export const AcmeLogo = () => {
  return (
    <svg fill="none" height="46" viewBox="0 0 28 28" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="maroon"
        fillRule="evenodd"
      />
    </svg>
  );
};
interface HeaderProps {
  textcolor: string;
}
interface MenuItem {
  id: string;
  title: string;
  icon: JSX.Element;
  href: string;
}
export default function NavigationBar({ textcolor }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeItem, setActiveItem] = useState("quickstart");
  const menuItems: MenuItem[] = [
    {
      id: "quickstart",
      title: "SAVE/SHARE QR CODE",
      icon: <BsRocketTakeoff size={25} />,
      href: "/",
    },
    {
      id: "calendar",
      title: "LANGUAGE",
      icon: <IoCalendarNumberOutline size={25} />,
      href: "/",
    },
    {
      id: "clients",
      title: "SIGN UP / LOG IN",
      icon: <IoMdContacts size={25} />,
      href: "/client",
    },
    {
      id: "Sales",
      title: "HOME",
      icon: <IoPricetagsSharp size={25} />,
      href: "/",
    },
    {
      id: " askwithai",
      title: "PRICING",
      icon: <LuMessageCircleMore size={25} />,
      href: "/",
    },
    {
      id: "reports",
      title: "FAQ",
      icon: <HiArrowTrendingUp size={25} />,
      href: "/",
    },
    {
      id: "Products",
      title: "ABOUT US",
      icon: <TfiBag size={25} />,
      href: "/product",
    },
  
  ];
  useEffect(() => {
    setHasMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth <= 768) {
        setIsOpen(false);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
   // handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!hasMounted) return null;

  const toggleSidebar = () => {
    if (typeof window !== "undefined") {
      setIsOpen(!isOpen);
    }
  };

  // const filteredMenuItems = menuItems.filter((item) =>
  //   item.title.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  return (
    <div className="relative bg-white">
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden absolute ml-75  z-50 rounded-md bg-white text-indigo-600 focus:ring-gray-600"
        aria-label="Toggle Menu"
      >
        {isOpen ?  <FiX className="w-6 h-6" /> :<MdMenu name="auto-awesome" className="text-indigo-500 text-2xl" /> }
      </button>
      {/* Sidebar */}
      <div
          className={`fixed top-0 right-0 h-full bg-white shadow-xl transition-all duration-300 ease-in-out z-40 ${
            isOpen ? "w-64" : "w-0"
          } ${isMobile ? "lg:w-64" : ""}`}
        >
          <div className={`h-full overflow-y-auto ${!isOpen && "hidden"}`}>
            {/* <div className="p-4 border-b bg-indigo-600">
              <div className="relative bg-indigo-600 ml-[25%]">
                <AcmeLogo />
              </div>
            </div> */}

            <nav className="p-4 mt-18">
              {menuItems.map((item) => (
                <div key={item.id} className="mb-2">
                  <button
                    onClick={() => {
                      setActiveItem(item.id);
                    }}
                    className={`w-full flex items-center justify-between p-2 rounded-md transition-colors duration-200 ${
                      activeItem === item.id
                        ? "bg-blue-500 text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Link color="foreground" href={item.href}>
                        {/* {item.icon} */}
                        <span className="ml-4">{item.title}</span>
                      </Link>
                    </div>
                  </button>
                </div>
              ))}
            </nav>
          </div>
        </div>

      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
          aria-label="Close menu"
        />
      )}
    </div>
  );
}
