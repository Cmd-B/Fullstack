import React, { useState } from 'react'
import Person from './Components/Person.js'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const addName = (e) => {
    e.preventDefault()
    const addressObject = {
      name: newName,
      number: newNumber,
    }
    if(persons.find((person) => person.name === newName) !== undefined) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      setPersons(persons.concat(addressObject))
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
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