import { Input } from "@/app/component/Input";

export default function TextField({ formValues, formErrors, handleChange }) {
  return (
    <div className="flex flex-col gap-3">
      <Input
        label="Email"
        placeholder="Your email"
        type="email"
        value={formValues.email}
        error={formErrors.email}
        handleChange={handleChange}
        name="email"
      />
      <Input
        label="Phone number"
        placeholder="Your phone number"
        type="text"
        value={formValues.phoneNumber}
        error={formErrors.phoneNumber}
        handleChange={handleChange}
        name="phoneNumber"
      />
      <Input
        label="Password"
        placeholder="Your password"
        type="password"
        value={formValues.password}
        error={formErrors.password}
        handleChange={handleChange}
        name="password"
      />
      <Input
        label="Confirm password"
        placeholder="Confirm password"
        type="password"
        value={formValues.confirmPassword}
        error={formErrors.confirmPassword}
        handleChange={handleChange}
        name="confirmPassword"
      />
    </div>
  );
}
