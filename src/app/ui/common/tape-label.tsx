import { getRandomRotation } from '@/app/utils/utils';

type TapeLabelProps = {
    label: string;
    cssClasses?: string;
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
};

export default function TapeLabel({ label, cssClasses, top, bottom, left, right }: TapeLabelProps) {
    return (
        <span
            className={`tape-label ${cssClasses ? cssClasses : ""}`}
            style={{
                transform: getRandomRotation(6),
                top: top,
                bottom: bottom,
                left: left,
                right: right,
            }}
        >
            {label}
        </span>
    );
}
