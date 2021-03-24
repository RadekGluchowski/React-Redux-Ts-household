import React, { useCallback, useState } from "react";
import { Formik, Form, Field } from "formik";
import { useSelector } from "react-redux";
import { AppState } from "../../../Store/Reducers/root-reducer";
import { Investment } from "../../../interfaces/investment.interface";

interface CreateInvestmentFormProps {
  runInvestment(investment: object): void;
}

export const CreateInvestmentForm: React.FC<CreateInvestmentFormProps> = ({
  runInvestment,
}) => {
  /*   const investments = useSelector<AppState, Investment["investments"]>(
    (state) => state.investmentReducer.investments
  ); */
  const [initalValues] = useState<Investment>({
    investmentAmount: 0,
    typeOfInvestment: "midium term",
  });

  const handleOnSubmit = useCallback(
    (values, actions) => {
      runInvestment(values);
      actions.setSubmitting(false);
      actions.resetForm(initalValues);
    },
    [initalValues, runInvestment]
  );

  return (
    <div>
      <h1>Create Investment Form</h1>
      <Formik initialValues={initalValues} onSubmit={handleOnSubmit}>
        <Form>
          <Field as="select" id="typeOfInvestment" name="typeOfInvestment">
            <option
              value="short term"
              title="short term investment multiplaying amount by 2% per 2 mins"
            >
              Short
            </option>
            <option
              value="midium term"
              title="midium term investment multiplaying amount by 4% per 4 mins"
            >
              Midium
            </option>
            <option
              value="long term"
              title="long term investment multiplaying amount by 7% per 6 mins"
            >
              Long
            </option>
          </Field>
          <Field
            id="investmentAmount"
            name="investmentAmount"
            placeholder="Amount"
            type="number"
          />
          <button /* disabled={!!investments.length} */ type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};
