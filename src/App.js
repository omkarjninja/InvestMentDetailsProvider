import { useState } from 'react';
import logo from './assets/investment-calculator-logo.png';
import NewInvestment from './components/Newinvestment';
import Header from './components/header';
import InvestmentForm from './components/investmentForm';

const Dummy={
  id:1,
  current_savings:null,
      yearly_savings:null,
      intrest:null,
      duration:null,
      Total:null,
      InvestedCapital:null
}
function App() {
  const[useInvestment,SetInvestment]=useState(Dummy);

    const yearlyData = []; // per-year results

    // let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    // const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    // const expectedReturn = +userInput['expected-return'] / 100;
    // const duration = +userInput['duration'];
    let storage=useInvestment.current_savings;
    let currentSavings = Number(storage);
    let againstorage=useInvestment.yearly_savings;
    const yearlyContribution =Number(againstorage);
    const intr=useInvestment.intrest;
    const expectedReturn = intr /100;
    const duration = useInvestment.duration;
    let InvestedCap=useInvestment.InvestedCapital;
    let toll=useInvestment.Total;
    let TotalIntrest=Number(toll);
    const InitialInvestment=storage;
    // console.log(againstorage)
  //  console.log(typeof(currentSavings));
  //  console.log(typeof(duration));
  //  console.log(typeof(yearlyContribution));
  //  console.log(typeof(expectedReturn));
  //  console.log(typeof(TotalIntrest));
  //  console.log(currentSavings);
  //  console.log(storage);
  //  console.log(typeof(currentSavings));
    // console.log("expected duration is "+ duration);
    // console.log("expected currentsavings is "+ currentSavings); // feel free to change the shape of this input object!
    // console.log("expected yearly is "+ yearlyContribution); // as mentioned: feel free to change the shape...
    // console.log("expected return is "+ expectedReturn);
    // console.log("expected intr is "+ intr);

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      againstorage =+ yearlyContribution*(i+1);
      InvestedCap= currentSavings;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest:Number(yearlyInterest).toFixed(2),
        savingsEndOfYear:Number(currentSavings).toFixed(2),
        yearlyContribution:Number(yearlyContribution).toFixed(2),
        Total:Number(currentSavings - storage - againstorage).toFixed(2),
        InvestedCapital:Number(currentSavings-(currentSavings - storage - againstorage)).toFixed(2),
      });
    }
//  console.log(yearlyData);
    // do something with yearlyData ...
  const AddInvestmenthandler=(Investments)=>{
    SetInvestment(Investments);
    // console.log(useInvestment);
}
  return (
    <div>
     <Header></Header>
      {/* <InvestmentForm></InvestmentForm> */}
      <NewInvestment getInvestment={AddInvestmenthandler}></NewInvestment>
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        {
          yearlyData.map((val)=>
          (
            <tbody>
          <tr>
            <td>{val.year}</td>
            <td>${val.savingsEndOfYear}</td>
            <td>${val.yearlyInterest}</td>
            <td>${val.Total}</td>
           
            <td>${val.InvestedCapital}</td>
           
           
          </tr>
        </tbody>
          ))
        }
      </table>
    </div>
  );
}

export default App;
