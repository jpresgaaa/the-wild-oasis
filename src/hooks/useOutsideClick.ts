import { useEffect, useRef } from "react";

export function useOutsideClick(handler: () => void, listenCapturing: boolean) {
  const ref = useRef<any>(null);

  useEffect(
    function () {
      function handleClick(e: MouseEvent) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }

      document.addEventListener("click", handleClick, listenCapturing);

      return function () {
        document.removeEventListener("click", handleClick);
      };
    },
    [handler, listenCapturing],
  );

  return ref;
}
