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
  const all = props.good + props.neutral + props.bad
  const average = (props.good-props.bad)/all
  const positive = (props.good/all) * 100

  if(all === 0) {
    return (
      <p>No feedback given</p>
    )
  } else {
    return (
      <table>
        <tbody>
            <tr>
                <td><Statistic text="good" /></td>
                <td><Statistic value={props.good} /> </td>
            </tr>
            <tr>
                <td><Statistic text="neutral" /></td>
                <td><Statistic value={props.neutral} /></td>
            </tr>
            <tr>
                <td><Statistic text="bad" /></td>
                <td><Statistic value={props.bad} /></td>
            </tr>
            <tr>
                <td><Statistic text="all" /></td>
                <td><Statistic value={all} /></td>
            </tr>
            <tr>
                <td><Statistic text="average" /></td>
                <td><Statistic value={average} /></td>
            </tr>
            <tr>
                <td><Statistic text="positive" /></td>
                <td><Statistic value={positive} /></td>
            </tr>
        </tbody>
      </table>
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