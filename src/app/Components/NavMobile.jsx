import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import styled from "styled-components";

function NavMobile({ menu }) {
  const refClose = useRef();
  const allpathname = usePathname();
  const listPathname = allpathname.split("/");
  const pathname = `/${listPathname[1]}`;
  const handleClose = () => {
    refClose.current?.classList.add("w-0");
    refClose.current?.classList.remove("w-fit");
    refClose.current?.classList.add("p-0");
    refClose.current?.classList.remove("p-6");
  };
  useEffect(() => {
    const body = document.querySelector("body");
    body?.addEventListener("click", handleClose);
  }, []);
  return (
    <div
      ref={refClose}
      className="w-0 fixed z-20 transition-all top-0  p-0 right-0 rounded-bl-[4rem] overflow-hidden nav-mobile bg-gradient-to-b from-[#e2f1ff] from-0  to-[#ffffff] to-100% shadow-[#e0e0e2_0px_7px_29px_0px]"
    >
      <div onClick={handleClose}>
        <FontAwesomeIcon
          icon={faXmark}
          className="text-black p-[20px] text-[2.6rem]"
        />
      </div>
      <nav className="pt-[10%]">
        <ul className="flex justify-around w-full items-center text-[24px] flex-col flex-nowrap font-medium text-black [&>li]:block [&>li]:w-full [&>li]:text-center [&>li]:p-[10px]">
          {menu?.map((item) => (
            <MenuItem
              className="[&+li]:py-7 cursor-pointer hover:opacity-70 "
              key={item.path}
              $activeTab={item.path === pathname ? "true" : "false"}
            >
              <Link href={item.path}>{item.name}</Link>
            </MenuItem>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default NavMobile;
const MenuItem = styled.li`
  color: ${(prop) => (prop.$activeTab === "true" ? "#FF0054" : "black")};
`;
