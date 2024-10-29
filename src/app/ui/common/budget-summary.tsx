"use client";
import { BudgetProps } from "@/app/utils/types";
import { getCurrency } from "@/app/utils/utils";
import { useEffect, useState } from "react";

type BudgetSummaryProps = {
  budget: BudgetProps;
  dictionary: object;
};

export default function BudgetSummary({
  budget,
  dictionary,
}: BudgetSummaryProps) {
  const [profit, setProfit] = useState(0);

  useEffect(() => {
    let value = 0;
    if (budget.price) value += budget.price;
    if (budget.costs)
      budget.costs.forEach((cost) => {
        value -= cost.cost;
      });
    setProfit(value);
  }, []);

  return (
    <div className="card flex flex-col gap-2 p-4">
      <div className="mb-2">
        <h2>{dictionary.project.budget}</h2>
      </div>
      {budget.price && (
        <div className="flex justify-between">
          <span>{dictionary.project.price}</span>
          <span>{getCurrency(budget.price)}</span>
        </div>
      )}
      {budget.costs && (
        <>
          {budget.costs.map((cost) => {
            return (
              <div className="flex justify-between" key={cost.id}>
                <span>{cost.label}</span>
                <span>{"-" + getCurrency(cost.cost)}</span>
              </div>
            );
          })}
          <div className="flex justify-between border-t border-gray-300 pt-2">
            <span>{dictionary.project.profit}</span>
            <span>{getCurrency(profit)}</span>
          </div>
        </>
      )}
    </div>
  );
}
