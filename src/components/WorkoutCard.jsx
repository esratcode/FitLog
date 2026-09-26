"use client";

import Link from "next/link";
import Image from "next/image";
import { useWorkout } from "@/context/WorkoutContext";

export default function WorkoutCard({ workout }) {
  const { plan, addToPlan, saved, toggleSaved } = useWorkout();

  const isAdded = plan.some((item) => item.id === workout.id);
  const isSaved = saved.some((item) => item.id === workout.id);
  const planFull = plan.length >= 5 && !isAdded;

  const handleAddToPlan = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (isAdded || planFull) {
      return;
    }

    addToPlan(workout);
  };

  const handleSave = (event) => {
    event.preventDefault();
    event.stopPropagation();

    toggleSaved(workout);
  };

  return (
    <div className="group overflow-hidden border border-[#2b2b2b] bg-[#181818] transition hover:-translate-y-1 hover:border-[#ccff00]">
      <Link href={`/workouts/${workout.id}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-[#222222]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="eager"
            className="object-cover"
          />
        </div>
      </Link>

      <div className="p-5">
        <div className="mb-4 flex flex-wrap gap-2">
          {workout.muscleGroups?.map((muscle) => (
            <span
              key={muscle}
              className="border border-[#444444] px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-[#aaaaaa]"
            >
              {muscle}
            </span>
          ))}
        </div>

        <Link href={`/workouts/${workout.id}`}>
          <h3 className="display-font text-2xl font-bold uppercase leading-tight">
            {workout.name}
          </h3>
        </Link>

        <p className="mt-2 text-sm text-[#888888]">{workout.equipment}</p>

        <div className="mt-5 flex flex-wrap gap-4 border-t border-[#2b2b2b] pt-4 text-xs text-[#aaaaaa]">
          <span>⏱ {workout.duration} min</span>
          <span>🔥 {workout.caloriesBurned} kcal</span>
          <span>★ {workout.rating}</span>
        </div>

        <button
          onClick={handleAddToPlan}
          disabled={isAdded || planFull}
          className={`mt-5 w-full px-4 py-3 text-sm font-bold uppercase tracking-wide transition ${
            isAdded
              ? "cursor-default bg-[#333333] text-[#888888]"
              : planFull
                ? "cursor-not-allowed bg-[#222222] text-[#666666]"
                : "bg-[#ccff00] text-black hover:bg-white"
          }`}
        >
          {isAdded ? "Added to Plan" : planFull ? "Plan Full" : "Add to Plan"}
        </button>

        <button
          onClick={handleSave}
          className={`mt-2 w-full px-4 py-3 text-sm font-bold uppercase tracking-wide transition ${
            isSaved
              ? "border border-[#ccff00] text-[#ccff00]"
              : "border border-[#666666] text-white hover:border-[#ccff00] hover:text-[#ccff00]"
          }`}
        >
          {isSaved ? "Saved" : "Save Workout"}
        </button>
      </div>
    </div>
  );
}
