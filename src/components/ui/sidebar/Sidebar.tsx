"use client";

import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { useUIStore } from "@/store";
import clsx from "clsx";

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeSideMenu = useUIStore((state) => state.closeSideMenu);

  return (
    <div>
      {/* Background black */}
      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
      )}
      {/* Blur */}
      {isSideMenuOpen && (
        <div
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
          onClick={closeSideMenu}
        />
      )}
      {/* Sidemenu */}
      <nav
        className={clsx(
          "fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
          {
            "translate-x-full": !isSideMenuOpen,
          }
        )}
      >
        <IoCloseOutline
          size={50}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={closeSideMenu}
        />

        {/* Input */}
        <div className="relative mt-14">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500 transition-colors duration-300 ease-in-out"
          />
        </div>

        {/* Menu */}
        <SidebarMenuItem Icon={IoPersonOutline} href="/" title="Profile" />

        <SidebarMenuItem Icon={IoTicketOutline} href="/" title="Orders" />

        <SidebarMenuItem Icon={IoLogInOutline} href="/" title="Login" />

        <SidebarMenuItem Icon={IoLogOutOutline} href="/" title="Logout" />

        {/* Line seoarator */}
        <div className="w-full h-px bg-gray-200 my-10" />

        <SidebarMenuItem Icon={IoShirtOutline} href="/" title="Products" />

        <SidebarMenuItem Icon={IoTicketOutline} href="/" title="Orders" />

        <SidebarMenuItem Icon={IoPeopleOutline} href="/" title="Users" />
      </nav>
    </div>
  );
};
