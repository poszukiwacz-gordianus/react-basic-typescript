import { type ReactNode } from "react";

export type CourseGoalType = {
  title: string;
  description: string;
  id: number;
};

export type DeleteGoal = (id: number) => void;

export type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};

export type InfoBoxProps = HintBoxProps | WarningBoxProps;
