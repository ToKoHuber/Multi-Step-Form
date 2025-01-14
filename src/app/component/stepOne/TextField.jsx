import { Input } from "@/app/component/Input";

export default function TextField() {
  return (
    <div className="flex flex-col gap-3">
      <Input
        type="text"
        label="First Name"
        placeholder="Enter Your First Name"
      />
      <Input type="text" label="Last Name" placeholder="Enter Your Last Name" />
      <Input type="text" label="Username" placeholder="Enter Your Username" />
    </div>
  );
}
