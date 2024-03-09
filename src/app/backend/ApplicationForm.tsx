import { Formik, Field, Form, ErrorMessage } from 'formik';
import ApplicationFormValidationSchema from './ApplicationFormValidationSchema';

export interface IApplicationFormValues {
    firstName: string
    lastName: string
    birthdate: string
    todayDate: string
    address: string
    city: string
    state: string
    zip: string
    phone: string
    email: string
    profession: string
    partnerProfession: string
}

const initalValues: IApplicationFormValues = {
    firstName: '', 
    lastName: '', 
    birthdate: '',
    todayDate: '',
    address: '', 
    city: '', 
    state: '', 
    zip: '', 
    phone: '',
    email: '', 
    profession: '',
    partnerProfession: '',


}

export default function ApplicationForm () {
    return (
       <Formik
        initialValues={initalValues}
        validationSchema={ApplicationFormValidationSchema}
        onSubmit={() => {}}
       >
        <Form>

        </Form>
       </Formik>
    )
}