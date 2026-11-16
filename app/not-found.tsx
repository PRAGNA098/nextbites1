import Link from "next/link";

export default function NotFound() {
  return (
    <div className="p-12 text-center space-y-4">
      <h2 className="text-2xl font-bold">Not Found</h2>
      <p className="text-gray-500">We couldn't find the recipe you're looking for.</p>
      <Link href="/" className="inline-block mt-4 text-blue-600 hover:underline">
        Return to Home
      </Link>
    </div>
  );
}