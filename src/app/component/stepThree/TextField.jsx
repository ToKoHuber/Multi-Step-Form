import { Input } from "@/app/component/Input";
import ImageUpload from "../ImageUpload";

export default function TextField({
  formValues,
  formErrors,
  handleChange,
  onImageUpload,
  error,
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="mt-[-5px]">
        <Input
          type="date"
          label="Date of birth"
          value={formValues.birthDate}
          error={formErrors.birthDate}
          handleChange={handleChange}
          name="birthDate"
        />
      </div>
      <ImageUpload
        onImageUpload={handleImageUpload}
        error={formErrors.profileImage}
      />
    </div>
  );
}
