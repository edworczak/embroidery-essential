import { threads } from "@/app/data/threads";
import { getRandomRotation } from "@/app/utils/utils";

type ThreadSwatchProps = {
  threadId: string;
};

export default function ThreadSwatch({ threadId }: ThreadSwatchProps) {
  const thread = threads.filter((thread) => {
    return thread.id === threadId;
  })[0];

  return (
    <div
      className="h-6 w-6 border-2 border-white shadow relative after:content"
      style={{
        background: thread.rgb,
        order: thread.order,
        transform: getRandomRotation(),
      }}
    ></div>
  );
}
