import { log } from "console";
import Image from "next/image";

function CartContent({ img, title, content, list }) {
  return (
    <div className="lg:w-full lg:h-full mt-6 rounded-md bg-white p-6 overflow-auto">
      <h4 className="text-[#FF0054] text-center text-[20px] font-[600] leading-[30px]">
        {title}
      </h4>
      {content && (
        <p className=" text-[14px] font-[400] leading-[25px]">{content}</p>
      )}

      {img && (
        <Image
          className="float-right"
          src={`/Images/AboutUS/${img}`}
          width={122}
          height={122}
          alt=""
        />
      )}
      {list && (
        <ul className="list-disc">
          {list?.map((item, index) => {
            return (
              <li className="text-[#0DC5AE]" key={index}>
                <span className=" text-[14px] font-bold leading-[30px]">
                  {item.lable}
                </span>
                <span className="text-black text-[14px] font-normal leading-[25px]">
                  {item.content}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default CartContent;
