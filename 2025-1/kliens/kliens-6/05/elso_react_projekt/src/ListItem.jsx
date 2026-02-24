import React from 'react'

const ListItem = ({ person, id : index, setSelectedIndex }) => {
    return (
        <li onClick={() => setSelectedIndex(index)} className="list-row bg-base-200 hover:bg-base-300 cursor-pointer transition-all">
            <div className="text-4xl font-thin opacity-30 tabular-nums">{index+1}</div>
            <div className="list-col-grow">
                <div>{person.name}</div>
                <div className="text-xs uppercase font-semibold opacity-60">{person.toothbrush_color} toothbrush</div>
            </div>
        </li>
    )
}

export default ListItem
