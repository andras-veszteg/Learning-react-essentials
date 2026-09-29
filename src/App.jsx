import logoImg from './assets/investment-calculator-logo.png';
import { formatter } from './util/investment.js'
import CustomUserInput from "./components/CustomUserInput.jsx";
import { useState } from 'react';

function App() {
    const [data, setData] = useState({initialInvestment: 10000, annualInvestment: 300, expectedReturn: 7, duration: 12})
  return (
      <main>
      <div id='header'>
        <img src={logoImg} alt="Logo" />
        <h1>React Investment Calculator</h1>    
      </div>
          <div id='user-input' >
      <div className='input-group'>
          
          <CustomUserInput labelText="Initial Investment" />
          <CustomUserInput labelText="Annual Investment" />
      </div>
              <div className='input-group'>
              <CustomUserInput labelText="Expected return" />
          <CustomUserInput labelText="Duration" />
              </div>
          </div>
    <table id='result'>
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
            <td>{formatter.format(10850)}</td>
            <td>{formatter.format(550)}</td>
            <td>{formatter.format(550)}</td>
            <td>{formatter.format(10300)}</td>
        </tr>
        </tbody>
    </table>
    </main>
  )
}

export default App
