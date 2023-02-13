import { OPERATORS } from "../App"

export const Operators = ({ onSetOperator = () => null, disabled = false }) => {
    return(
        <>
        {OPERATORS.map((val) => (
          <button
            disabled={disabled}
            key={val}
            onClick={() => onSetOperator(val)}
          >
            {val}
          </button>
        ))}</>
    )
}