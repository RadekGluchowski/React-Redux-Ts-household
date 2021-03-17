import { useCallback } from "react";
import { CreateInvestmentForm } from "./Form/CreateInvestmentForm";

function Investment() {
  const runInvestment = useCallback((investment) => {
    console.log(investment);
  }, []);

  return (
    <div>
      <CreateInvestmentForm runInvestment={runInvestment} />
    </div>
  );
}

export default Investment;
