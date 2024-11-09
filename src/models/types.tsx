export type CourseGoalType = {
  title: string;
  description: string;
  id: number;
};

export type DeleteGoal = (id: number) => void;

export type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};
