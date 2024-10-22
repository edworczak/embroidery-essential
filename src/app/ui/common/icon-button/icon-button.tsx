import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { IconButtonProps } from "@/app/utils/types";

export default function IconButton({
  label,
  action,
  icon,
  className,
}: IconButtonProps) {
  if (action?.link) {
    return (
      <Link
        className={`icon-button ${className}`}
        href={action.link}
        title={label}
      >
        <FontAwesomeIcon icon={icon} />
      </Link>
    );
  } else {
    return (
      <button
        className={`icon-button ${className}`}
        onClick={action?.onClick}
        title={label}
      >
        <FontAwesomeIcon icon={icon} />
      </button>
    );
  }
}
