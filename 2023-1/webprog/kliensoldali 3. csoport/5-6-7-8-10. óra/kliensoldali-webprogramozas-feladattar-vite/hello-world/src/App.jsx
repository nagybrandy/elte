import Hello from "./Hello.jsx"
const App = () => {
  console.log("asd")
  return (
    <>
      <Hello name="Bendi" count="3" />
      <Hello name="Géza" count="2"/>
      <Hello />
      <Hello name="" />
     </>
  )
}

export default App