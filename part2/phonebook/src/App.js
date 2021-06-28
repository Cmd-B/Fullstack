import React, { useState } from 'react'
import Person from './Components/Person.js'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addNumber = (e) => {
    e.preventDefault()
    const numberObject = {
      name: newName,
    }
    setPersons(persons.concat(numberObject))
    setNewName('')
  }

  const handleNumberChange = (e) => {
    setNewName(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        <div>
          name: <input value={newName} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
            <Person key={person.name} person={person}/>
          )}
      </ul>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App