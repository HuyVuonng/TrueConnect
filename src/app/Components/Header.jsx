/* eslint-disable react/jsx-no-undef */
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header>
      <nav className="lg:flex items-center hidden">
        <div className="logo mr-8">
          <Image src="/Images/Logo.png" alt="" width="231" height="60" />
        </div>
        <ul className="flex justify-around flex-1">
          <li className="text-[#FF0054]">
            <Link href={"/"}>Trang chủ</Link>
          </li>
          <li>
            <Link href={"/"}>Về chúng tôi</Link>
          </li>
          <li>
            <Link href={"/"}>Sản phẩm và dịch vụ</Link>
          </li>
          <li>
            <Link href={"/"}>Tin tức</Link>
          </li>
          <li>
            <Link href={"/"}>Trải nghiệm</Link>
          </li>
          <li>
            <Link href={"/"}>Liên hệ</Link>
          </li>
        </ul>
      </nav>

      <nav className="flex lg:hidden justify-between mb-5">
        <div className="logo mr-8">
          <Image src="/Images/Logo.png" alt="" width="114" height="31" />
        </div>
        <div className="flex w-[80px] justify-around">
          <FontAwesomeIcon className="w-[25px] h-[25px]" icon={faBars} />
          <FontAwesomeIcon className="w-[25px] h-[25px]" icon={faSearch} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
