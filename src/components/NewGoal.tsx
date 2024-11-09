import { useRef, type FormEvent } from "react";
import { type NewGoalProps } from "../models/types";

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  const goalRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const enteredGoal = goalRef.current!.value;
    const enteredSummary = summaryRef.current!.value;

    if (enteredGoal === "" || enteredSummary === "") return;

    // new FormData(e.currentTarget);

    e.currentTarget.reset();

    onAddGoal(enteredGoal, enteredSummary);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input id="goal" type="text" ref={goalRef} />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" ref={summaryRef} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
