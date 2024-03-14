import * as Yup from 'yup';

export default Yup.object({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  birthdate: Yup.date().required(),
  address: Yup.string().required(),
  city: Yup.string().required(),
  state: Yup.string().required(),
  zip: Yup.string()
          .required()
          .matches(/^[0-9]+$/, "Must be only digits")
          .min(5, 'Must be exactly 5 digits')
          .max(5, 'Must be exactly 5 digits'),
  phone: Yup.string().required('required'),
  email: Yup.string().email(),
  profession: Yup.string().required(),
  partnerProfession: Yup.string().required(),
})