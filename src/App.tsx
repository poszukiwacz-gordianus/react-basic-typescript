import { useState } from "react";
import Header from "./components/Header";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

import goalsImg from "./assets/goals.jpg";
import { type CourseGoalType } from "./models/types";

export default function App() {
  const [goals, setGoals] = useState<CourseGoalType[]>([]);

  const handleAddGoal = (title: string, description: string) => {
    const newGoal: CourseGoalType = {
      id: Math.random(),
      title,
      description,
    };

    setGoals((prev) => [...prev, newGoal]);
  };

  const handleDeleteGoal = (id: number) => {
    setGoals((prev) => prev.filter((goal) => goal.id !== id));
  };

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDelete={handleDeleteGoal} />
    </main>
  );
}
