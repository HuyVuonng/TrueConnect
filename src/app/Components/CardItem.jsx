import Image from "next/image";

/* eslint-disable @next/next/no-img-element */
function CardItem({ srcImg, title, content }) {
  return (
    <div className="lg:w-[351px] lg:h-[362px] rounded-[20px] shadow-[0px_10px_20px_0px_#005FB726] p-[15px]">
      <Image className="m-auto " src={srcImg} width="232" height="232" alt="" />
      <h5 className="text-[#0DC5AE] leading-[25.6px] font-[600]">{title}</h5>
      <span className="text-[#212B36] leading-[25px] font-normal">
        {content}
      </span>
    </div>
  );
}

export default CardItem;
