import { useState, useEffect } from 'react';

/*
 A custom hook that prevents creating useEffect every time you need to get data from database

*/
export function useAsync(fn, dependencies = []) {
  // define states
  const [result, setResult] = useState(null);
  const [err, setError] = useState(null);
  const [render, setRender] = useState(false);

  // side effects
  useEffect(() => {
    (async () => {
      try {
        const response = await fn();
        setResult(response);
      } catch (error) {
        setError(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [render, ...dependencies]);

  const refresh = () => setRender((v) => !v);

  return [result?.data, err, refresh];
}
