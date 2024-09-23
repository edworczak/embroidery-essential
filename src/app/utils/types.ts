export type ProjectBudgetProps = {
    price?: string;
    costs?: [
        {
            id: "string";
            label: string;
            cost: number;
        }
    ]
}

export type ProjectProps = {
    id: string;
    name: string;
    startDate?: Date | "string";
    finished?: boolean;
    finishDate?: Date | "string";
    img?: string;
    time?: string;
    hoop?: string;
    budget?: ProjectBudgetProps;
    threads?: [{id: string; description: string;}]
}