import { ButtonProps } from "@/app/utils/types";
import Link from "next/link";

type CardButtonsProps = {
  buttons: ButtonProps[];
};

export default function CardButtons({ buttons }: CardButtonsProps) {
  return (
    <div className="flex justify-center gap-2 mt-auto">
      {buttons.map((button) => {
        if (button.action?.link) {
          return (
            <Link href={button.action.link} className="button" key={button.id}>
              {button.label}
            </Link>
          );
        } else {
          return (
            <button key={button.id} onClick={button.action?.onClick}>
              {button.label}
            </button>
          );
        }
      })}
    </div>
  );
}
