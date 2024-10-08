type InputProps = {
  id: string;
  label: string;
};

export default function Input({ id, label }: InputProps) {
  return (
    <div className="relative flex flex-col items-start">
      <label
        htmlFor={id}
        className="absolute top-[8px] focus:top-[-20px] transition-all"
      >
        {label}
      </label>
      <input id={id} className="relative" />
    </div>
  );
}
