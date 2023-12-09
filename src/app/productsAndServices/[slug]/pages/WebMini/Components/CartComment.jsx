import Image from "next/image";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});
function CartComment() {
  return (
    <div className="w-full bg-[#10375C] p-5 pb-10">
      <Image
        src="/Images/ProductsAndServices/imageVideo.png"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        alt=""
      />
      <div className="mt-6 flex">
        <Image
          className="rounded-[50%] mr-5"
          src="/Images/ProductsAndServices/avatar.png"
          width={56}
          height={56}
          alt=""
        />
        <div className={lato.className}>
          <span className="font-bold text-[18px] leading-[28px] block text-white">
            Phạm Thanh Bình
          </span>
          <span className="font-normal text-[16px] leading-[26px] block text-white">
            UI Designer at Google
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartComment;
