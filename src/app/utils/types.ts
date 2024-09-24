export type ProjectBudgetProps = {
    price?: number;
    costs?: {
        id: string;
        label: string;
        cost: number;
    }[];
};

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
    threads?: { id: string; description: string }[];
};

export type ThreadProps = {
    id: string;
    brand: string;
    name: string;
    order: number;
    rgb: string;
    substitute?: {
        anchor?: string[];
        ariadna?: string[];
        dmc?: string[];
    };
    anchor: string[];
    ariadna: string[];
};
