import FormTitle from "./FormTitle";
import Logo from "./Logo";
import TextField from "./stepOne/TextField";
import ButtonNextBig from "./ButtonNextBig";
import { useEffect, useState } from "react";

export default function StepOne({ nextPage }) {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormErrors((prev) => ({ ...prev, [name]: "" }));

    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    // const firstName = localStorage.getItem("firstName");
    // const lastName = localStorage.getItem("lastName");
    // const userName = localStorage.getItem("userName");
    // // const firstPage = JSON.parse(localStorage.getItem("firstPage"));
    // setFormValues({
    //   ...formValues,
    //   firstName: firstName,
    //   lastName: lastName,
    //   userName: userName,
    // });
  }, []);

  const handleClick = () => {
    let errorHave = false;
    const { firstName, lastName, userName } = formValues;

    if (!firstName.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        firstName: "Please enter your first name",
      }));
      errorHave = true;
    }

    if (!lastName.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        lastName: "Please enter your last name",
      }));
      errorHave = true;
    }

    if (!userName.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        userName: "Please enter your username",
      }));
      errorHave = true;
    }

    // localStorage.setItem("firstName", JSON.stringify(formValues.firstName));
    // localStorage.setItem("lastName", JSON.stringify(formValues.lastName));
    // localStorage.setItem("userName", JSON.stringify(formValues.userName));

    // localStorage.setItem("firstPage", JSON.stringify(formValues));
    if (!errorHave) {
      nextPage();
    }
  };
  return (
    <div className="w-[480px] h-[655px] flex flex-col justify-between rounded-[8px] p-8 bg-[#FFFFFF]">
      <div className="flex flex-col gap-[28px]">
        <div>
          <Logo />
          <FormTitle />
        </div>
        <div className="flex flex-col gap-2">
          <TextField
            formValues={formValues}
            formErrors={formErrors}
            handleChange={handleChange}
            name="firstName"
          />
        </div>
      </div>
      <div>
        <ButtonNextBig buttonText="Continue 1/3" handleClick={handleClick} />
      </div>
    </div>
  );
}
