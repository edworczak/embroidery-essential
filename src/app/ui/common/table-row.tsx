type TableRowProps = {
  label: string;
  value: string;
};

export default function TableRow({ label, value }: TableRowProps) {
  return (
    <div className="flex justify-between">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
