import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70svh] max-w-2xl flex-col items-start justify-center gap-6 px-4 text-white sm:px-6 lg:px-8">
      <p className="text-xs uppercase tracking-[0.35em] text-white/45">404</p>
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        The page is off the grid.
      </h1>
      <p className="max-w-xl text-white/65">
        The route you requested does not exist. Use the navigation to return to
        the portfolio experience.
      </p>
      <Link
        href="/"
        className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black"
      >
        Return home
      </Link>
    </main>
  );
}
