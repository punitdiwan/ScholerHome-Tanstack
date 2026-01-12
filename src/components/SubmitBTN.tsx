import { HiArrowRight } from "react-icons/hi";

type SubmitButtonProps = {
  label?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

const SubmitButton = ({
  label = "Submit",
  onClick,
  type = "submit",
}: SubmitButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="
        group
        cursor-pointer
        relative
        flex items-center gap-2
        text-sm font-light text-white
        px-6 py-3
        bg-primary
        overflow-hidden

        after:content-['']
        after:absolute after:left-1/2 after:bottom-0
        after:h-0.75 after:w-0 after:bg-yellow-400
        after:transition-all after:duration-300
        hover:after:left-0 hover:after:w-full
      "
    >
      {/* Button Text */}
      <span>{label}</span>

      {/* Forward Icon */}
      <HiArrowRight
        className="
          text-base
          transition-transform duration-300
          group-hover:translate-x-1
        "
      />
    </button>
  );
};

export default SubmitButton;
