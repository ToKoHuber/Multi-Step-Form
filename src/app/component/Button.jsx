export default function ({ buttonText }) {
  return (
    <div className="w-[416px] h-[44px] p-[10px 12px] rounded-[6px] bg-[#121316] flex justify-center items-center">
      <p className="font-Inter font-500 text-4 leading-[24px] text-white">
        {buttonText}
      </p>
    </div>
  );
}
