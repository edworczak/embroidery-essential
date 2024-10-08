import { ButtonProps } from '@/app/utils/types';

type CardButtonsProps = {
    buttons: ButtonProps[];
};

export default function CardButtons({ buttons }: CardButtonsProps) {
    return (
        <div className="flex justify-end px-2 gap-2">
            {buttons.map((button) => {
                return (
                    <button
                        key={button.id}
                        className="rounded-b-[20px] bg-ocean text-white rounded-t-none shadow-md"
                        onClick={button.onClick}
                    >
                        {button.label}
                    </button>
                );
            })}
        </div>
    );
}
