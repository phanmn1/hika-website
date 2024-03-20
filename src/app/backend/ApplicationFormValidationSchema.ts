import * as Yup from 'yup';

export default Yup.object({
  firstName: Yup.string().required('First Name is a required field'),
  lastName: Yup.string().required('Last Name is a required field'),
  birthdate: Yup.date().required('Birthdate is a required field'),
  address: Yup.string().required('Address is a required field'),
  city: Yup.string().required('Address is a required field'),
  state: Yup.string().required('State is a required field'),
  zip: Yup.string()
          .required()
          .matches(/^[0-9]+$/, "Must be only digits")
          .min(5, 'Must be exactly 5 digits')
          .max(5, 'Must be exactly 5 digits')
          .required('Zip code is a required field'),
  phone: Yup.string().required('Phone number is a required field'),
  email: Yup.string().email('Email format not accepted').required('E-mail is a required field'),
  profession: Yup.string(),
  partnerProfession: Yup.string(),
  question1: Yup.string().required(),
  question2: Yup.string().required(),
  question3: Yup.string().required(),
  question4: Yup.string().required(),
  question5: Yup.string().required(),
  question6: Yup.string().required(),
  question7: Yup.string().required(),
  question8: Yup.string().required(),
  question9: Yup.string().required(),
  question10: Yup.string().required(),
  question11: Yup.string().required(),
  question12: Yup.string().required(),
  question13: Yup.string().required(),
  question14: Yup.string().required(),
  question15: Yup.string().required(),
  question16: Yup.string().required(),
  question17: Yup.string().required(),
  question18: Yup.string().required(),
  question19: Yup.string().required(),
  question20: Yup.string().required(),
  question21: Yup.string().required(),
  gender: Yup.string().required(),
  preference: Yup.array().of(Yup.string()).min(1, "Please select at least one option")
})