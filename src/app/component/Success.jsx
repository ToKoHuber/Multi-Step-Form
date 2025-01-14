import Logo from "./Logo";

export default function Success() {
  return (
    <div className="w-[480px] h-[193px] flex flex-col justify-between rounded-[8px] p-8 bg-[#FFFFFF]">
      <Logo />
      <div className="flex flex-col gap-2">
        <div className="h-[31px] w-[100%] text-[#202124] font-Inter text-[26px] normal font-semibold leading-normal ">
          You're All Set 🔥
        </div>
        <div className="h-[22px] w-[100%] text-[#8E8E8E] text-center font-Inter text-[18px] normal font-normal leading-normal flex self-stretch">
          We have received your submission. Thank you!
        </div>
      </div>
    </div>
  );
}
