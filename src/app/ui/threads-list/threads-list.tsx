import ThreadCard from "@/app/ui/threads-list/components/thread-card";
import { ThreadProps } from "@/app/utils/types";

type ThreadsListProps = {
    threads: ThreadProps[];
};

export default function ThreadsList({ threads }: ThreadsListProps) {
    return (
        <div className="dynamic-grid-3-cols">
            {threads.map((thread) => {
                return <ThreadCard key={thread.id} thread={thread} />;
            })}
        </div>
    );
}
