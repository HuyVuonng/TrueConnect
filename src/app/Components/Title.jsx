import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
function Title({ value, noUnderline }) {
  return (
    <div className={lora.className}>
      <div className="lg:inline-block flex items-center flex-col">
        <h1 className="font-[700] text-[#0DC5AE] lg:text-[32px] text-[24px] leading-[51.2px]">
          {value}
        </h1>
        {!noUnderline && (
          <div className="w-[48%] border-[#FF0054] border-[2px]"></div>
        )}
      </div>
    </div>
  );
}

export default Title;
