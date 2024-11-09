import { type PropsWithChildren } from "react";
import { type DeleteGoal } from "../models/types";

// interface CourseGoalProps {
//   title: string;
//   description: string;
//   children?: ReactNode;
// }
type CourseGoalProps = PropsWithChildren<{
  title: string;
  id: number;
  onDelete: DeleteGoal;
}>;

export default function CourseGoal({
  title,
  id,
  children,
  onDelete,
}: CourseGoalProps): JSX.Element {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}
