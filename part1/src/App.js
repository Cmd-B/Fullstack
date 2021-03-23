import React from 'react'

const Header = (header) => {
  return (
    <>
      <h1>{header.name}</h1>
    </>
  )
}

const Content = (content) => {
  return (
    <>  
      <p>
        {content.part} {content.exercises}
      </p>
    </> 
  )
}

const Total = (total) => {
  return (
    <>
      <p>Number of exercises {total.ex1 + total.ex2 + total.ex3}</p>
    </>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header name={course} />
      <Content part={part1.name} exercises={part1.exercises} />
      <Content part={part2.name} exercises={part2.exercises} />
      <Content part={part3.name} exercises={part3.exercises} />
      <Total ex1={part1.exercises} ex2={part2.exercises} ex3={part3.exercises} />
    </div>
  )
}

export default App