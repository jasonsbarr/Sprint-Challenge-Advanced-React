import { useCallback } from "react";

const useFilter = (callback, data = [], filter = null) => {
  const filtered = useCallback(
    data.filter(item => callback(item)(filter)),
    [filter],
  );

  const array = filtered.length ? filtered : null;

  return array;
};

export default useFilter;
