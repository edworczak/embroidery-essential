import { ButtonProps } from "@/app/utils/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type HeaderProps = {
  title: string;
  button?: ButtonProps;
  h2?: boolean;
};

export default function Header({ title, button, h2 = false }: HeaderProps) {
  return (
    <div className="bg-white">
      <section className="py-6">
        <div className="flex justify-between">
          <div>{h2 ? <h2>{title}</h2> : <h1>{title}</h1>}</div>
          {button && (
            <div>
              <button className="icon-button">
                <FontAwesomeIcon icon={button.icon} size="xs" />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
