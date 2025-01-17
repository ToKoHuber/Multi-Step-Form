"use client";
import StepOne from "./component/StepOne";
import StepTwo from "./component/StepTwo";
import StepThree from "./component/StepThree";
import { useState } from "react";
import Success from "./component/Success";

export default function Home() {
  const [currentPage, setCurrentpage] = useState(0);
  const FormSteps = [StepOne, StepTwo, StepThree, Success][currentPage];
  const nextPage = () => {
    setCurrentpage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentpage(currentPage - 1);
  };

  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh] bg-[#F4F4F4] gap-2">
      <FormSteps nextPage={nextPage} previousPage={previousPage} />
    </div>
  );
}
