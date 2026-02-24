import { useSelector } from "react-redux";
import styles from "./Editor.module.css";
import { useDispatch } from "react-redux";
import { addText, changeText, selectEditor } from "./haikuSlice";

export const Editor = () => {
  const text = useSelector(selectEditor)
  const dispatch = useDispatch()
  console.log(text)
  const isHaiku = false;
  return (
    <div>
      <textarea
        rows="4"
        cols="40"
        className={isHaiku ? styles.good : styles.wrong}
        value={text}
        onInput={(e)=> dispatch(changeText(e.target.value))}
      ></textarea>
      <p>Vowels per row: 1,2,3</p>
      <button onClick={() => dispatch(addText())}>Add</button>
      <button>Save</button>
    </div>
  );
};
