import React, { useState } from 'react'

const Header = props => (
  <h1>{props.text}</h1>
)

const Statistic = props => (
  <div>{props.text} {props.value}</div>
)

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  if (props.good || props.neutral || props.bad >= 1) {
    return (
      <>
        <Statistic text="good" value={props.good} />
        <Statistic text="neutral" value={props.neutral} />
        <Statistic text="bad" value={props.bad} />
        <Statistic text="all" value={props.good+props.neutral+props.bad} />
        <Statistic text="average" value={(props.good-props.bad)/(props.good+props.neutral+props.bad)} />
        <Statistic text="positive" value={((props.good/(props.bad+props.good+props.neutral)) * 100) +'%'} />
      </>
    )
  } else {
    return (
      <p>No feedback given</p>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = newGood => {
    setGood(newGood)
  }

  const setToNeutral = newNeutral => {
    setNeutral(newNeutral)
  }

  const setToBad = newBad => {
    setBad(newBad)
  }

  return (
    <div>
      <Header text="give feedback"/>
      <Button handleClick={() => setToGood(good + 1)} text="good"/>
      <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral"/>
      <Button handleClick={() => setToBad(bad + 1)} text="bad"/>
      <Header text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad}/>

    </div>
  )
}

export default App