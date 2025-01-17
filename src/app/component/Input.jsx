export const Input = ({
  label,
  placeholder,
  type,
  handleChange,
  error,
  name,
  value,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[#334155] text-Inter text-[14px] normal font-semibold leading-[16px] ">
        {label} <span className="text-[#E14942]">*</span>
      </p>
      <input
        value={value}
        type={type}
        placeholder={placeholder}
        className='w-[416px] h-[44px] rounded-[8px] border-[1px] p-[12px] focus:outline-none focus:border-[#0CA5E9] ${
            error ? "border-[#E14942]" : "border-[#CBD5E1]"
          }'
        name={name}
        onChange={handleChange}
      />
      <p className="text-red-500">{error}</p>
    </div>
  );
};
