import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="relative">
        <h1 className="text-[8rem] font-bold leading-none tracking-tighter text-zinc-100 sm:text-[12rem] dark:text-zinc-900">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <div>
            <p className="mb-2 text-lg font-semibold">Page not found</p>
            <p className="mb-8 text-sm text-zinc-500 dark:text-zinc-400">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <Link
              href="/"
              className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Go home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
