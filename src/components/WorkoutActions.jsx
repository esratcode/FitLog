"use client";

import { useWorkout } from "@/context/WorkoutContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function WorkoutActions({ workout }) {
  const { plan, addToPlan, saved, toggleSaved } = useWorkout();

  const isAdded = plan.some((item) => item.id === workout.id);
  const isSaved = saved.some((item) => item.id === workout.id);

  const handleAddToPlan = () => {
    if (isAdded) {
      toast.info("Already added to today's plan");
      return;
    }

    addToPlan(workout);
    toast.success("Added to today's plan");
  };

  const handleSave = () => {
    toggleSaved(workout);

    if (isSaved) {
      toast.info("Removed from saved");
    } else {
      toast.success("Saved for later");
    }
  };

  return (
    <>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          onClick={handleAddToPlan}
          className="bg-[#ccff00] px-6 py-4 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-white"
        >
          {isAdded ? "Added to Today's Plan" : "Add to Today's Plan"}
        </button>

        <button
          onClick={handleSave}
          className="border border-[#666666] px-6 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
        >
          {isSaved ? "Saved" : "Save for Later"}
        </button>
      </div>

      <ToastContainer position="top-right" />
    </>
  );
}
