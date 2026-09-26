"use client";

import { createContext, useContext, useEffect, useState } from "react";

const WorkoutContext = createContext();

export function WorkoutProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const storedPlan = localStorage.getItem("fitlog-plan");
    const storedSaved = localStorage.getItem("fitlog-saved");
    const storedCompleted = localStorage.getItem("fitlog-completed");

    if (storedPlan) {
      setPlan(JSON.parse(storedPlan));
    }

    if (storedSaved) {
      setSaved(JSON.parse(storedSaved));
    }

    if (storedCompleted) {
      setCompleted(JSON.parse(storedCompleted));
    }

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("fitlog-plan", JSON.stringify(plan));
    }
  }, [plan, isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("fitlog-saved", JSON.stringify(saved));
    }
  }, [saved, isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("fitlog-completed", JSON.stringify(completed));
    }
  }, [completed, isLoaded]);

  const addToPlan = (workout) => {
    const alreadyAdded = plan.some((item) => item.id === workout.id);

    if (alreadyAdded) {
      return;
    }

    if (plan.length >= 5) {
      return;
    }

    setPlan((prevPlan) => [...prevPlan, workout]);
  };

  const removeFromPlan = (id) => {
    setPlan((prevPlan) => prevPlan.filter((item) => item.id !== id));
  };

  const markAsDone = (id) => {
    setCompleted((prevCompleted) => {
      if (prevCompleted.includes(id)) {
        return prevCompleted;
      }

      return [...prevCompleted, id];
    });
  };

  const toggleSaved = (workout) => {
    const alreadySaved = saved.some((item) => item.id === workout.id);

    if (alreadySaved) {
      setSaved((prevSaved) =>
        prevSaved.filter((item) => item.id !== workout.id),
      );
    } else {
      setSaved((prevSaved) => [...prevSaved, workout]);
    }
  };

  return (
    <WorkoutContext.Provider
      value={{
        plan,
        addToPlan,
        removeFromPlan,
        saved,
        toggleSaved,
        completed,
        markAsDone,
        isLoaded,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
}

export function useWorkout() {
  return useContext(WorkoutContext);
}
