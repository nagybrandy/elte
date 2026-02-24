import React from 'react'
import { useGetOnePersonQuery } from '../../../store/swApi'
import { useState } from 'react'
const PersonData = ({uid}) => {
  const { data: person, isLoading, isError,isFetching } = useGetOnePersonQuery(uid)
  const personData = person?.result?.properties
  if (isLoading || isFetching) return <span className="loading loading-spinner loading-md"></span>
  console.log(personData)
  return (
    <div>
        <h1>Person Data</h1>
        <p>Name: {personData.name}</p>
        <p>Gender: {personData.gender}</p>
        <p>Skin Color: {personData.skin_color}</p>
        <p>Hair Color: {personData.hair_color}</p>
        <p>Height: {personData.height}</p>
        <p>Eye Color: {personData.eye_color}</p>
        <p>Mass: {personData.mass}</p>
        <p>Homeworld: {personData.homeworld}</p>
        <p>Birth Year: {personData.birth_year}</p>
    </div>
  )
}

export default PersonData
