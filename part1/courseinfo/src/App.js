import React from 'react'

const Header = (header) => {
  return (
    <>
      <h1>{header.test.name}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercise}
      </p>
    </>
  )
}

const Content = (content) => {
  return (
    <>  
      <Part part={content.test.parts[0].name} exercise={content.test.parts[0].exercises}/>
      <Part part={content.test.parts[1].name} exercise={content.test.parts[1].exercises}/>
      <Part part={content.test.parts[2].name} exercise={content.test.parts[2].exercises}/>
    </> 
  )
}

const Total = (total) => {
  return (
    <>
      <p>Number of exercises {total.test.parts[0].exercises + total.test.parts[1].exercises + total.test.parts[2].exercises}</p>
    </>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

console.log(course.name)

  return (
    <div>
      <Header test={course} />
      <Content test={course} />
      <Total test={course} />
    </div>
  )
}

export default App