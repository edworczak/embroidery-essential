import { InputProps } from "@/app/utils/types";

export default function Input({
  id,
  label,
  type = "text",
  value,
  placeholder,
  disabled,
  onChange,
}: InputProps) {
  const inputTypes = {
    text: "text",
    password: "password",
    checkbox: "checkbox",
  };

  switch (type) {
    case inputTypes.checkbox:
      return (
        <div className="flex gap-2">
          <input
            id={id}
            type={type}
            className="relative"
            disabled={disabled}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
          <label htmlFor={id}>{label}</label>
        </div>
      );
    default:
      return (
        <div className="relative mt-6">
          <label
            htmlFor={id}
            className="absolute -top-6 -left-2 z-10 tape-label -rotate-3"
          >
            {label}
          </label>
          <input
            id={id}
            type={type}
            className="border border-ocean py-2 px-4 rounded w-full disabled:border-gray-300"
            disabled={disabled}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </div>
      );
  }
}
