import { useState, useEffect } from "react";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export default function useFetch(url, msDelay = 500) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      try {
        await delay(msDelay);
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Failed to load ${url}`);
        const json = await res.json();
        if (!cancelled) setData(json);
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => (cancelled = true);
  }, [url, msDelay]);

  return { data, loading, error };
}
