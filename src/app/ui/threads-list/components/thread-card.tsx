import { ThreadProps } from "@/app/utils/types";
import Card from "@/app/ui/common/card/card";
import { getRandomRotation } from "@/app/utils/utils";
import { faBasketShopping, faBox } from "@fortawesome/free-solid-svg-icons";
import { user } from "@/app/data/user";

type ThreadTileProps = {
  thread: ThreadProps;
};

export default function ThreadCard({ thread }: ThreadTileProps) {
  const inCart = user.shoppingList.threads.includes(thread.id);
  const inStorage = user.storage.threads.includes(thread.id);
  const buttons = [
    {
      id: "btn-to-stock",
      label: "do zapasów",
      icon: faBox,
      showCheckIcon: inStorage,
    },
    {
      id: "btn-to-cart",
      label: "do koszyka",
      icon: faBasketShopping,
      showCheckIcon: inCart,
    },
  ];

  return (
    <Card
      buttons={buttons}
      title={{ title: thread.name, subtitle: thread.brand }}
    >
      <div
        className="absolute -top-2 right-4 aspect-square w-[80px] border-4 border-white shadow-md"
        style={{
          transform: getRandomRotation(12, 8),
          background: thread.rgb,
        }}
      />
      {thread.substitutes && (
        <div className="py-2 border-y border-gray-300">
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
      )}
    </Card>
  );
}
