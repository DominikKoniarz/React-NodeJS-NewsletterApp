import { useState } from "react";
import FormInputLabel from "./FormInputLabel";
import FormInput from "./FormInput";
import SubscribeButton from "./SubscribeButton";
import { REGISTER_URL } from "../../constants";
import { useNavigate } from "react-router-dom";

type NewNewsletterUser = {
  email: string;
  name: string;
};

type RegisterRequest = {
  message: string;
};

export type Submitted = {
  submit?: boolean;
};
type Props = {
  fetchError: string;
  setFetchError: React.Dispatch<React.SetStateAction<string>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const Form = ({ setIsLoading, fetchError, setFetchError }: Props) => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");

  const navigate = useNavigate();
  const handleSubmit = async (email: string, name: string) => {
    try {
      const data: NewNewsletterUser = { email, name };
      setFetchError("");
      setIsLoading(true);
      const response = await fetch(REGISTER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const json = (await response.json()) as RegisterRequest;

        throw new Error(`Error: ${json.message}`);
      }
      const state: Submitted = { submit: true };
      navigate("/submitted", { state });
      setFetchError("");
    } catch (err: Error | unknown) {
      if (err instanceof Error) {
        setFetchError(err.message);
        console.log(err.message);
      } else {
        console.log(err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="mt-2"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(email, name);
      }}
    >
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
      {fetchError && (
        <p className="pt-4 mx-auto text-red-500 w-fit">{fetchError}</p>
      )}
    </form>
  );
};
export default Form;
