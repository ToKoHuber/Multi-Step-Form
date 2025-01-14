"use client";
import StepOne from "./component/StepOne";
import StepTwo from "./component/StepTwo";
import StepThree from "./component/StepThree";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh] bg-[#F4F4F4]">
      <StepOne />
      <StepTwo />
      <StepThree />
    </div>
  );
}
