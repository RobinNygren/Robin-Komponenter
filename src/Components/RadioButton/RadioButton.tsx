import { useState } from "react";
import "./RadioButton.scss";

type Plans = {
  plans: string[];
  PlanHeader: string;
};

/* const plans = ["Student", "Premium", "Free"]; */

const RadioButton: React.FC<Plans> = ({ plans, PlanHeader }) => {
  const [plan, setPlan] = useState(plans[0]);

  const handlePlanChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setPlan(event.target.value);
  };

  return (
    <>
      <div className="radioContainer">
        <h2>{PlanHeader}</h2>
        {plans.map((option) => (
          <label className="labels" key={option}>
            <input
              className="Options"
              type="radio"
              value={option}
              checked={plan === option}
              onChange={handlePlanChange}
            />
            {option}
          </label>
        ))}
      </div>
    </>
  );
};

export default RadioButton;
