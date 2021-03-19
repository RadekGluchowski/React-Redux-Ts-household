/* eslint-disable react-perf/jsx-no-new-function-as-prop */
import React, { useCallback, useState } from "react";
import { Formik, Form, Field } from "formik";
import nextId from "react-id-generator";

interface CreateInvestmentFormProps {
  runInvestment(investment: object): void;
}

interface CreateInvestmentFormValues {
  investmentAmount: number;
  typeOfInvestment: string;
}

export const CreateInvestmentForm: React.FC<CreateInvestmentFormProps> = ({
  runInvestment,
}) => {
  const [initalValues] = useState<CreateInvestmentFormValues>({
    investmentAmount: 0,
    typeOfInvestment: "midium term",
  });

  const handleOnSubmit = useCallback(
    (values, actions) => {
      runInvestment({ values, id: nextId() });
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
          <Field
            render={() => (
              <select
                disabled={false}
                name="typeOfInvestment"
                id="typeOfInvestment"
              >
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
              </select>
            )}
          ></Field>
          <Field
            render={() => (
              <input
                disabled={false}
                id="investmentAmount"
                name="investmentAmount"
                placeholder="Amount"
                type="number"
              />
            )}
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
