import { useState } from "react";
import "./App.css";
import { Actions } from "./components/Actions";
import { Numbers } from "./components/Numbers";
import { Operators } from "./components/Operators";

export const OPERATORS = ["+", "-", "*", "/"];

function App() {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [operator, setOperatorValue] = useState("");

  const calculation = firstValue + operator + secondValue;

  const isNotExecutable =
    !firstValue.length || !operator.length || !secondValue.length;

  const handleInput = (val) => {
    if (OPERATORS.includes(val)) {
      setOperatorValue(val);
    } else {
      if (operator.length) {
        const value = secondValue + val;
        setSecondValue(value);
      } else {
        const value = firstValue + val;
        setFirstValue(value);
      }
    }
  };

  const solve = () => {
    let result = 0;
    switch (operator) {
      case "+":
        result = Number(firstValue) + Number(secondValue);
        break;
      case "-":
        result = Number(firstValue) - Number(secondValue);
        break;
      case "*":
        result = Number(firstValue) * Number(secondValue);
        break;
      case "/":
        result = Number(firstValue) / Number(secondValue);
        break;

      default:
        break;
    }
    setFirstValue(result.toString());
    setOperatorValue("");
    setSecondValue("");
  };

  const clearResult = () => {
    setFirstValue("");
    setSecondValue("");
    setOperatorValue("");
  };

  return (
    <>
      <input disabled value={calculation} />
      <div className="calculator">
        <Numbers onNumberPress={handleInput} />
        <Operators disabled={!firstValue} onSetOperator={handleInput} />
        <Actions
          allowCalculations={!isNotExecutable}
          allowClear={!!firstValue}
          onCalculateResult={solve}
          onClearCalculation={clearResult}
        />
      </div>
    </>
  );
}

export default App;
