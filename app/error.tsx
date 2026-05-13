"use client";

import { useEffect } from "react";
import {Button} from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">Something went wrong!</h2>
      <p className="text-zinc-400 mb-8 max-w-md">
        An unexpected error occurred. We've been notified and are looking into it.
      </p>
      <Button
        onClick={() => reset()}
        className="bg-white text-black hover:bg-zinc-200 px-8 py-3 rounded-full font-bold"
      >
        Try again
      </Button>
    </div>
  );
}
