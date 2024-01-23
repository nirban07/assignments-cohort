import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
  const [input, setInput] = useState(1);
  // Your solution starts here
  //   const expensiveValue = 0;
  function calFactrl(n) {
    if (n === 1) {
      return 1;
    }
    return n * calFactrl(n - 1);
  }
  let expensiveValue = useMemo(() => calFactrl(input), [input]);
  // Your solution ends here

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <p>Calculated Value: {expensiveValue}</p>
    </div>
  );
}
