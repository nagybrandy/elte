import React from 'react'

const ListContainer = ({children}) => {
  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      {children}
    </ul>
  )
}

export default ListContainer
