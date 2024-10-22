import { ButtonProps } from "@/app/utils/types";
import Link from "next/link";

type CardButtonsProps = {
  buttons: ButtonProps[];
};

export default function CardButtons({ buttons }: CardButtonsProps) {
  return (
    <div className="flex justify-end p-2 gap-2">
      {buttons.map((button) => {
        if (button.link) {
          return (
            <Link href={button.link} className="button" key={button.id}>
              {button.label}
            </Link>
          );
        } else {
          return (
            <button key={button.id} onClick={button.onClick}>
              {button.label}
            </button>
          );
        }
      })}
    </div>
  );
}
