import React, { useCallback, useState } from "react";
import { Formik, Form, Field } from "formik";
import {CREATE_GOAL_FORM} from "../Assets/constants";
import './CreateGoalForm.css';

interface GoalsFormProps {
  saveGoal(goal: object): void;
}

interface GoalsFormValues {
  goalDescription: string;
  goalNeededResources: number;
}

export const CreateGoalForm: React.FC<GoalsFormProps> = ({ saveGoal }) => {
    const [initialValues] = useState<GoalsFormValues>({
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
          <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
              <Form className={"create-goal-form"}>
                  <Field
                      id={CREATE_GOAL_FORM.FORMIK.DESCRIPTION_FIELD_ID}
                      name={CREATE_GOAL_FORM.FORMIK.DESCRIPTION_FIELD_NAME}
                      placeholder={CREATE_GOAL_FORM.FORMIK.DESCRIPTION_FIELD_PLACEHOLDER}
                      maxlength={10}
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
