import { useState } from 'react'

const StatisticLine = props => <div>{props.text} {props.value}</div>

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistic = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;

  if (total === 0) {
    return <div><p>No feedback yet</p></div>;
  }

  const average = (good - bad) / total;
  const positive = (good / total) * 100;

  return (
    
      <table>
      <tbody>
      <tr>
        <td><StatisticLine text="Good" /></td>
        <td><StatisticLine value={good} /></td>
      </tr>
      <tr>
        <td><StatisticLine text="Neutral" /></td>
        <td><StatisticLine value={neutral} /></td>
      </tr>
      <tr>
        <td><StatisticLine text="Bad" /></td>
        <td><StatisticLine value={bad} /></td>
      </tr>
      <tr>
        <td><StatisticLine text="All" /></td>
        <td><StatisticLine value={total} /></td>
      </tr>
      <tr>
        <td><StatisticLine text="Average" /></td>
        <td><StatisticLine value={average} /></td>
      </tr>
      <tr>
        <td><StatisticLine text="Positive" /></td>
        <td><StatisticLine value={positive + '%'} /></td>
      </tr>
      </tbody>
      </table>
    
  );  
};


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  


  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };
  

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />

      <h2>Statistics</h2>
      <Statistic good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App;
