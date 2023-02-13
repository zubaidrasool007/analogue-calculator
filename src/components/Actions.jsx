export const Actions = ({ allowCalculations , allowClear, onCalculateResult = () => null, onClearCalculation = () => null}) => {
    return(
        <>
        <button disabled={!allowCalculations} onClick={onCalculateResult}>
          =
        </button>
        <button disabled={!allowClear} onClick={onClearCalculation}>
          C
        </button>
        </>
    )
}