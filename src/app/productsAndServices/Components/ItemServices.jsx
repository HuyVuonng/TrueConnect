import Image from "next/image";
import { Raleway } from "next/font/google";
import Link from "next/link";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

function ItemServices({ img, title, des, href }) {
  return (
    <Link href={`/productsAndServices/${href}`} className="flex gap-6">
      <Image
        src={`/Images/ProductsAndServices/${img}`}
        width={79}
        height={83}
        alt=""
      />
      <div>
        <div className={raleway.className}>
          <h2 className="font-[800] text-[16px] leading-[26px] text-[#0E1F51]">
            {title}
          </h2>
        </div>
        <p className="font-[400] text-[14px] leading-[25px] text-[#637381]">
          {des}
        </p>
      </div>
    </Link>
  );
}

export default ItemServices;
