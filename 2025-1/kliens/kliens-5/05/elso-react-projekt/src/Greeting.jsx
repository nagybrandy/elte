import React from 'react'

// objektumdestruktúrálás props=> {name, age}
const Greeting = ({ name : nev, age }) => {

  const handleClick = ()=> {
    console.log(nev)
  }

  return (
    <div onClick={handleClick} className='p-5 bg-amber-900 rounded-xl text-white cursor-pointer hover:bg-amber-800 transition-all'>
      <h2 className="text-3xl font-bold">Hello, {nev}!</h2>
      <h3>Kor: {age}</h3>
    </div>
  )
}

export default Greeting
