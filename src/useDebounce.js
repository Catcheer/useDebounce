import React, { useState } from "react";

function useDebounce(fn, delay = 1000) {
  let [timer, setTimer] = useState(null);
  return function(...args) {
    if (timer) {
      clearTimeout(timer);
      setTimer(null);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
      clearTimeout(timer);
      setTimer(null);
    }, delay);
    setTimer(timer);
  };
}
export default useDebounce;
