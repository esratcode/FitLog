"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useWorkout } from "@/context/WorkoutContext";

export default function Navbar() {
  const pathname = usePathname();

  const isWorkoutActive = pathname === "/" || pathname.startsWith("/workouts");

  const isPlanActive = pathname === "/my-plan";

  const { plan, saved } = useWorkout();

  return (
    <header className="border-b border-[#2b2b2b] bg-[#101010]">
      <div className="container flex min-h-[76px] items-center justify-between gap-6">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src="/assets/logo.png"
            alt="FitLog"
            width={38}
            height={38}
            priority
          />

          <span className="display-font text-2xl font-bold tracking-[0.08em]">
            FITLOG
          </span>
        </Link>

        <nav className="hidden items-center gap-2 sm:flex">
          <Link
            href="/"
            className={`px-4 py-2 text-sm font-semibold uppercase tracking-wide transition ${
              isWorkoutActive
                ? "bg-[#ccff00] text-black"
                : "text-[#999999] hover:text-white"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`px-4 py-2 text-sm font-semibold uppercase tracking-wide transition ${
              isPlanActive
                ? "bg-[#ccff00] text-black"
                : "text-[#999999] hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/my-plan"
            className="rounded-full bg-[#ccff00] px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-black"
          >
            Plan <span>{plan.length}</span>
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full border border-[#666666] px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white"
          >
            Saved <span>{saved.length}</span>
          </Link>
        </div>
      </div>

      <nav className="flex border-t border-[#2b2b2b] sm:hidden">
        <Link
          href="/"
          className={`flex-1 py-3 text-center text-xs font-bold uppercase tracking-wide ${
            isWorkoutActive ? "bg-[#ccff00] text-black" : "text-[#999999]"
          }`}
        >
          Workout
        </Link>

        <Link
          href="/my-plan"
          className={`flex-1 py-3 text-center text-xs font-bold uppercase tracking-wide ${
            isPlanActive ? "bg-[#ccff00] text-black" : "text-[#999999]"
          }`}
        >
          My Plan
        </Link>
      </nav>
    </header>
  );
}
