import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  return (
    <form className="mt-2" onSubmit={(e) => e.preventDefault()}>
      <div className="flex gap-3">
        <label htmlFor="name-input" className="absolute left-[-9999px]">
          Name
        </label>
        <input
          className="w-auto p-2 my-auto text-base border border-none rounded-lg h-fit"
          placeholder="Your name here"
          id="name-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email-input" className="absolute left-[-9999px]">
          Email
        </label>
        <input
          className="w-auto p-2 my-auto text-base border border-none rounded-lg h-fit"
          placeholder="Your email address here"
          id="email-input"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="uppercase w-auto px-6 font-bold tracking-wider py-2 my-auto text-base text-white bg-[#538FFF] border border-none rounded-lg h-fit "
          type="submit"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
};
export default Form;
