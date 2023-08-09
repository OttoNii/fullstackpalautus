import { useState } from 'react'

const Person = ({ person }) => {
  return <li>{person.name}</li>;
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const nameExists = persons.some(person => person.name === newName);
    if (nameExists) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      const newPerson = { name: newName };
      setPersons([...persons, newPerson]);
      setNewName('');
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
          value={newName}
          onChange={handleNoteChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
          <Person key={person.name} person={person} />
        )}
      </ul>
    </div>
  )

}

export default App
