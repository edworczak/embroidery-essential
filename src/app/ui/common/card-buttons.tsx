type CardButtonsProps = {
    buttons: {
        id: string;
        label: string;
    }[];
};

export default function CardButtons({ buttons }: CardButtonsProps) {
    return (
        <div className="flex justify-end px-2 gap-2">
            {buttons.map((button) => {
                return (
                    <button
                        key={button.id}
                        className="rounded-b-[20px] bg-ocean text-white rounded-t-none shadow-md"
                    >
                        {button.label}
                    </button>
                );
            })}
        </div>
    );
}
