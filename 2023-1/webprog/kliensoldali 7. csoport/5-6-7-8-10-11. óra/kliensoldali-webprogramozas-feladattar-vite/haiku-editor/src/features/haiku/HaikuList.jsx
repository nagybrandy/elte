import { useSelector } from "react-redux";

export const HaikuList = () => {
  const haikus = useSelector((state)=> state.haikus)
  console.log(haikus)
  return (
    <div>
      <h2>Haiku list</h2>
      {haikus.map((haiku, i) => (
          <pre key={i}>
            {haiku}
          </pre>
        ))}
        <button>Remove</button>
    </div>
  );
};
