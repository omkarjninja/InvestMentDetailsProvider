import { useState } from "react";

function InvestmentForm(props){
    
    const[useCurrent,setCurrent]=useState();
    const[useyear,setyear]=useState();
    const[useintrest,setintrest]=useState();
    const[useDuration,setDuration]=useState();

     const currentHandler=(event)=>{
        setCurrent(event.target.value);
     }
     const YearlyHandler=(event)=>{
      setyear(event.target.value);
   }
   const InterestHandler=(event)=>{
    setintrest(event.target.value);
 }
 const DurationHandler=(event)=>{
  setDuration(event.target.value);
}
    const FormHandler=(event)=>{
      event.preventDefault();
    const InvestmentDetails={
      current_savings:useCurrent,
      yearly_savings:useyear,
      intrest:useintrest,
      duration:useDuration
    }
    props.onChangeHandler(InvestmentDetails)
    setCurrent('');
    setyear('');
    setintrest('');
    setDuration('');
    }
   const reset= ()=>{
   
    const RemoveDetails={
      current_savings:null,
      yearly_savings:null,
      intrest:null,
      duration:null
    }
    props.onResetHandler(RemoveDetails)
   }
    return(
     
        <div>
                <form className="form" onSubmit={FormHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" value={useCurrent} onChange={currentHandler}/>
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" value={useyear} onChange={YearlyHandler} />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" value={useintrest} onChange={InterestHandler}/>
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration"  value={useDuration} onChange={DurationHandler}/>
          </p>
        </div>
        <p className="actions">
          <button type="reset" onClick={reset} className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
        </div>
        
    )
}
export default InvestmentForm;