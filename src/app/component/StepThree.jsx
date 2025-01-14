import FormTitle from "./FormTitle";
import Logo from "./Logo";
import TextField from "./StepThree/TextField";
import Button from "./Button";

export default function StepThree() {
  return (
    <div className="w-[480px] h-[655px] flex flex-col justify-between rounded-[8px] p-8 bg-[#FFFFFF]">
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
        <Button buttonText="Continue 3/3" />
      </div>
    </div>
  );
}
