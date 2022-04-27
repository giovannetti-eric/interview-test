import { FC } from 'react';
import { ErrorMessage, Form, Formik } from 'formik';
import * as Yup from 'yup';
import NumberSelector from '../inputs/NumberSelector';
import Button from '../inputs/Button';

interface Props {
  defaultMinAge: number;
  defaultMaxAge: number;
  onSubmit: (values: any) => void;
}

export interface FormValues {
  minAge: number;
  maxAge: number;
}

const AgeFilter: FC<Props> = ({ defaultMinAge, defaultMaxAge, onSubmit }) => {
  const validationSchema = Yup.object().shape({
    minAge: Yup.number().required('Number required'),
    maxAge: Yup.number().required('Number required'),
  });

  const initialValues: FormValues = {
    minAge: defaultMinAge,
    maxAge: defaultMaxAge,
  };

  const handleSubmit = (values) => {
    if (typeof onSubmit === 'function') {
      onSubmit(values);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        handleSubmit(values);
        setSubmitting(false);
      }}
    >
      {({ setFieldValue, isSubmitting, values }) => (
        <Form className="flex flex-col items-start gap-6">
          <NumberSelector
            label="Age Min"
            name="minAge"
            value={values.minAge}
            onChange={(value) => setFieldValue('minAge', Number(value))}
          />
          <ErrorMessage className="text-sm text-left text-red-500" name="minAge" component="div" aria-live="polite" />
          <NumberSelector
            label="Age Max"
            name="maxAge"
            value={values.maxAge}
            onChange={(value) => setFieldValue('maxAge', Number(value))}
          />
          <ErrorMessage className="text-sm text-left text-red-500" name="maxAge" component="div" aria-live="polite" />
          <Button type="submit" disabled={isSubmitting}>
            Retrieve users
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AgeFilter;
