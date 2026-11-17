import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg text-text flex flex-col items-center justify-center p-6 text-center">
      <span className="text-[12px] uppercase tracking-[0.2em] text-accent font-medium mb-3">
        Page Not Found
      </span>
      <h1 className="font-serif text-4xl sm:text-5xl text-text font-normal mb-4">
        This room does not exist.
      </h1>
      <p className="text-[16px] text-text/75 max-w-md mb-8">
        The clinic page you are looking for may have been moved or updated. Let us take you back to the main studio.
      </p>
      <Link
        href="/"
        className="px-7 py-3 rounded-pill bg-primary text-[#F7F2EA] text-[14px] font-medium hover:bg-[#16382E] transition-colors"
      >
        Return to Anvaya Studio
      </Link>
    </div>
  );
}
