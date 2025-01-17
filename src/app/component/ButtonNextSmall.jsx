export default function ButtonNextSmall({ buttonText, handleClick }) {
  return (
    <div
      onClick={handleClick}
      className="w-[280px] h-[44px] p-[10px 12px] rounded-[6px] bg-[#121316] flex justify-center items-center cursor-pointer"
    >
      <button className="font-Inter font-500 text-4 leading-[24px] text-white">
        {buttonText}
      </button>
    </div>
  );
}
