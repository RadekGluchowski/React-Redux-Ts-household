import React, { useCallback, useState } from "react";
import { Formik, Form, Field } from "formik";
import { useSelector } from "react-redux";
import { AppState } from "../../../Store/Reducers/root-reducer";
import { Investment } from "../../../interfaces/investment.interface";
import { selectInvestment } from "../../../Store/Selectors/Selectors";
import {
  CREATE_INVESTMENT_FORM,
  TYPE_OF_INVESTMENTS,
  ZERO,
} from "../Assets/constants";

interface CreateInvestmentFormProps {
  runInvestment(investment: object): void;
}

export const CreateInvestmentForm: React.FC<CreateInvestmentFormProps> = ({
  runInvestment,
}) => {
  const investment = useSelector<AppState, Investment>(selectInvestment);
  const [initialValues] = useState<Investment>({
    investmentAmount: ZERO,
    typeOfInvestment: TYPE_OF_INVESTMENTS.MEDIUM_TERM,
  });

  const handleOnSubmit = useCallback(
    (values, actions) => {
      runInvestment(values);
      actions.setSubmitting(false);
      actions.resetForm(initialValues);
    },
      [initialValues, runInvestment]
  );

  return (
    <div>
      <h1>{CREATE_INVESTMENT_FORM.CREATE_FORM_HEADER_TEXT}</h1>
      <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
        <Form>
          <Field
              as={CREATE_INVESTMENT_FORM.FORMIK.SELECT_FIELD_TYPE}
              id={CREATE_INVESTMENT_FORM.FORMIK.SELECT_FIELD_ID}
              name={CREATE_INVESTMENT_FORM.FORMIK.SELECT_FIELD_NAME}
          >
            <option
                value={TYPE_OF_INVESTMENTS.SHORT_TERM}
                title={CREATE_INVESTMENT_FORM.SHORT_TERM_TITLE}
            >
              {CREATE_INVESTMENT_FORM.SHORT_TERM_TEXT}
            </option>
            <option
                value={TYPE_OF_INVESTMENTS.MEDIUM_TERM}
                title={CREATE_INVESTMENT_FORM.MEDIUM_TERM_TITLE}
            >
              {CREATE_INVESTMENT_FORM.MEDIUM_TERM_TEXT}
            </option>
            <option
                value={TYPE_OF_INVESTMENTS.LONG_TERM}
                title={CREATE_INVESTMENT_FORM.LONG_TERM_TITLE}
            >
              {CREATE_INVESTMENT_FORM.LONG_TERM_TEXT}
            </option>
          </Field>
          <Field
            id={CREATE_INVESTMENT_FORM.FORMIK.AMOUNT_FIELD_ID}
            name={CREATE_INVESTMENT_FORM.FORMIK.AMOUNT_FIELD_NAME}
            placeholder={CREATE_INVESTMENT_FORM.FORMIK.AMOUNT_FIELD_PLACEHOLDER}
            type={CREATE_INVESTMENT_FORM.FORMIK.AMOUNT_FIELD_TYPE}
          />
          <button disabled={!!investment.typeOfInvestment} type="submit">
            {CREATE_INVESTMENT_FORM.FORMIK.BUTTON_TEXT}
          </button>
        </Form>
      </Formik>
    </div>
  );
};
