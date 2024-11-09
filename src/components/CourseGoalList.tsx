import CourseGoal from "./CourseGoal";
import { type CourseGoalType as CGT, type DeleteGoal } from "../models/types";
import InfoBox from "./InfoBox";
import { type ReactNode } from "react";

export default function CourseGoalList({
  goals,
  onDelete,
}: {
  goals: CGT[];
  onDelete: DeleteGoal;
}) {
  if (goals.length === 0)
    return (
      <InfoBox mode="hint">
        You have no course hoals yet. Start adding some!
      </InfoBox>
    );

  let warningBox: ReactNode;

  if (goals.length >= 4)
    warningBox = (
      <InfoBox mode="warning" severity="high">
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title} id={goal.id} onDelete={onDelete}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
