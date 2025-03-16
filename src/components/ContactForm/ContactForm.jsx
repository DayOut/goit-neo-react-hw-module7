import * as Yup from "yup";

import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsApi.js";
import Button from "../Button/Button";

import css from "./ContactForm.module.css";
import { useId } from "react";

const ContactFormSchema = Yup.object().shape({
  name: Yup.string().min(3, "To short").max(50, "To Long").required("Required"),
  number: Yup.string()
    .min(3, "To short")
    .max(50, "To long")
    .required("Required"),
});

const defaultValues = {
  name: "",
  number: "",
};

export default function ContactForm() {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <div className={css.contactForm}>
      <Formik
        initialValues={defaultValues}
        validationSchema={ContactFormSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid }) => (
          <Form className={css.form}>
            <div className={css.formGroup}>
              <label htmlFor={nameFieldId} className={css.label}>
                Name
              </label>
              <Field
                type="text"
                name="name"
                id={nameFieldId}
                className={css.input}
              />
              <ErrorMessage
                name="name"
                component="div"
                className={css.errorMessage}
              />
            </div>

            <div className={css.formGroup}>
              <label htmlFor={numberFieldId} className={css.label}>
                Number
              </label>
              <Field
                type="text"
                name="number"
                id={numberFieldId}
                className={css.input}
              />
              <ErrorMessage
                name="number"
                component="div"
                className={css.errorMessage}
              />
            </div>

            <Button
              type="submit"
              color="primary"
              className={css.submitBtn}
              disabled={isSubmitting || !isValid}
            >
              Add contact
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
