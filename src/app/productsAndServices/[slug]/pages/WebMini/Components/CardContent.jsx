import Image from "next/image";

function CardContent({ title, content, left, right }) {
  return (
    <div className="mt-6">
      {right && (
        <div className="flex flex-row-reverse lg:flex-row lg:border-r-[1px] lg:border-r-[#919EAB3D] border-l-[1px] border-l-[#919EAB3D] ">
          <div className="lg:text-right">
            <h3
              className={`font-[600] lg:text-[20px] text-[16px] leading-[30px] text-[#FF0054]`}
            >
              {title}
            </h3>
            <p className="font-[400] lg:text-[16px] text-[14px] leading-[30px] text-justify">
              {content}
            </p>
          </div>
          <Image
            className="lg:translate-x-[50%] translate-x-[-50%] translate-y-[-50%] "
            src="/Images/ProductsAndServices/star.png"
            width={0}
            height={0}
            style={{ width: "36px", height: "36px" }}
            alt=""
          />
        </div>
      )}
      {left && (
        <div className="flex border-l-[1px] border-l-[#919EAB3D] ">
          <Image
            className="translate-x-[-50%] translate-y-[-50%]"
            src="/Images/ProductsAndServices/star.png"
            width={0}
            height={0}
            style={{ width: "36px", height: "36px" }}
            alt=""
          />
          <div className="text-left">
            <h3
              className={`font-[600] lg:text-[20px] text-[16px] leading-[30px] text-[#FF0054]`}
            >
              {title}
            </h3>
            <p className="font-[400] lg:text-[16px] text-[14px] leading-[30px] text-justify">
              {content}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardContent;
