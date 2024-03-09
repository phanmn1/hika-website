import * as Yup from 'yup';
import { IApplicationFormValues } from './ApplicationForm';


export default Yup.object({
  firstName: Yup.string().required('required'),
  lastName: Yup.string().required('required')
})