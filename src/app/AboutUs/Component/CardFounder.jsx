import Image from "next/image";

function CardFounder({ name, des, img }) {
  return (
    <div className="w-fit ">
      <Image
        className="lg:mt-0  rounded-[24px] h-[366px]"
        src={`/Images/AboutUs/${img}`}
        width={270}
        height={366}
        alt=""
      />
      <div className="text-center mt-6">
        <h4 className="font-[600] text-[24px] leading-[36px] text-white">
          {name}
        </h4>
        <span className="font-normal text-[13px] leading-[24px] text-[#919EAB]">
          {des}
        </span>
      </div>
    </div>
  );
}

export default CardFounder;
