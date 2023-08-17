import { useRef } from "react";

export const Component = () => {
  const ref = useRef<string>();
  const immutableRef = useRef<string>(null);

  ref.current = "Hello";

  return null;
};
