import InvestmentForm from "./investmentForm";

function NewInvestment(props){
    const InvestmentHandler=(Invest)=>{
        const InvestmentObject={
            ...Invest,
            id:Math.random().toString()
        }
        props.getInvestment(InvestmentObject);
        // console.log(InvestmentObject)
    }
    const ResetHandler=(Invest)=>{
        const ResetObject={
            id:Math.random().toString()
        }
        props.getInvestment(ResetObject);
        // console.log(InvestmentObject)
    }

    return(
        <InvestmentForm onChangeHandler={InvestmentHandler} onResetHandler={ResetHandler}></InvestmentForm>
    )
}
export default NewInvestment;