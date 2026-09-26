"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useWorkout } from "@/context/WorkoutContext";

export default function MyPlan() {
  const {
    plan,
    removeFromPlan,
    saved,
    toggleSaved,
    completed,
    markAsDone,
    isLoaded,
  } = useWorkout();

  const [activeTab, setActiveTab] = useState("plan");

  return (
    <>
      {!isLoaded ? (
        <main className="container flex min-h-[70vh] items-center justify-center">
          <div className="flex flex-col items-center gap-5">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#333333] border-t-[#ccff00]" />

            <p className="text-sm font-semibold uppercase tracking-widest text-[#888888]">
              Loading your plan...
            </p>
          </div>
        </main>
      ) : (
        <main className="container py-24">
          {/* Tabs */}
          <div className="mb-8 flex border-b border-[#2b2b2b]">
            <button
              onClick={() => setActiveTab("plan")}
              className={`px-5 py-3 text-sm font-bold uppercase tracking-wide ${
                activeTab === "plan"
                  ? "border-b-2 border-[#ccff00] text-white"
                  : "text-[#777777]"
              }`}
            >
              Today&apos;s Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`px-5 py-3 text-sm font-bold uppercase tracking-wide ${
                activeTab === "saved"
                  ? "border-b-2 border-[#ccff00] text-white"
                  : "text-[#777777]"
              }`}
            >
              Saved
            </button>
          </div>

          {/* Today's Plan */}
          {activeTab === "plan" && (
            <section>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#ccff00]">
                YOUR WORKOUT PLAN
              </p>

              <h1 className="display-font text-5xl font-bold uppercase">
                MY PLAN
              </h1>

              <p className="mt-4 text-[#999999]">
                Cap of five lifts for today. Finish them, then load more.
              </p>

              {/* Metrics */}
              <div className="mt-8 grid grid-cols-3 gap-3">
                <div className="border border-[#2b2b2b] p-4">
                  <p className="text-xs uppercase text-[#777777]">Exercises</p>

                  <p className="mt-2 text-2xl font-bold">{plan.length}</p>
                </div>

                <div className="border border-[#2b2b2b] p-4">
                  <p className="text-xs uppercase text-[#777777]">Minutes</p>

                  <p className="mt-2 text-2xl font-bold">
                    {plan.reduce(
                      (total, workout) => total + workout.duration,
                      0,
                    )}
                  </p>
                </div>

                <div className="border border-[#2b2b2b] p-4">
                  <p className="text-xs uppercase text-[#777777]">Calories</p>

                  <p className="mt-2 text-2xl font-bold">
                    {plan.reduce(
                      (total, workout) => total + workout.caloriesBurned,
                      0,
                    )}
                  </p>
                </div>
              </div>

              {/* Empty State */}
              {plan.length === 0 ? (
                <div className="mt-10 flex min-h-[250px] items-center justify-center border border-dashed border-[#333333]">
                  <div className="text-center">
                    <p className="text-sm font-bold uppercase tracking-widest text-[#888888]">
                      NOTHING HERE YET
                    </p>

                    <p className="mt-3 text-sm text-[#777777]">
                      Browse the library and add a lift to get today moving.
                    </p>

                    <Link
                      href="/"
                      className="mt-5 inline-block bg-[#ccff00] px-5 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-white"
                    >
                      Go to workouts
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {plan.map((workout) => (
                    <div
                      key={workout.id}
                      className="overflow-hidden border border-[#2b2b2b] bg-[#181818]"
                    >
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={workout.image}
                          alt={workout.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                        />
                      </div>

                      <div className="p-5">
                        <h2 className="display-font text-2xl font-bold uppercase">
                          {workout.name}
                        </h2>

                        <p className="mt-2 text-sm text-[#888888]">
                          {workout.equipment}
                        </p>

                        <div className="mt-4 flex gap-4 text-xs text-[#aaaaaa]">
                          <span>⏱ {workout.duration} min</span>
                          <span>🔥 {workout.caloriesBurned} kcal</span>
                        </div>

                        <Link
                          href={`/workouts/${workout.id}`}
                          className="mt-5 block w-full bg-[#ccff00] px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-black transition hover:bg-white"
                        >
                          View Details
                        </Link>

                        <button
                          onClick={() => {
                            markAsDone(workout.id);
                            toast.success(`${workout.name} marked as done!`);
                          }}
                          className="mt-2 w-full border border-[#666666] px-4 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
                        >
                          {completed.includes(workout.id)
                            ? "Completed"
                            : "Mark as Done"}
                        </button>

                        <button
                          onClick={() => removeFromPlan(workout.id)}
                          className="mt-5 w-full border border-[#ccff00] px-4 py-3 text-sm font-bold uppercase tracking-wide text-[#ccff00] transition hover:bg-[#ccff00] hover:text-black"
                        >
                          Remove from Plan
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}

          {/* Saved */}
          {activeTab === "saved" && (
            <section>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#ccff00]">
                YOUR SAVED WORKOUTS
              </p>

              <h1 className="display-font text-5xl font-bold uppercase">
                SAVED
              </h1>

              <p className="mt-4 text-[#999999]">
                Your saved workouts will appear here.
              </p>

              {saved.length === 0 ? (
                <div className="mt-10 flex min-h-[250px] items-center justify-center border border-dashed border-[#333333]">
                  <div className="text-center">
                    <p className="text-sm font-bold uppercase tracking-widest text-[#888888]">
                      NOTHING HERE YET
                    </p>

                    <p className="mt-3 text-sm text-[#777777]">
                      Save a workout from the library to see it here.
                    </p>

                    <Link
                      href="/"
                      className="mt-5 inline-block bg-[#ccff00] px-5 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-white"
                    >
                      Go to workouts
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {saved.map((workout) => (
                    <div
                      key={workout.id}
                      className="overflow-hidden border border-[#2b2b2b] bg-[#181818]"
                    >
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={workout.image}
                          alt={workout.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                        />
                      </div>

                      <div className="p-5">
                        <h2 className="display-font text-2xl font-bold uppercase">
                          {workout.name}
                        </h2>

                        <p className="mt-2 text-sm text-[#888888]">
                          {workout.equipment}
                        </p>

                        <div className="mt-4 flex gap-4 text-xs text-[#aaaaaa]">
                          <span>⏱ {workout.duration} min</span>
                          <span>🔥 {workout.caloriesBurned} kcal</span>
                        </div>

                        <Link
                          href={`/workouts/${workout.id}`}
                          className="mt-5 block w-full bg-[#ccff00] px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-black transition hover:bg-white"
                        >
                          View Details
                        </Link>

                        <button
                          onClick={() => {
                            toggleSaved(workout);
                            toast.info("Removed from saved");
                          }}
                          className="mt-2 w-full border border-[#666666] px-4 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
                        >
                          Remove from Saved
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}
        </main>
      )}

      <ToastContainer position="top-right" />
    </>
  );
}
