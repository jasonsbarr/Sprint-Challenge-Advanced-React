import { useCallback } from "react";

const useFilter = (callback, data = [], filter = null) => {
  const filtered = filter
    ? data.filter(item => callback(item)(filter))
    : data;

  const returnFiltered = useCallback(
    () => (filtered.length ? filtered : null),
    [filtered],
  );

  return returnFiltered();
};

export default useFilter;
