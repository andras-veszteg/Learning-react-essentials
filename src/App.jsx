import logoImg from './assets/investment-calculator-logo.png';
import { formatter } from './util/investment.js'

function App() {
  return (
      <main>
      <div id='header'>
        <img src={logoImg} alt="Logo" />
        <h1>React Investment Calculator</h1>    
      </div>
      <div>USER INPUT</div>
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
