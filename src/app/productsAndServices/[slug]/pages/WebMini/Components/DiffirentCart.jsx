import { faCircleCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Josefin_Sans } from "next/font/google";
import Image from "next/image";

const JosefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
function DiffirentCart({ title, other, TrueConnect }) {
  return (
    <div className={JosefinSans.className}>
      <div className="grid grid-cols-[2fr_0.5fr_0.5fr] gap-2 mt-8">
        <span className="font-[400] lg:text-[24px] text-[14px] leading-[24px]">
          {title}
        </span>
        {other === "no" ? (
          <FontAwesomeIcon
            icon={faXmark}
            className="lg:w-[36px] lg:h-[36px] w-[20px] h-[20px] text-[#FF0054] col-start-2 col-end-3 m-auto"
          />
        ) : (
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="lg:w-[36px] lg:h-[36px] w-[20px] h-[20px] text-[#0DC5AE] col-start-2 col-end-3 m-auto"
          />
        )}

        {TrueConnect === "no" ? (
          <FontAwesomeIcon
            icon={faXmark}
            className="lg:w-[36px] lg:h-[36px] w-[20px] h-[20px] text-[#FF0054] col-start-3 col-end-4 m-auto"
          />
        ) : (
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="lg:w-[36px] lg:h-[36px] w-[20px] h-[20px] text-[#0DC5AE] col-start-3 col-end-4 m-auto"
          />
        )}
      </div>
    </div>
  );
}

export default DiffirentCart;
