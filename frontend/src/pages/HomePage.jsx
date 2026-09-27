import { useEffect, useState } from "react";
import ErrorState from "../components/ErrorState.jsx";
import LoadingState from "../components/LoadingState.jsx";

export default function HomePage() {
  const [health, setHealth] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function loadHealth() {
      setIsLoading(true);
      setError(false);

      try {
        const response = await fetch("/api/v1/health", { signal: controller.signal });
        if (!response.ok) {
          throw new Error("Health request failed");
        }

        setHealth(await response.json());
      } catch (requestError) {
        if (requestError.name !== "AbortError") {
          setError(true);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    void loadHealth();
    return () => controller.abort();
  }, [retryCount]);

  return (
    <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_20rem] md:items-start">
      <section className="max-w-2xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#a34d31]">
          National Institute of Technology Raipur
        </p>
        <h1 className="max-w-xl text-4xl font-semibold leading-tight text-[#173c35] sm:text-5xl">
          Campus intelligence, built one step at a time.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-[#63736d]">
          The NITRR Digital Twin foundation is ready for incremental development. This starter
          screen checks the API and reports database connectivity without assuming campus data or
          sensors.
        </p>
      </section>

      <section
        aria-labelledby="system-status-title"
        className="border border-[#d9e1dc] bg-white p-6 shadow-[0_12px_32px_rgba(23,60,53,0.06)]"
      >
        <div className="mb-5 flex items-center justify-between gap-3">
          <h2 id="system-status-title" className="text-base font-semibold text-[#173c35]">
            System status
          </h2>
          <span className="size-2 rounded-full bg-[#d26b42]" aria-hidden="true" />
        </div>

        {isLoading && <LoadingState label="Checking the API..." />}
        {!isLoading && error && (
          <ErrorState
            message="The API could not be reached. Check that the backend is running."
            onRetry={() => setRetryCount((count) => count + 1)}
          />
        )}
        {!isLoading && !error && health && (
          <dl className="space-y-4">
            <div className="flex items-center justify-between gap-4 border-b border-[#e8ede9] pb-3">
              <dt className="text-sm text-[#63736d]">API server</dt>
              <dd className="text-sm font-semibold capitalize text-[#164e45]">{health.server}</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-sm text-[#63736d]">MongoDB</dt>
              <dd
                className={`text-sm font-semibold capitalize ${
                  health.database.status === "connected" ? "text-[#164e45]" : "text-[#9d422b]"
                }`}
              >
                {health.database.status}
              </dd>
            </div>
          </dl>
        )}
      </section>
    </div>
  );
}