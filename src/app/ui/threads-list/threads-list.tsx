import ThreadCard from "@/app/ui/threads-list/components/thread-card";
import { threads } from '@/app/data/threads';

export default function ThreadsList() {
    return (
        <div className="dynamic-grid-3-cols">
            {threads.map((thread) => {
                return <ThreadCard key={thread.id} thread={thread} />;
            })}
        </div>
    );
}
