import { useState } from "react";
import FormInputLabel from "./FormInputLabel";
import FormInput from "./FormInput";
import SubscribeButton from "./SubscribeButton";
const Form = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");

  return (
    <form className="mt-2" onSubmit={(e) => e.preventDefault()}>
      <div className="flex gap-3">
        <FormInputLabel htmlFor="name-input" text="Name" />
        <FormInput
          placeholder="Your name here"
          id="name-input"
          type="text"
          value={name}
          setState={setName}
        />
        <FormInputLabel htmlFor="email-input" text="Email" />
        <FormInput
          placeholder="Your email address here"
          id="email-input"
          type="email"
          value={email}
          setState={setEmail}
        />
        <SubscribeButton />
      </div>
    </form>
  );
};
export default Form;
