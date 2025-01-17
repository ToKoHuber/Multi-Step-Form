import { ChevronRight } from "lucide-react";

export default function ButtonNextBig({ buttonText, handleClick }) {
  return (
    <div className="w-[416px] h-[44px] p-[10px 12px] rounded-[6px] bg-[#121316] flex justify-center items-center cursor-pointer">
      <button
        onClick={handleClick}
        className="font-Inter font-500 text-4 leading-[24px] text-white"
      >
        {buttonText}
      </button>
    </div>
  );
}
