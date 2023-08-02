const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

const Header = ({course}) => {
  
  return (
  <header><h1>{course}</h1></header>
  )
}

const Content = ({parts}) => {

  return(
    <div>
     <p>{parts[0].name} {parts[0].exercises}</p>
     <p>{parts[1].name} {parts[1].exercises}</p>
     <p>{parts[2].name} {parts[2].exercises}</p>
    </div>
  )
}

const Total = ({parts}) => {
    let n = 0
      parts.forEach(value => {
      console.log(value) 
      })
    return(
     
      <div>
        <p>{parts[n].name} {parts[n].exercises}</p>
      </div>
  
  )
}



export default App