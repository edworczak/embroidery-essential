export type ProjectProps = {
    id: string;
    name: string;
    startDate?: Date;
    finished?: boolean;
    finishDate?: Date;
    img?: string;
    workSessions?: {
        id: string;
        startDate: Date;
        endDate: Date;
        description?: string;
    }[];
    hoop?: string;
    fabric?: string;
    budget?: {
        price?: number;
        costs?: {
            id: string;
            label: string;
            cost: number;
        }[];
    };
    threads?: { id: string; description: string }[];
};

export type ThreadProps = {
    id: string;
    brand: string;
    name: string;
    order: number;
    rgb: string;
    substitutes?: {
        anchor?: string[];
        ariadna?: string[];
        dmc?: string[];
    };
    anchor: string[];
    ariadna: string[];
};
