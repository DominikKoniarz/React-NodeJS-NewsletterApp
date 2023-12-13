type Props = {
  email: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
};

const UnsignInput = ({ email, setState }: Props) => {
  return (
    <input
      required
      className="w-auto p-2 my-auto text-base border border-none rounded-lg h-fit"
      placeholder="Email to delete"
      id="UnsignInput"
      type="email"
      value={email}
      onChange={(e) => setState(e.target.value)}
    />
  );
};
export default UnsignInput;
