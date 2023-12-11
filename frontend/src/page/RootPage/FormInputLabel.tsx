type Props = {
  htmlFor: string;
  text: string;
};

const FormInputLabel = ({ htmlFor, text }: Props) => {
  return (
    <label htmlFor={htmlFor} className="absolute left-[-9999px]">
      {text}
    </label>
  );
};
export default FormInputLabel;
