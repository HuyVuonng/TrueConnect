import Image from "next/image";
import { Barlow } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
function Servicecard({ title, price, des }) {
  return (
    <div className="w-[362px] bg-white p-10 rounded-2xl mt-3">
      <div className={barlow.className}>
        <div className="flex justify-between">
          <h4 className="font-bold lg:text-[24px] text-[20px] leading-[36px] text-[#0DC5AE]">
            {title}
          </h4>
          <Image
            src="/Images/ProductsAndServices/ic_plan3.png"
            width={64}
            height={64}
            alt=""
          />
        </div>
        <h3 className="font-bold lg:text-[36px] text-[24px] leading-[54px] inline-block">
          {price}
        </h3>
        <span className="font-[600] lg:text-[20px] text-[18px] leading-[30px] text-[#919EAB]">
          /năm
        </span>
      </div>
      <div>
        <div>
          {des?.map((item) => {
            return (
              <div key={item.id} className="mt-6">
                <FontAwesomeIcon icon={faCheck} className="text-[#FA541C]" />
                <span className="font-[400] text-[14px] leading-[26px] text-[#212B36] ml-3">
                  {item.service}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <button className="font-[600] text-[15px] leading-[26px] w-full bg-[#FF0054] rounded-lg text-white p-2 mt-9">
        Nâng cấp
      </button>
    </div>
  );
}

export default Servicecard;
