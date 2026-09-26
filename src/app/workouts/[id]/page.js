import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import WorkoutActions from "@/components/WorkoutActions";

export default async function WorkoutDetails({ params }) {
  const { id } = await params;

  const response = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch workout");
  }

  const workouts = await response.json();

  const workout = workouts.find((item) => String(item.id) === String(id));

  if (!workout) {
    notFound();
  }

  return (
    <main className="container py-16">
      <Link
        href="/"
        className="mb-8 inline-block text-sm font-bold uppercase tracking-wider text-[#ccff00]"
      >
        ← Back to Workouts
      </Link>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden border border-[#2b2b2b] bg-[#181818]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Details */}
        <div>
          {/* Tags */}
          <div className="mb-5 flex flex-wrap gap-2">
            {workout.muscleGroups?.map((muscle) => (
              <span
                key={muscle}
                className="border border-[#444444] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#aaaaaa]"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="display-font text-5xl font-bold uppercase leading-none sm:text-6xl">
            {workout.name}
          </h1>

          {/* Description */}
          <p className="mt-5 text-base leading-7 text-[#999999]">
            {workout.description}
          </p>

          {/* Specs */}
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="border border-[#2b2b2b] p-4">
              <p className="text-xs uppercase text-[#777777]">Equipment</p>
              <p className="mt-2 font-bold">{workout.equipment}</p>
            </div>

            <div className="border border-[#2b2b2b] p-4">
              <p className="text-xs uppercase text-[#777777]">Difficulty</p>
              <p className="mt-2 font-bold">{workout.difficulty}</p>
            </div>

            <div className="border border-[#2b2b2b] p-4">
              <p className="text-xs uppercase text-[#777777]">Sets</p>
              <p className="mt-2 font-bold">{workout.sets}</p>
            </div>

            <div className="border border-[#2b2b2b] p-4">
              <p className="text-xs uppercase text-[#777777]">Reps</p>
              <p className="mt-2 font-bold">{workout.reps}</p>
            </div>

            <div className="border border-[#2b2b2b] p-4">
              <p className="text-xs uppercase text-[#777777]">Duration</p>
              <p className="mt-2 font-bold">{workout.duration} min</p>
            </div>

            <div className="border border-[#2b2b2b] p-4">
              <p className="text-xs uppercase text-[#777777]">Calories</p>
              <p className="mt-2 font-bold">{workout.caloriesBurned} kcal</p>
            </div>

            <div className="border border-[#2b2b2b] p-4 sm:col-span-2">
              <p className="text-xs uppercase text-[#777777]">Rating</p>
              <p className="mt-2 font-bold">★ {workout.rating}</p>
            </div>
          </div>

          {/* Buttons */}
          <WorkoutActions workout={workout} />
        </div>
      </div>

      {/* Instructions */}
      <section className="mt-20 border-t border-[#2b2b2b] pt-12">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#ccff00]">
          HOW TO PERFORM
        </p>

        <h2 className="display-font text-4xl font-bold uppercase">
          INSTRUCTIONS
        </h2>

        <ol className="mt-8 space-y-5">
          {workout.instructions?.map((instruction, index) => (
            <li
              key={index}
              className="flex gap-5 border-b border-[#2b2b2b] pb-5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#ccff00] text-sm font-bold text-black">
                {index + 1}
              </span>

              <p className="pt-1 leading-7 text-[#999999]">{instruction}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
