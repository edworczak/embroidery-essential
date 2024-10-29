import { getRandomRotation } from "@/app/utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type TapeLabelProps = {
  label?: string;
  cssClasses?: string;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  icon?: IconProp;
};

export default function TapeLabel({
  label,
  cssClasses,
  top,
  bottom,
  left,
  right,
  icon,
}: TapeLabelProps) {
  return (
    <div
      className={`tape-label ${cssClasses ? cssClasses : ""}`}
      style={{
        transform: getRandomRotation(6),
        top: top,
        bottom: bottom,
        left: left,
        right: right,
      }}
    >
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          className="text-base inline-block w-[20px] h-[20px] text-ocean-200"
        />
      )}
      {label && <span>{label}</span>}
    </div>
  );
}
