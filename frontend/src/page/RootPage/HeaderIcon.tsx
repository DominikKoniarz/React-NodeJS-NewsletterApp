import { FaEnvelope } from "react-icons/fa6";

const HeaderIcon = () => {
  return (
    <div className="absolute -top-[42px] p-4  text-5xl text-red-500 -translate-x-1/2 bg-white border rounded-full left-1/2 h-fit w-fit">
      <FaEnvelope />
    </div>
  );
};

export default HeaderIcon;
