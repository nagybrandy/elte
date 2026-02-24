import React from 'react'

const PeopleContainer = ({children}) => {
    return (
        <div className='grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 m-3'>
            {children}
        </div>
    )
}

export default PeopleContainer
