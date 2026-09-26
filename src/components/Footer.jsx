import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#2b2b2b] bg-[#101010]">
      <div className="container flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Image src="/assets/logo.png" alt="FitLog" width={32} height={32} />

          <span className="display-font text-xl font-bold tracking-[0.08em]">
            FITLOG
          </span>
        </div>

        <p className="text-sm text-[#888888]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
