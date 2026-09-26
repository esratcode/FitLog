import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container flex min-h-[70vh] items-center justify-center py-24">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ccff00]">
          404 ERROR
        </p>

        <h1 className="display-font mt-4 text-6xl font-bold uppercase sm:text-8xl">
          PAGE NOT FOUND
        </h1>

        <p className="mx-auto mt-5 max-w-md text-[#999999]">
          The workout or page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block bg-[#ccff00] px-6 py-4 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-white"
        >
          Back to Workouts
        </Link>
      </div>
    </main>
  );
}
