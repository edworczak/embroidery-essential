import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { IconButtonProps } from "@/app/utils/types";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function IconButton({
  label,
  icon,
  showCheckIcon,
  action,
  className,
}: IconButtonProps) {
  const getCheckIcon = () => {
    return (
      <FontAwesomeIcon
        className="absolute p-1 -top-1 -right-1 w-[20px] h-[20px] bg-ocean rounded z-10"
        icon={faCheck}
      />
    );
  };

  if (action?.link) {
    return (
      <Link
        className={`icon-button relative ${className ? className : ""} ${showCheckIcon ? "bg-ocean-200" : ""}`}
        href={action.link}
        title={label}
      >
        {showCheckIcon && getCheckIcon()}
        <FontAwesomeIcon icon={icon} />
      </Link>
    );
  } else {
    return (
      <button
        className={`icon-button relative ${className ? className : ""} ${showCheckIcon ? "bg-ocean-200" : ""}`}
        onClick={action?.onClick}
        title={label}
      >
        {showCheckIcon && getCheckIcon()}
        <FontAwesomeIcon icon={icon} />
      </button>
    );
  }
}
