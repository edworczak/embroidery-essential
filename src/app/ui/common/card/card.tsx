import type { ReactNode } from "react";
import { IconButtonProps } from "@/app/utils/types";
import Link from "next/link";
import IconButton from "@/app/ui/common/icon-button/icon-button";

type CardProps = {
  title?: {
    title: string;
    subtitle?: string;
  };
  children: ReactNode;
  buttons?: IconButtonProps[];
  link?: string;
};

function Card({ title, children, buttons, link }: CardProps) {
  const getContent = () => {
    return (
      <>
        {title && (
          <div>
            <h3>{title.title}</h3>
            {title.subtitle && <span>{title.subtitle}</span>}
          </div>
        )}
        <div className="flex flex-col justify-center w-full gap-4">
          {children}
        </div>
      </>
    );
  };

  return (
    <div
      className={`card flex flex-col h-full gap-6 ${link && "hover:-top-1 hover:-left-1"}`}
    >
      {link ? (
        <Link href={link} className="flex flex-col gap-4 grow">
          {getContent()}
        </Link>
      ) : (
        <div className="flex flex-col gap-4 grow">{getContent()}</div>
      )}
      {buttons && (
        <div className="flex justify-end gap-4 mt-auto">
          {buttons.map((button) => {
            return (
              <IconButton
                key={button.id}
                id={button.id}
                label={button.label}
                icon={button.icon}
                action={button.action}
                showCheckIcon={button.showCheckIcon}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Card;
