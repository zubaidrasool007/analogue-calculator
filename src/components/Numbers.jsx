
const NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

export const Numbers = ({onNumberPress = () => null }) => {
    return <>
    {NUMBERS.map((number) => (
          <button key={number} onClick={() => onNumberPress(number)}>
            {number}
          </button>
        ))}
    </>
}