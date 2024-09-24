import { ThreadProps } from "@/app/utils/types";
import { getRandomRotation } from "@/app/utils/utils";
import CardButtons from "@/app/ui/common/card-buttons";

type ThreadTileProps = {
    thread: ThreadProps;
};

export default function ThreadCard({ thread }: ThreadTileProps) {
    const colorSwatchStyles = {
        transform: getRandomRotation(12, 8),
        background: thread.rgb,
    };

    return (
        <div className="flex flex-col">
            <div className="bg-white gap-4 flex p-2">
                <div>
                    <div
                        className="aspect-square relative w-[80px] border-4 border-white shadow-md"
                        style={colorSwatchStyles}
                    />
                </div>
                <div className="flex flex-col justify-between py-2 grow pr-6">
                    <div className="mb-6">
                        <span>{thread.brand}</span>
                        <h3 className="inline-block ml-4"> {thread.name}</h3>
                    </div>
                    <div>
                        {thread.substitutes.anchor && (
                            <div className="flex justify-between">
                                <span>Anchor</span>
                                <span>{thread.substitutes.anchor[0]}</span>
                            </div>
                        )}
                        {thread.substitutes.ariadna && (
                            <div className="flex justify-between">
                                <span>Ariadna</span>
                                <span>{thread.substitutes.ariadna[0]}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <CardButtons
                buttons={[
                    { id: "btn-to-stock", label: "do zapasów" },
                    { id: "btn-to-cart", label: "do koszyka" },
                ]}
            />
        </div>
    );
}
