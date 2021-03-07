import React from "react";
import { Formik, Form, Field } from "formik";

interface GoalsFormProps {
  saveGoal(goal: object): void;
}

interface GoalsFormValues {
  goalDescription: string;
  goalNeededResources: number;
}

export const GoalsForm: React.FC<GoalsFormProps> = ({ saveGoal }) => {
  const initialValues: GoalsFormValues = {
    goalDescription: "",
    goalNeededResources: 0,
  };

  return (
    <div>
      <h1>Goals</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          saveGoal(values);
          actions.setSubmitting(false);
        }}
      >
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
