import FormTitle from "./FormTitle";
import Logo from "./Logo";
import TextField from "./StepThree/TextField";
import ButtonNextSmall from "./ButtonNextSmall";
import ButtonBack from "./ButtonBack";
import { useEffect, useState } from "react";

export default function StepThree({ nextPage, previousPage }) {
  const [formValues, setFormValues] = useState({
    birthDate: "",
    profileImage: "",
  });
  const [formErrors, setFormErrors] = useState({
    birthDate: "",
    profileImage: "",
  });
  // const [profileURL, setProfileURL] = useState();

  const handleChange = (event) => {
    console.log(event);
    const { name, value } = event.target;
    setFormErrors((prev) => ({ ...prev, [name]: "" }));

    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (image) => {
    setFormErrors((prev) => ({ ...prev, profileImage: "" }));
    setFormValues((prev) => ({ ...prev, profileImage: image }));
  };

  useEffect(() => {
    // const birth = JSON.parse(localStorage.getItem("dateOfBirth"));
    const savedValue = JSON.parse(localStorage.getItem("thirdPage"));

    setFormValues((prev) => ({ ...prev, ...savedValue }));
    // setFormValues({ ...formValues, birthDate: birth });
  }, []);

  const handleClick = () => {
    let errorHave = false;
    const { birthDate, profileImage } = formValues;

    if (!birthDate.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        birthDate: "Please select a date.",
      }));
      errorHave = true;
    } else {
      const dates = birthDate.split("-");

      const birth = Number(dates[0]);
      const birthMonth = Number(dates[1]);
      const day = Number(dates[2]);

      const age = new Date().getFullYear() - birth;
      const month = new Date().getMonth() + 1 - birthMonth;
      const date = new Date().getDate() - day;

      if (
        age < 18 ||
        (age === 18 && (month < 0 || (month === 0 && date < 0)))
      ) {
        setFormErrors((prev) => ({
          ...prev,
          birthDate: "Must be over 18 years old.",
        }));
        errorHave = true;
      }
    }
    // }
    // }

    if (!profileImage) {
      setFormErrors((prev) => ({
        ...prev,
        profileImage: "Image cannot be blank",
      }));
      errorHave = true;
    }

    // localStorage.setItem("dateOfBirth", JSON.stringify(formValues.birthDate));

    if (!errorHave) {
      localStorage.setItem("thirdPage", JSON.stringify(formValues));
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
            onImageUpload={handleImageUpload}
            error={formErrors.profileImage}
          />
        </div>
      </div>
      <div className="flex gap-1">
        <ButtonBack buttonText="Back" backClick={backClick} />
        <ButtonNextSmall buttonText="Continue 3/3" handleClick={handleClick} />
      </div>
    </div>
  );
}
