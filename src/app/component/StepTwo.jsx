import FormTitle from "./FormTitle";
import Logo from "./Logo";
import TextField from "./stepTwo/TextField";
import ButtonNextSmall from "./ButtonNextSmall";
import ButtonBack from "./ButtonBack";
import { useEffect, useState } from "react";

export default function StepTwo({ nextPage, previousPage }) {
  const [formValues, setFormValues] = useState({
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormErrors((prev) => ({ ...prev, [name]: "" }));

    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    // const mail = JSON.parse(localStorage.getItem("email"));
    // const phone = JSON.parse(localStorage.getItem("phone"));
    // const pass = JSON.parse(localStorage.getItem("password"));
    // const conPass = JSON.parse(localStorage.getItem("confirmPass"));

    const savedValue = JSON.parse(localStorage.getItem("secondPage"));

    setFormValues((prev) => ({ ...prev, ...savedValue }));

    // setFormValues({
    //   ...formValues,
    //   email: mail,
    //   phoneNumber: phone,
    //   password: pass,
    //   confirmPassword: conPass,
    // });
  }, []);

  const handleClick = () => {
    let errorHave = false;
    const { email, phoneNumber, password, confirmPassword } = formValues;

    let patternEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let patternNumber = /^\+?\d{8}$/;

    if (!email.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        email: "Please enter your email",
      }));
      errorHave = true;
    } else if (!patternEmail.test(email)) {
      setFormErrors((prev) => ({
        ...prev,
        email: "Please provide a valid email address.",
      }));
      errorHave = true;
    }

    if (!phoneNumber.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        phoneNumber: "Please enter your phone number",
      }));
      errorHave = true;
    } else if (!patternNumber.test(phoneNumber)) {
      setFormErrors((prev) => ({
        ...prev,
        phoneNumber: "Please enter a valid phone number.",
      }));
      errorHave = true;
    }

    if (!password.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        password: "Please enter your password",
      }));
      errorHave = true;
    } else if (password.length <= 5) {
      setFormErrors((prev) => ({
        ...prev,
        password: "Enter more than 6 passwords.",
      }));
      errorHave = true;
    }

    if (!confirmPassword.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        confirmPassword: "Please enter your Confirm password",
      }));
      errorHave = true;
    } else if (password !== confirmPassword) {
      setFormErrors((prev) => ({
        ...prev,
        confirmPassword: "Passwords do not match. Please try again.",
      }));
      errorHave = true;
    }

    // localStorage.setItem("email", JSON.stringify(formValues.email));
    // localStorage.setItem("phone", JSON.stringify(formValues.phoneNumber));
    // localStorage.setItem("password", JSON.stringify(formValues.password));
    // localStorage.setItem(
    //   "confirmPass",
    //   JSON.stringify(formValues.confirmPassword)
    // );

    if (!errorHave) {
      localStorage.setItem("secondPage", JSON.stringify(formValues));
      localStorage.setItem("currentPage", 2);
      nextPage();
    }
  };

  const backClick = () => {
    previousPage();
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
          />
        </div>
      </div>
      <div className="flex gap-1">
        <ButtonBack buttonText="Back" handleClick={backClick} />
        <ButtonNextSmall buttonText="Continue 2/3" handleClick={handleClick} />
      </div>
    </div>
  );
}
