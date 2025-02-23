import { useEffect, useRef } from "react";

const useClickOutside = (callback: any) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (elementRef.current && !elementRef.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback]);

  return elementRef;
};

export default useClickOutside;
