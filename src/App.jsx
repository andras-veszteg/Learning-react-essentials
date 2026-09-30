import logoImg from './assets/investment-calculator-logo.png';
import {calculateInvestmentResults, formatter,} from './util/investment.js'
import CustomUserInput from "./components/CustomUserInput.jsx";
import { useState } from 'react';

function App() {
    const [data, setData] = useState({initialInvestment: 10000, annualInvestment: 300, expectedReturn: 7, duration: 12})
    const [dataTable, setDataTable] = useState([])
    
    function handleUserInput(inputName, inputValue) {
        setData(prevData => {
            console.log(inputName, inputValue);
            return {
                ...prevData,
                [inputName]: inputValue
            }
            
        });
        if(data.initialInvestment>=0 && data.annualInvestment>=0 && data.duration>=1 && data.expectedReturn>=0)
            setDataTable(calculateInvestmentResults({}));
       
    }
    
  return (
      <main>
      <div id='header'>
        <img src={logoImg} alt="Logo" />
        <h1>React Investment Calculator</h1>    
      </div>
          <div id='user-input' >
      <div className='input-group'>
          
          <CustomUserInput labelText="Initial Investment" labelCode='initialInvestment' onUserInput={handleUserInput} />
          <CustomUserInput labelText="Annual Investment" labelCode='annualInvestment' onUserInput={handleUserInput} />
      </div>
              <div className='input-group'>
              <CustomUserInput labelText="Expected return" labelCode='expectedReturn' onUserInput={handleUserInput} />
          <CustomUserInput labelText="Duration" labelCode='duration' onUserInput={handleUserInput} />
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
            {dataTable}
        </tr>
        </tbody>
    </table>
    </main>
  )
}

export default App
