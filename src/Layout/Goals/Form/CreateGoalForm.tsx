import React, { useCallback, useState } from "react";
import { Formik, Form, Field } from "formik";
import { CREATE_GOAL_FORM } from "../Assets/constants";

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
          <label htmlFor={CREATE_GOAL_FORM.FORMIK.LABEL_HTML_FOR}>
            {CREATE_GOAL_FORM.FORMIK.GOAL}
          </label>
          <Field
            id={CREATE_GOAL_FORM.FORMIK.DESCRIPTION_FIELD_ID}
            name={CREATE_GOAL_FORM.FORMIK.DESCRIPTION_FIELD_NAME}
            placeholder={CREATE_GOAL_FORM.FORMIK.DESCRIPTION_FIELD_PLACEHOLDER}
          />
          <Field
            id={CREATE_GOAL_FORM.FORMIK.RESOURCES_FIELD_ID}
            type={CREATE_GOAL_FORM.FORMIK.RESOURCES_FIELD_TYPE}
            name={CREATE_GOAL_FORM.FORMIK.RESOURCES_FIELD_NAME}
            placeholder={CREATE_GOAL_FORM.FORMIK.RESOURCES_FIELD_PLACEHOLDER}
          />
          <button type="submit"> {CREATE_GOAL_FORM.FORMIK.BUTTON_TEXT} </button>
        </Form>
      </Formik>
    </div>
  );
};
