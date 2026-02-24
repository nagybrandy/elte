import { useDispatch, useSelector } from "react-redux";
import { selectEdited, selectHaiku, selectHaikus,removeHaiku } from "./haikuSlice";

export const HaikuList = () => {
  const haikus = useSelector(selectHaikus)
  const dispatch = useDispatch()
  const selectedId = useSelector(selectEdited)
  console.log(haikus)
  return (
    <div>
      <h2>Haiku list</h2>
      <div>
        {/* prettier-ignore */}
        {haikus.map((haiku,i)=> 
           <pre key={i} onClick={()=> dispatch(selectHaiku(i))}>{haiku}</pre>
        )}
        {(selectedId !== null) && <button onClick={()=>dispatch(removeHaiku())}>Remove</button>}
      </div>
    </div>
  );
};
