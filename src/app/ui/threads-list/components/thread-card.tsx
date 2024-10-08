import { ThreadProps } from "@/app/utils/types";
import Card from "@/app/ui/common/card/card";

type ThreadTileProps = {
  thread: ThreadProps;
};

export default function ThreadCard({ thread }: ThreadTileProps) {
  const buttons = [
    { id: "btn-to-stock", label: "do zapasów" },
    { id: "btn-to-cart", label: "do koszyka" },
  ];
  return (
    <Card color={thread.rgb} buttons={buttons}>
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
    </Card>
  );
}
