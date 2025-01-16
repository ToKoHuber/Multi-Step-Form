export default function ButtonBack({ buttonText, previousPage }) {
  return (
    <div
      onClick={previousPage}
      className="w-[128px] h-[44px] p-[10px 12px] rounded-[6px] bg-white flex justify-center items-center cursor-pointer border-[1px] border-[#CBD5E1] border-solid"
    >
      <button className="font-Inter font-500 text-4 leading-[24px] text-[#202124]">
        {buttonText}
      </button>
    </div>
  );
}
