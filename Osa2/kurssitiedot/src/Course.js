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
    return <p><strong>Number of {props.sumOfExercises} exercises</strong></p>
  }
  
  const Course = (props) => {
    console.log(props)
    const totalExercises = props.course.parts.reduce((total, part) => total + part.exercises, 0)
  
    return (
      <div>
        <Header courseName={props.course.name} />
        <Content parts={props.course.parts} />
        <Total sumOfExercises={totalExercises} />
      </div>
    )
  }

  export {Course}