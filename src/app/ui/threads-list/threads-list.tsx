import ThreadCard from "@/app/ui/threads-list/components/thread-card";
import { threads } from "@/app/data/threads";

type ThreadsListProps = {
  threadsArray?: string[];
};

export default function ThreadsList({ threadsArray }: ThreadsListProps) {
  const getList = () => {
    if (threadsArray) {
      return threadsArray.map((threadId) => {
        const thread = threads.filter((thread) => thread.id === threadId)[0];
        return <ThreadCard thread={thread} key={thread.id} />;
      });
    } else {
      return threads.map((thread) => {
        return <ThreadCard key={thread.id} thread={thread} />;
      });
    }
  };

  return <div className="dynamic-grid-3-cols">{getList()}</div>;
}
