import { Input } from "@/app/component/Input";

export default function TextField() {
  return (
    <div className="flex flex-col gap-3">
      <Input
        type="date"
        label="Date of birth"
        placeholder="Enter your date of birth"
      />
      <div className="flex flex-col gap-3">
        <div className="text-[#334155] text-Inter text-[14px] normal font-semibold leading-[16px]">
          <p>Profile image</p>
        </div>
        <div className="w-[416px] h-[180px] border-2 bg-[#7F7F80]">
          <img
            src="https://www.stevanpopovic.com/static/89928a0c8f31bfcf8d1eb33bfdc00bd9/b7f47/pain%2Breflection%3Dprogress.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
