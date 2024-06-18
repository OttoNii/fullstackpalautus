import { useState, useEffect} from 'react'
import personService from './services/persons'


const Person = ({person, deletePerson}) => {
  return <p>{person.name} {person.number} <button onClick={() => deletePerson(person)}>Delete</button> </p>;
};


const Persons = ({filteredPersons, deletePerson}) => {
  return(
    <div>
        {filteredPersons.map(person => 
          <Person key={person.name} person={person} deletePerson={deletePerson} />
          
        )}
      </div>
  )
}

const PersonForm = ({addPerson, newName, handleNameChange, newNumber, handleNumberChange}) => {
  return(
  <form onSubmit={addPerson}>
        <div>
          name: <input 
          value={newName}
          onChange={handleNameChange}/>
        </div>
        <div>
          number: <input
          value={newNumber}
          onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      <input value={filter} onChange={handleFilterChange} />
    </div>
  );
};

const App = () => {
  const [persons, setPersons] = useState([  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('');

  useEffect(() => {
    personService.getAll().then(initialPersons => {
      setPersons(initialPersons)
      })
  }, [])
  
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  const deletePerson = (person) => {
    if(window.confirm(`Do you want to delete ${person.name}`)) {
      personService.del(person.id).then(
        setPersons(persons.filter(p => p.id !== person.id))
      ).catch(error => {
        console.error('Failed to delete person:', error)
  })
    
  }
    
  }
  const addPerson = (event) => {
    event.preventDefault()
    const nameExists = persons.some(person => person.name === newName)
    if (nameExists) {
      if (window.confirm(`${newName} is already added to phonebook, do you want to update number`)){
       
        const person = persons.find(p => p.name === newName)
        const changedPerson = { ... person, number: newNumber}

        personService.updateNumber(person.id, changedPerson ).then(returnedPerson => {
          setPersons(persons.map(person => person.name !== newName ? person : returnedPerson))
        })
      }
    } else {
      const newPerson = { name: newName, number: newNumber}

      setPersons([...persons, newPerson])
      setNewName('')
      setNewNumber('')
      personService.create(newPerson).then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
      })
    
    }
  }

  
  const filteredPersons = filter === ''
    ? persons
    : persons.filter(person =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <h3>Add new</h3>
      <PersonForm 
      addPerson={addPerson}
      newName={newName}
      handleNameChange={handleNameChange}
      newNumber={newNumber}
      handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons filteredPersons={filteredPersons}
        deletePerson={deletePerson} />
    </div>
  )
}

export default App
