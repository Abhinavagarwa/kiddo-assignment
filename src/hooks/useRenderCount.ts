import {
  useEffect,
  useRef,
} from "react";

export function useRenderCount(
  component: string
) {

  const count =
    useRef(0);

  useEffect(() => {

    count.current++;

    console.log(
      `${component} rendered ${count.current} times`
    );

  });
}