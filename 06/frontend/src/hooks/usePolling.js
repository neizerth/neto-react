import { useCallback, useEffect, useState } from "react";

export function usePolling({ url, pollInterval }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadNewsToState = useCallback(() => {
    setLoading(true);

    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        setData(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  const step = useCallback(() => {
    setTimeout(() => {
      loadNewsToState();
      step();
    }, pollInterval);
  }, [pollInterval, loadNewsToState]);

  useEffect(() => {
    loadNewsToState();
    step();
  }, [loadNewsToState, step]);

  return {
    loading,
    data,
  };
}
