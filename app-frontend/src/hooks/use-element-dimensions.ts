import { useCallback, useRef, useState } from "react";
import useEventListener from "./use-event-listener.ts";

function useElementDimensions<T extends HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [dimensions, setDimensions] = useState<DOMRect | null>(null);

  const refresh = useCallback(() => {
    const domRect = ref.current?.getBoundingClientRect();

    if (domRect) {
      setDimensions(domRect);
    }
  }, []);

  useEventListener("resize", refresh);

  return { dimensions, ref, refresh };
}

export default useElementDimensions;