import { Input } from "@/app/component/Input";

export default function TextField() {
  return (
    <div className="flex flex-col gap-3">
      <Input type="email" label="Email" placeholder="Enter Your Email" />
      <Input
        type="tel"
        label="Phone number"
        placeholder="Enter Your Phone number"
      />
      <Input
        type="password"
        label="Password"
        placeholder="Enter Your Password"
      />
      <Input
        type="password"
        label="Confirm password"
        placeholder="Enter Your Password Again"
      />
    </div>
  );
}
