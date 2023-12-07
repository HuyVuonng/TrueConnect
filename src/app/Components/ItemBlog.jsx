/* eslint-disable jsx-a11y/alt-text */

import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

function ItemBlog({ imgName, title }) {
  return (
    <div className="flex gap-4 mt-3">
      <div className="w-[80px]">
        <img
          alt=""
          src={`/Images/${imgName}`}
          className="rounded-[8px] w-[80px] h-[80px]"
        />
      </div>
      <div className="w-[70%]">
        <h2 className="text-[15px] font-[600] leading-[26px]">{title}</h2>
        <span className="text-[12px] leading-[20px] font-normal opacity-[48%]">
          24 May 2019 <FontAwesomeIcon icon={faCircle} className="w-[3px]" /> 8
          mins
        </span>
      </div>
    </div>
  );
}

export default ItemBlog;
