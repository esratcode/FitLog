"use client";

import { useEffect, useState } from "react";
import { useWorkout } from "@/context/WorkoutContext";
import WorkoutCard from "@/components/WorkoutCard";

export default function Home() {
  const { plan, saved } = useWorkout();

  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("duration");

  const sortedWorkouts = [...workouts].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    return 0;
  });

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch("https://api.abcz.workers.dev/api/fitlog");

        if (!response.ok) {
          throw new Error("Failed to fetch workouts");
        }

        const data = await response.json();
        setWorkouts(data);
      } catch (error) {
        console.error("Workout fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="border-b border-[#2b2b2b]">
        <div className="container grid min-h-[650px] items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#ccff00]">
              WORKOUT LIBRARY
            </p>

            <h1 className="display-font max-w-[700px] text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              TRAIN WITH INTENT.
              <br />
              LOG EVERY SET.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-[#999999] sm:text-lg">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            <a
              href="#library"
              className="mt-9 inline-flex items-center gap-3 bg-[#ccff00] px-6 py-4 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-white"
            >
              Browse Workouts
              <span className="text-lg">→</span>
            </a>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="/my-plan"
                className="rounded-full bg-[#ccff00] px-4 py-2 text-xs font-bold uppercase tracking-wide text-black transition hover:bg-white"
              >
                Plan {plan.length}
              </a>

              <a
                href="/my-plan"
                className="rounded-full border border-[#666666] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
              >
                Saved {saved.length}
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex items-center justify-center">
            <div className="absolute h-72 w-72 rounded-full bg-[#ccff00]/10 blur-3xl" />

            <img
              src="/assets/banner.png"
              alt="FitLog workout"
              className="relative w-full max-w-[560px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* Library */}
      <section id="library" className="container py-24">
        <div className="mb-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#ccff00]">
            WORKOUT COLLECTION
          </p>

          <h2 className="display-font text-4xl font-bold uppercase sm:text-5xl">
            THE LIBRARY
          </h2>

          <p className="mt-3 text-[#999999]">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Sort */}
        <div className="mb-8 flex items-center gap-3">
          <label
            htmlFor="sort"
            className="text-sm font-bold uppercase tracking-wide text-[#888888]"
          >
            Sort by
          </label>

          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-[#444444] bg-[#181818] px-4 py-3 text-sm font-semibold text-white outline-none focus:border-[#ccff00]"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex min-h-[300px] items-center justify-center">
            <div className="flex flex-col items-center gap-5">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#333333] border-t-[#ccff00]" />

              <p className="text-sm font-semibold uppercase tracking-widest text-[#888888]">
                Loading workouts...
              </p>
            </div>
          </div>
        )}

        {/* Workout Cards */}
        {!loading && sortedWorkouts.length > 0 && (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sortedWorkouts.map((workout) => (
              <WorkoutCard key={workout.id} workout={workout} />
            ))}
          </div>
        )}

        {/* Empty */}
        {!loading && sortedWorkouts.length === 0 && (
          <div className="flex min-h-[300px] items-center justify-center border border-dashed border-[#333333]">
            <p className="text-sm uppercase tracking-widest text-[#888888]">
              No workouts found.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
