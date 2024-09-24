import { rotateElement } from "@/app/utils/utils";

type TapeLabelProps = {
    label: string;
    cssClasses?: string;
};

export default function TapeLabel({ label, cssClasses }: TapeLabelProps) {
    return (
        <span
            className={`tape-label ${cssClasses ? cssClasses : ""}`}
            style={rotateElement(6)}
        >
            {label}
        </span>
    );
}
