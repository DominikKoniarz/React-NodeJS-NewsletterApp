type Props = {
	placeholder: string;
	id: string;
	type: "text" | "email";
	value: string;
	setState: React.Dispatch<React.SetStateAction<string>>;
};

const FormInput = ({ placeholder, id, type, value, setState }: Props) => {
	return (
		<input
			required
			className="w-full p-2 my-auto text-base border border-none rounded-lg h-fit"
			placeholder={placeholder}
			id={id}
			type={type}
			value={value}
			onChange={(e) => setState(e.target.value)}
		/>
	);
};
export default FormInput;
