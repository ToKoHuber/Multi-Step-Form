import FormTitle from "./stepOne/FormTitle";
import Logo from "./Logo";
import TextField from "./stepOne/TextField";
import Button from "./Button";

export default function StepOne() {
  return (
    <div className="w-[480px] h-[655px] flex flex-col justify-between p-8 bg-[#FFFFFF]">
      <div className="flex flex-col gap-[28px]">
        <div>
          <Logo />
          <FormTitle />
        </div>
        <div className="flex flex-col gap-2">
          <TextField />
        </div>
      </div>
      <div>
        <Button buttonText="Continue 1/3" />
      </div>
    </div>
  );
}
