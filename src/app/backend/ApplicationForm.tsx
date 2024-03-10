'use client'
import ApplicationFormValidationSchema from './ApplicationFormValidationSchema';
import { Formik, Field, Form, ErrorMessage } from 'formik';

export interface IApplicationFormValues {
    firstName: string
    lastName: string
    // birthdate: string
    // todayDate: string
    // address: string
    // city: string
    // state: string
    // zip: string
    // phone: string
    // email: string
    // profession: string
    // partnerProfession: string
}

const initalValues: IApplicationFormValues = {
    firstName: '', 
    lastName: '', 
    // birthdate: '',
    // todayDate: '',
    // address: '', 
    // city: '', 
    // state: '', 
    // zip: '', 
    // phone: '',
    // email: '', 
    // profession: '',
    // partnerProfession: '',


}

export default function ApplicationForm (props: any) {
  
	// const formik = useFormik({
  //   initialValues: initalValues,
  //   onSubmit: async (values) => await testPost(values)
  // })

  //const { register, handleSubmit } = useForm<IApplicationFormValues>()
  const componentType = typeof window === 'undefined' ? 'server' : 'client'
  console.log(componentType)

  return (
    <Formik
      initialValues={initalValues}
      validationSchema={ApplicationFormValidationSchema}
      onSubmit={async (values, { setSubmitting}) => {
        console.log(values)
        await props.testPost(values)
      }}>
        <Form>
          <div>
            <label htmlFor='firstName' className='block text-gray-700 text-sm font-bold mb-2'>First Name</label>
            <Field name='firstName' type='text' placeholder="Firstname" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            <ErrorMessage name='lastName'>{msg => <div className='text-red-500 text-xs italic'><sup>*</sup>{msg}</div>}</ErrorMessage>
          </div>

          <div>
            <label htmlFor='lastName'>Last Name</label>
            <Field name='lastName' type='text'/>
            <ErrorMessage name='lastName'>{msg => <div className='text-red-500 text-xs italic'>{msg}</div>}</ErrorMessage>
          </div>

          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    // <div>
    //   <form action={props.testPost}>
    //     <input type="text" placeholder="title" name="title"/>
    //     <button type='submit'>Submit</button>
    //   </form>
    // </div>
  )
}