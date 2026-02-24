import React from 'react'
import { useGetAllPeopleQuery } from '../../store/swApi'
import PersonData from './components/PersonData'
import { useState } from 'react'
const People = () => {
    const { data: people, isLoading, isError } = useGetAllPeopleQuery()
    console.log(people)
    const [uid, setUid] = useState(null)
    if (isLoading) return <span className="loading loading-spinner loading-md"></span>

    return (
        <>
            <ul className="max-w-md mx-auto shadow-md list bg-base-100 rounded-box">

                {people.results.map(e => <li key={e.uid} className="flex flex-row align-middle list-row">
                    <div>{e.name}</div>

                    <button className="py-0 btn btn-square btn-ghost" onClick={() => setUid(e.uid)}>
                        <svg className="size-[1.2em] py-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                    </button>
                </li>)}

            </ul>

            {uid && <PersonData uid={uid} />}
        </>
    )
}

export default People
