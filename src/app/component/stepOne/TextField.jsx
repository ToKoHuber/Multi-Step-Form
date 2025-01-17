import { Input } from "@/app/component/Input";

export default function TextField({ formValues, formErrors, handleChange }) {
  return (
    <div className="flex flex-col gap-3">
      <Input
        type="text"
        label="First Name"
        placeholder="Enter Your First Name"
        value={formValues.firstName}
        error={formErrors.firstName}
        handleChange={handleChange}
        name="firstName"
      />
      <Input
        type="text"
        label="Last Name"
        placeholder="Enter Your Last Name"
        value={formValues.lastName}
        error={formErrors.lastName}
        handleChange={handleChange}
        name="lastName"
      />
      <Input
        type="text"
        label="Username"
        placeholder="Enter Your Username"
        value={formValues.userName}
        error={formErrors.userName}
        handleChange={handleChange}
        name="userName"
      />
    </div>
  );
}
