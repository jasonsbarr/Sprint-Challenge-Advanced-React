import { useCallback } from "react";

const useFilter = (callback, data = [], filter = null) => {
  const filtered = useCallback(data.filter(item => callback(item)), [
    filter,
  ]);

  const array = filtered.length ? filtered : null;
  const setFilter = value => (filter = value);

  return [array, setFilter];
};

export default useFilter;
