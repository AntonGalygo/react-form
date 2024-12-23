import { Alert } from 'bootstrap';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const phoneRegExp =
  /^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Минимум 2 буквы')
    .max(50, 'Максимум 50 букв')
    .required('Обязательное поле'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Некорректный номер телефона')
    .required('Обязательное поле'),
});

function FormData({ handle, sumb }) {
  return (
    <>
      <Formik
        initialValues={{ name: '', phone: '' }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
          handle();
          sumb();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className='form-group'>
              <label htmlFor='name'>Имя</label>
              <Field type='text' name='name' className='form-control' />
              {errors.name && touched.name ? (
                <div className='text-danger'>{errors.name}</div>
              ) : null}
            </div>
            <div className='form-group mt-3'>
              <label htmlFor='phone'>Номер телефона</label>
              <Field type='text' name='phone' className='form-control' />
              {errors.phone && touched.phone ? (
                <div className='text-danger'>{errors.phone}</div>
              ) : null}
            </div>
            <button className='btn btn-primary mt-5' type='submit'>
              Отправить
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default FormData;
