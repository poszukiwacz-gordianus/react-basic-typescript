import CourseGoal from "./CourseGoal";
import { type CourseGoalType as CGT, type DeleteGoal } from "../models/types";

export default function CourseGoalList({
  goals,
  onDelete,
}: {
  goals: CGT[];
  onDelete: DeleteGoal;
}) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title} id={goal.id} onDelete={onDelete}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
