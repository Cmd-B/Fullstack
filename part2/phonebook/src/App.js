import React, { useState } from 'react'
import Person from './Components/Person.js'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addName = (e) => {
    e.preventDefault()
    const numberObject = {
      name: newName,
    }
    if(persons.find((person) => person.name === newName) !== undefined) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      setPersons(persons.concat(numberObject))
    }
    setNewName('')
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
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
    </div>
  )
}

export default App