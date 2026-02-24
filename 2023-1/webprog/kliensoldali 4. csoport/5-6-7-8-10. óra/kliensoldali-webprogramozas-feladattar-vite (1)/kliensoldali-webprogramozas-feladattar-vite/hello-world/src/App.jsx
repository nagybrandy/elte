import React from 'react';
import Hello from "./Hello.jsx"

const App = () => {
  return (
    <>
      <Hello name="Bendi" count={3} />
      <Hello name="Gazsi" count={2} />
      <Hello name="Karcsi" count={1} />
    </>
  );
};

export default App;
