"use client";

import Dialog from "@/app/ui/common/dialog";
import { useState } from "react";
import Input from "@/app/ui/common/input";

type HeadingProps = {
  title: string;
  button?: {
    label: string;
  };
};

export default function Heading({ title, button }: HeadingProps) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className="bg-white">
        <Dialog isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          <div className="flex flex-col gap-4">
            <Input id="name" label="nazwa projektu" />
            <Input id="start-date" label="data rozpoczęcia" />
            <Input id="img" label="link do zdjęcia" />
          </div>
        </Dialog>
        <section className="flex justify-between flex-row">
          <h1>{title}</h1>
          {button && (
            <button onClick={() => setModalOpen(true)}>{button.label}</button>
          )}
        </section>
      </div>
    </>
  );
}
