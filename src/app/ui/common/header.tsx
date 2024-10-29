import { IconButtonProps } from "@/app/utils/types";
import IconButton from "@/app/ui/common/icon-button/icon-button";

type HeaderProps = {
  title: string;
  button?: IconButtonProps;
  h2?: boolean;
};

export default function Header({ title, button, h2 = false }: HeaderProps) {
  return (
    <div className="bg-white/[0.9]">
      <section className="py-6">
        <div className="flex justify-between">
          <div>{h2 ? <h2>{title}</h2> : <h1>{title}</h1>}</div>
          {button && (
            <div className="flex">
              <IconButton
                id={button.id}
                label={button.label}
                icon={button.icon}
                action={button.action}
              />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
