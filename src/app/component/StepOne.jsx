import FormTitle from "./stepOne/FormTitle";
import Logo from "./Logo";
import TextField from "./stepOne/TextField";

export default function StepOne() {
  return (
    <div>
      <div className="flex flex-col gap-2 w-[480px] h-[655px] bg-yellow-500 p-8 ">
        <Logo />
        <FormTitle />
        <TextField />
        Hello
      </div>
      <div></div>
    </div>
  );
}
