import Link from "next/link";


export default function NotFound() {
  return (
    <div className="min-h-screen  font-sans flex flex-col">
   

      {/* 404 Content */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          {/* Big 404 */}
          <p
            className="text-[120px] font-bold leading-none text-black select-none"
            style={{ fontFamily: "Georgia, serif" }}
          >
            404
          </p>

          {/* Red divider */}
          <div className="w-12 h-1 bg-red-500 mx-auto -mt-4 mb-6" />

          <p className="text-xs font-semibold tracking-widest text-red-500 uppercase mb-3">
            Page Not Found
          </p>

          <h1
            className="text-2xl md:text-3xl font-bold mb-4 leading-snug"
            style={{ fontFamily: "Georgia, serif" }}
          >
            This story doesn't exist — yet.
          </h1>

          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            The page you were looking for has either been moved, deleted, or
            never existed. Even our best reporters couldn't track it down.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors"
            >
              Back to Home
            </Link>
            <Link
              href="/about"
              className="border border-gray-300 hover:border-gray-400 text-gray-700 text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors"
            >
              About Us
            </Link>
          </div>

          {/* Decorative quote */}
          <p
            className="mt-12 text-xs text-gray-300 italic"
            style={{ fontFamily: "Georgia, serif" }}
          >
            "Journalism Without Fear or Favour" — The Dragon News
          </p>
        </div>
      </main>
    </div>
  );
}