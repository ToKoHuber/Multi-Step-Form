import FormTitle from "./FormTitle";
import Logo from "./Logo";
import TextField from "./stepTwo/TextField";
import Button from "./Button";

export default function StepTwo({ nextPage }) {
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
        <Button nextPage={nextPage} buttonText="Continue 2/3" />
      </div>
    </div>
  );
}
