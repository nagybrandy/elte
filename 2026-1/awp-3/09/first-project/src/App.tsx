
import './App.css'
import Hello from './Hello'

function App() {

  return (
      <section id="center">
        <div>
          <Hello name="Bendi" age={7} />  
          <Hello age={16}/>
          <Hello name="Josh" />

        </div>
     
      </section>
  )
}

export default App
