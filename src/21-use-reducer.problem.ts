import { useReducer } from "react";

interface State {
  count: number;
}

interface SubtractAction {
  type: "subtract";
  subtract: number;
}

interface AddAction {
  type: "add";
  add: number;
}

type ReduceAction =
  | {
      type: "add";
      add: number;
    }
  | {
      type: "subtract";
      subtract: number;
    };

const reducer = (state: State, action: AddAction | SubtractAction) => {
  switch (action.type) {
    case "add":
      return { count: state.count + action.add };
    case "subtract":
      return { count: state.count - action.subtract };
    default:
      throw new Error();
  }
};

const [state, dispatch] = useReducer(reducer, { count: 0 });

dispatch({ type: "add", add: 1 });

// @ts-expect-error - type is uppercase but must be lowercase
dispatch({ type: "SUBTRACT", subtract: 1 });

dispatch({ type: "subtract", subtract: 1 });

console.log(state.count);
