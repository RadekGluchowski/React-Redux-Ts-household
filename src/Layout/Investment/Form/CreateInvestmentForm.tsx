import React, { useCallback, useState } from "react";
import { Formik, Form, Field } from "formik";

interface CreateInvestmentFormProps {}

interface CreateInvestmentFormValues {}

export const CreateInvestmentForm: React.FC<CreateInvestmentFormProps> = ({}) => {
  const [initalValues] = useState<CreateInvestmentFormValues>({});

  const handleOnSubmit = useCallback((values, actions) => {}, []);

  return (
    <div>
      <h1>Create Investment Form</h1>
      <Formik initialValues={initalValues} onSubmit={handleOnSubmit}>
        <Form>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
