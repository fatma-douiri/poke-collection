import { ErrorBoundary } from "react-error-boundary";
import { LoadingSpinner } from "./LoadingSpinner";
import { Suspense } from "react";

type TAsyncBoundaryProps = {
  children: React.ReactNode;
};

function ErrorFallback() {
  return (
    <div className="flex justify-center items-center p-8 text-oktee-text">
      Something went wrong
    </div>
  );
}

export function AsyncBoundary({ children }: TAsyncBoundaryProps) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense
        fallback={
          <div className="flex justify-center p-8">
            <LoadingSpinner />
          </div>
        }
      >
        {children}
      </Suspense>
    </ErrorBoundary>
  );
}
