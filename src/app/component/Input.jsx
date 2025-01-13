export const Input = ({ label, placeholder }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[#334155] text-Inter text-[14px] normal font-semibold leading-[16px] ">
        {label}
      </p>
      <input
        className="w-[416px] h-[44px] rounded-[8px] border-[1px] p-[12px]"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};
