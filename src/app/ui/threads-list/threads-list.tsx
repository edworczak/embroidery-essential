"use client";
import ThreadCard from "@/app/ui/threads-list/components/thread-card";
import { threads } from "@/app/data/threads";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

type ThreadsListProps = {
  threadsArray?: string[];
};

export default function ThreadsList({ threadsArray }: ThreadsListProps) {
  const [search, setSearch] = useState("");
  const getThreadsDetails = () => {
    if (threadsArray) {
      return threadsArray.map((threadId) => {
        return threads.filter((thread) => thread.id === threadId)[0];
      });
    } else {
      return threads;
    }
  };
  const threadsList = getThreadsDetails();

  return (
    <div className="flex flex-col gap-4">
      {!threadsArray && (
        <div className="card">
          <div className="relative">
            <label
              htmlFor="search"
              className="absolute left-3 top-1/4"
              aria-label="search"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </label>
            <input
              className="rounded py-2 border border-ocean"
              type="text"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      )}
      <div className="dynamic-grid-3-cols">
        {threadsList.map((thread) => {
          return (
            (!search || thread.name.includes(search)) && (
              <ThreadCard key={thread.id} thread={thread} />
            )
          );
        })}
      </div>
    </div>
  );
}
