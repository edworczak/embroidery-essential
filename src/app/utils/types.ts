import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";

export type BudgetProps = {
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
  budget?: BudgetProps;
  threads?: { id: string; description?: string }[];
};

export type ThreadProps = {
  id: string;
  brand: string;
  name: string;
  order: number;
  rgb: string;
  substitutes: {
    anchor?: string[];
    ariadna?: string[];
    dmc?: string[];
  };
};

export type ButtonProps = {
  id: string;
  label: string;
  icon?: IconProp;
  action: {
    onClick?: () => void;
    link?: string;
  };
};

export type IconButtonProps = {
  id: string;
  label: string;
  icon: IconProp;
  showCheckIcon?: boolean;
  action: {
    onClick?: () => void;
    link?: string;
  };
};

export type InputProps = {
  id: string;
  label: string;
  type?: "text" | "date" | "password" | "checkbox";
  value?: string | number;
  placeholder?: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
