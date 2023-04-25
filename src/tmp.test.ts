import { renderHook, act } from "@testing-library/react";
import { addFunc, useCounter } from "./tmp";

test("tmp test", () => {
  const ans = addFunc(1, 3);
  expect(ans).toBe(4);
});

test("hook test", () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});
