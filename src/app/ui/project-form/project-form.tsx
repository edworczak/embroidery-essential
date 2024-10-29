"use client";
import Input from "@/app/ui/common/form/components/input";
import { ProjectProps } from "@/app/utils/types";
import { useState } from "react";
import { getFormattedDate } from "@/app/utils/utils";

type ProjectFormProps = {
  dictionary: object;
  project?: ProjectProps;
};

export default function ProjectForm({ dictionary, project }: ProjectFormProps) {
  const [name, setName] = useState(project?.name);
  const [startDate, setStartDate] = useState(
    project?.startDate && getFormattedDate(project.startDate)
  );
  const [finishDate, setFinishDate] = useState(
    project?.finishDate && getFormattedDate(project.finishDate)
  );
  const [hoop, setHoop] = useState(project?.hoop);
  const [fabric, setFabric] = useState(project?.fabric);
  const [finished, setFinished] = useState(!!project?.finished);
  const [price, setPrice] = useState(project?.budget?.price);

  return (
    <form className="dynamic-grid-3-cols">
      <div className="card p-6 flex flex-col gap-4">
        <h2>ogólnie</h2>
        <Input
          id="name"
          label={dictionary.project.name}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          id="start-date"
          label={dictionary.project.startDate}
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          placeholder="DD.MM.YYYY"
        />
        <Input
          id="finished"
          label={dictionary.project.finished}
          type="checkbox"
          onChange={(e) => setFinished(e.target.checked)}
        />
        <Input
          id="finish-date"
          label={dictionary.project.finishDate}
          value={finishDate}
          onChange={(e) => setFinishDate(e.target.value)}
          placeholder="DD.MM.YYYY"
          disabled={!finished}
        />
      </div>
      <div className="card p-6 flex flex-col gap-4">
        <h2>dodatkowe informacje</h2>
        <Input
          id="hoop"
          label={dictionary.project.hoop}
          value={hoop}
          onChange={(e) => setHoop(e.target.value)}
        />
        <Input
          id="fabric"
          label={dictionary.project.fabric}
          value={fabric}
          onChange={(e) => setFabric(e.target.value)}
        />
      </div>
      <div className="card p-6 flex flex-col gap-4">
        <h2>{dictionary.project.budget}</h2>
        <Input
          id="price"
          label={dictionary.project.price}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
    </form>
  );
}
