type HeadingProps = {
  title: string;
  button?: {
    label: string;
  };
};

export default function Heading({ title, button }: HeadingProps) {
  return (
    <div className="bg-white">
      <section className="flex justify-between flex-row">
        <h1>{title}</h1>
        {button && <button>{button.label}</button>}
      </section>
    </div>
  );
}
