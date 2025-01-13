import { Input } from "@/app/component/Input";

export default function TextField() {
  return (
    <div className="flex flex-col gap-3">
      <Input label="First Name" placeholder="Enter Your First Name" />
      <Input label="Last Name" placeholder="Enter Your Last Name" />
      <Input label="Username" placeholder="Enter Your Username" />
    </div>
  );
}
