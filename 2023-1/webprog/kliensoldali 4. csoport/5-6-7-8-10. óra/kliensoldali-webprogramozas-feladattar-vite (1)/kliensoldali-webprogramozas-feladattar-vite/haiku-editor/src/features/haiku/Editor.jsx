import { useDispatch, useSelector } from "react-redux";
import styles from "./Editor.module.css";
import { addHaiku, changeText, editHaiku, selectEdited, selectEditor } from "./haikuSlice";

export const Editor = () => {
  const {text, vowels, isHaiku} = useSelector(selectEditor)
  const selectedId = useSelector(selectEdited)
  const dispatch = useDispatch()

  return (
    <div>
      <textarea
        rows="4"
        cols="40"
        className={isHaiku ? styles.good : styles.wrong}
        value={text}
        onInput={(e)=> dispatch(changeText(e.target.value))}
      ></textarea>
      <p>Vowels per row:{vowels.join(",")}</p>
      {isHaiku && <button onClick={()=>dispatch(addHaiku())}>Add</button>}
      {(isHaiku && selectedId !== null) && <button onClick={()=> dispatch(editHaiku())}>Save</button>}
    </div>
  );
};
