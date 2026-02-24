import { useDispatch, useSelector } from "react-redux";
import { clickCell, colors, selectTable } from "../../store/nonogramSlice/nonogramSlice";
import { useGetPuzzlesQuery, useUpdatePuzzlesMutation } from "../../store/nonogramSlice/nonogramApiSlice";

export const GraphiLogics = () => {
  const { leftNumbers, upperNumbers, table } = useSelector(selectTable);
  const dispatch = useDispatch();

  const {data, isLoading} = useGetPuzzlesQuery();

  const [
    updatePuzzles, // This is the mutation trigger
    { isLoading: isUpdating }, // This is the destructured mutation result
  ] = useUpdatePuzzlesMutation()

  console.log(isUpdating)
  if(isLoading){
    console.log("Loading...")
    return <h1>Loading...</h1>
  } else {
    console.log(data)
  }
  return (
    <>
    <table id="layout">
      <tbody>
        <tr>
          <td></td>
          <td>
            <table id="felso">
              <tbody>
                <tr>
                  {upperNumbers.map((col, colIdx) => (
                    <td key={colIdx}>
                      {col.map((num, numIdx) => (
                        <span key={numIdx}>{num}</span>
                      ))}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <table id="bal">
              <tbody>
                {leftNumbers.map((row, rowIdx) => (
                  <tr key={rowIdx}>
                    <td>
                      {row.map((col, colIdx) => (
                        <span key={colIdx}>{col}</span>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </td>
          <td>
            <table id="tabla">
              <tbody>
                {table.map((row, rowIdx) => (
                  <tr key={rowIdx}>
                    {row.map((cell, cellIdx) => (
                      <td
                        onClick={() => dispatch(clickCell({ x: rowIdx, y: cellIdx }))}
                        className={
                          cell === colors.WHITE
                            ? "feher"
                            : cell === colors.BLACK
                            ? "fekete"
                            : cell === colors.GREY
                            ? "szurke"
                            : ""
                        }
                        key={cellIdx}
                      ></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <button onClick={()=> updatePuzzles({
      "title": "Jármű",
      "puzzle": "[asd]"
      })}>Küldés</button>
    </>
  );
};
