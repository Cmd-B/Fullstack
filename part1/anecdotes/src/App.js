import React, { useState } from 'react'



const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  //zero fill aray for votes
  const initVotes = anecdotes.map(elem => 0)

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(initVotes)
  const [mostVotes, setMostVotes] = useState(0)
  
  let change
  
  const newAnecdote = () => {
    change = () => Math.floor(Math.random() * anecdotes.length);
    setSelected(change);
  };
  
  const handleVote = () => {
    const newVote = [...vote];
    newVote[selected]++;
    if (newVote[selected] > newVote[mostVotes]) {
      setMostVotes(selected)
    }
    setVote(newVote)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Has {vote[selected]} votes</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={newAnecdote}>Next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostVotes]}</p>
      <p>Has {vote[mostVotes]} votes</p>
    </div>
  )
}

export default App