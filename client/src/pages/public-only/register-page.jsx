import React, { useState } from 'react';
import {
  TextField,
  Grid,
  InputAdornment,
  CircularProgress,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { login } from '../../store/auth';
import AuthForm from '../../components/auth-form';
import AuthService from '../../services/auth-service';
import routes from '../../routing/routes';

const validationSchema = yup.object({
  name: yup.string()
    .required('Is required')
    .min(2, 'At least 2 letters')
    .max(32, 'Most 32 letters'),
  surname: yup.string()
    .required('Is required')
    .min(2, 'At least 2 letters')
    .max(32, 'Most 32 letters'),
  email: yup.string()
    .required('Is required')
    .email('Is not valid email')
    .test('email-validator', 'Email unavailable', (_, context) => {
      const { emailChecked, emailAvailable } = context.parent;
      if (!emailChecked) return true;

      return emailAvailable;
    }),
  password: yup.string()
    .required('Is required')
    .min(6, 'At least 6 symbols')
    .max(32, 'Most 32 symbols')
    .matches(/^.*[A-ZĄČĘĖĮŠŲŪŽ]+.*$/, 'Atleast one capital letter')
    .matches(/^.*\d+.*$/, 'Atleast one number'),
  passwordConfirmation: yup.string()
    .required('Is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  emailChecked: yup.boolean().oneOf([true]),
  emailAvailable: yup.boolean().oneOf([true]),
});

const initialValues = {
  name: '',
  surname: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  subscribed: true,
  emailChecked: false,
  emailAvailable: false,
};

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [emailCheckLoading, setEmailCheckLoading] = useState(false);

  const onSubmit = async ({
    email, name, surname, password, passwordConfirmation,
  }) => {
    const user = await AuthService.register({
      email,
      name,
      surname,
      password,
      repeatPassword: passwordConfirmation,
    });
    dispatch(login({ user }));
  };

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    touched,
    values,
    isSubmitting,
    isValid,
    dirty,
    setFieldValue,
    setValues,
  } = useFormik({
    validateOnMount: true,
    initialValues,
    validationSchema,
    onSubmit,
  });

  const handleEmailChange = (e) => {
    if (values.emailChecked) {
      setValues({
        ...values,
        email: e.target.value,
        emailChecked: false,
        emailAvailable: false,
      }, true);
    } else {
      handleChange(e);
    }
  };

  const handleEmailBlur = (e) => {
    handleBlur(e);
    if (!errors.email) {
      (async () => {
        try {
          setEmailCheckLoading(true);
          const emailAvailable = await AuthService.checkEmail(values.email);
          setFieldValue('emailAvailable', emailAvailable);
        } catch (error) {
          setFieldValue('emailAvailable', false);
        } finally {
          setFieldValue('emailChecked', true, true);
          setEmailCheckLoading(false);
        }
      })();
    }
  };

  let emailEndornment;
  if (emailCheckLoading) {
    emailEndornment = <CircularProgress size={24} />;
  } else if (!values.emailChecked) {
    emailEndornment = null;
  } else if (values.emailAvailable) {
    emailEndornment = <CheckCircleIcon color="success" />;
  } else {
    emailEndornment = <ErrorIcon color="error" />;
  }

  return (
    <AuthForm
      title="Sign Up"
      linkTo={routes.LoginPage}
      linkTitle="Already Have An Account? Sign In"
      onSubmit={handleSubmit}
      isValid={isValid && dirty}
      loading={isSubmitting}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name="name"
            label="Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
            disabled={isSubmitting}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="surname"
            label="Surname"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.surname}
            error={touched.surname && Boolean(errors.surname)}
            helperText={touched.surname && errors.surname}
            disabled={isSubmitting}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="email"
            label="E-mail"
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            value={values.email}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            disabled={isSubmitting}
            fullWidth
            variant="standard"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {emailEndornment}
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="password"
            label="Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            disabled={isSubmitting}
            fullWidth
            variant="standard"
            type="password"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            sx={{ mb: 4 }}
            name="passwordConfirmation"
            label="Repeat Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.passwordConfirmation}
            error={touched.passwordConfirmation && Boolean(errors.passwordConfirmation)}
            helperText={touched.passwordConfirmation && errors.passwordConfirmation}
            disabled={isSubmitting}
            fullWidth
            variant="standard"
            type="password"
          />
        </Grid>
      </Grid>
    </AuthForm>
  );
};

export default RegisterPage;
