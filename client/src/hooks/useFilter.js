import { useState, useCallback } from "react";

const useFilter = (callback, data = [], filter = null) => {
  const [state, setState] = useState(filter);

  const filtered = state
    ? data.filter(item => callback(item)(state))
    : data;

  const returnFiltered = useCallback(
    () => (filtered.length ? filtered : null),
    [filtered],
  );

  const setFilter = value => setState(value);

  return [returnFiltered(), setFilter];
};

export default useFilter;
