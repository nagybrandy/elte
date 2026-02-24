import React from 'react'

const Greeting = ({person}) => {
    //const { name, age } = props -> objektum desktruktúrálás
    return (
        <div className='mt-10 bg-base-200 rounded-xl shadow-lg p-4'>
            <h2 className='text-2xl font-bold'>
                Helló, {person.name}!
            </h2>
            <h3>Kor: {person.age}</h3>
            <h3>{person.city}</h3>
            <h3>Favorite food: {person.favorite_food}</h3>
        </div>
    )
}

export default Greeting
