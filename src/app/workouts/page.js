import Link from "next/link";
import { workouts } from "./data";

export default function Workouts() {
  return (
    <div>
      <h1>All Workouts</h1>

      {workouts.map((workout) => (
        <div key={workout.id}>
          <h2>{workout.title}</h2>
          <p>{workout.description}</p>
          <p>Duration: {workout.duration}</p>
          <p>Category: {workout.category}</p>

          <Link href={`/workouts/${workout.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}
