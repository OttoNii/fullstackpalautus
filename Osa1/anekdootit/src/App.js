import { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const MostVoted = ({anecdotes, voteList}) => {
  const max = Math.max(...voteList)
  const maxIndex = voteList.indexOf(max)
  const maxAnecdote = anecdotes[maxIndex]

  return(
    <div>
      <h1>Most voted anecdote</h1>
      <p>{maxAnecdote}</p>
      <p>Votes {max}</p>
    </div>
  )
    
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  
  
  
  const [selected, setSelected] = useState(0)
  const [voteList, setVoteList] = useState(Array(anecdotes.length).fill(0))

  const handleClick = () => {
    const random = Math.floor(Math.random() * anecdotes.length)
    setSelected(random)
}

  const handleVote = () => {
    const updateVotelist = [...voteList]
    updateVotelist[selected] += 1
    console.log(voteList)
    console.log(updateVotelist)
    setVoteList(updateVotelist)
  } 

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Has {voteList[selected]} votes</p>
      <Button handleClick={handleClick} text='Next anecdote'/>
      <Button handleClick={handleVote} text='Vote'/>
      <MostVoted anecdotes={anecdotes} voteList={voteList}/>

    </div>
  )
}

export default App