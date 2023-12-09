/* eslint-disable react/jsx-no-undef */
"use client";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import NavMobile from "./NavMobile";

function Header() {
  const handelShowNav = () => {
    const nav = document.querySelector(".nav-mobile");
    nav?.classList.add("w-fit");
    nav?.classList.remove("w-0");
    nav?.classList.add("p-6");
    nav?.classList.remove("p-0");
  };
  const allpathname = usePathname();
  const listPathname = allpathname.split("/");
  const pathname = `/${listPathname[1]}`;
  const menu = [
    {
      name: "Trang chủ",
      path: "/",
    },
    {
      name: "Về chúng tôi",
      path: "/AboutUs",
    },
    {
      name: "Sản phẩm và dịch vụ",
      path: "/productsAndServices",
    },
    {
      name: "Tin tức",
      path: "/News",
    },
    {
      name: "Trải nghiệm",
      path: "/Experient",
    },
    {
      name: "Liên hệ",
      path: "/Contact",
    },
  ];
  return (
    <header>
      <nav className="lg:flex items-center hidden">
        <div className="logo mr-8">
          <Image src="/Images/Logo.png" alt="" width="231" height="60" />
        </div>
        <ul className="flex justify-around flex-1">
          {menu?.map((item) => (
            <MenuItem
              key={item.path}
              $activeTab={item.path === pathname ? "true" : "false"}
            >
              <Link href={item.path}>{item.name}</Link>
            </MenuItem>
          ))}
        </ul>
      </nav>

      <nav className="flex lg:hidden justify-between mb-5">
        <div className="logo mr-8">
          <Image src="/Images/Logo.png" alt="" width="114" height="31" />
        </div>
        <div className="flex w-[80px] justify-around">
          <FontAwesomeIcon
            className="w-[25px] h-[25px]"
            icon={faBars}
            onClick={handelShowNav}
          />
          <FontAwesomeIcon className="w-[25px] h-[25px]" icon={faSearch} />
        </div>
      </nav>
      <NavMobile menu={menu} />
    </header>
  );
}

export default Header;
const MenuItem = styled.li`
  color: ${(prop) => (prop.$activeTab === "true" ? "#FF0054" : "black")};
`;
