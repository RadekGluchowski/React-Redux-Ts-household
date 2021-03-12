import React, { useCallback, useState } from "react";
import { Formik, Form, Field } from "formik";

interface GoalsFormProps {
  saveGoal(goal: object): void;
}

interface GoalsFormValues {
  goalDescription: string;
  goalNeededResources: number;
}

export const CreateGoalForm: React.FC<GoalsFormProps> = ({ saveGoal }) => {
  const [initalValues] = useState<GoalsFormValues>({
    goalDescription: "",
    goalNeededResources: 0,
  });

  const handleOnSubmit = useCallback(
    (values, actions) => {
      saveGoal(values);
      actions.setSubmitting(false);
    },
    [saveGoal]
  );

  return (
    <div>
      <h1>Goals</h1>
      <Formik initialValues={initalValues} onSubmit={handleOnSubmit}>
        <Form>
          <label htmlFor="goalDescription">Goal </label>
          <Field
            id="goalDescription"
            name="goalDescription"
            placeholder="Goal to achieve"
          />
          <Field
            id="goalNeededResources"
            type="number"
            name="goalNeededResources"
            placeholder="Needed Resources"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
