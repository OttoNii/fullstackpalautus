

const Header = (props) => {
  return <h1>{props.courseName}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.partName} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part) => (
        <Part key={part.id} partName={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}

const Total = (props) => {
  return <p><strong>Number of exercises {props.sumOfExercises}</strong></p>
}

const Course = (props) => {
  const totalExercises = props.course.parts.reduce((total, part) => total + part.exercises, 0)

  return (
    <div>
      <Header courseName={props.course.name} />
      <Content parts={props.course.parts} />
      <Total sumOfExercises={totalExercises} />
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
     }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App
