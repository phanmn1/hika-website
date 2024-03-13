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
          <div className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label htmlFor='firstName' className='block uppercase tracking-wide text-sand text-sm font-bold mb-2'>First Name</label>
                <Field name='firstName' type='text' placeholder="Firstname" className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"/>
                <ErrorMessage name='lastName'>{msg => <div className='text-red-500 text-xs italic'><sup>*</sup>{msg}</div>}</ErrorMessage>
              </div>

              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label htmlFor='lastName'>Last Name</label>
                <Field name='lastName' type='text'/>
                <ErrorMessage name='lastName'>{msg => <div className='text-red text-xs italic'>{msg}</div>}</ErrorMessage>
              </div>

              <div>
                <label htmlFor='birthdate'>Birthdate</label>
                <Field name='birthdate' type="date"/>
                <ErrorMessage name='birthdate'>{msg => <div className='text-red text-xs italic'>{msg}</div> }</ErrorMessage>
              </div>

              <div>
                <label htmlFor='address'>Address</label>
                <Field name='address' type='text'/>
                <ErrorMessage name='address'>{msg => <div className='text-red text-xs italic'>{msg}</div> }</ErrorMessage>
              </div> 
              <div>
                <label htmlFor='city'>City</label>   
                <Field name='city' type='text'/>
                <ErrorMessage name='city'>{msg => <div className='text-red text-xs italic'>{msg}</div> }</ErrorMessage>
              </div>
              <div>
                <label htmlFor='state'>State</label>
                <Field name='state' type='text'/>
                <ErrorMessage name='state'>{msg => <div className='text-red text-xs italic'>{msg}</div> }</ErrorMessage>
              </div>
              <div>
                <label htmlFor='zip'>Zip</label>
                <Field name='zip' type='text'/>
                <ErrorMessage name='zip'>{msg => <div className='text-red text-xs italic'>{msg}</div> }</ErrorMessage>
              </div>
              <div>
                <label htmlFor='phone'>Phone</label>
                <Field name='phone' type='tel'/>
                <ErrorMessage name='phone'>{msg => <div className='text-red text-xs italic'>{msg}</div> }</ErrorMessage>
              </div>
              <div>
                <label htmlFor='email'>Email</label>
                <Field name='email' type='email'/>
                <ErrorMessage name='email'>{msg => <div className='text-red text-xs italic'>{msg}</div> }</ErrorMessage>
              </div>
              <div>
                <label htmlFor='profession'>Profession</label>
                <Field name='profession' type='text'/>
                <ErrorMessage name='profession'>{msg => <div className='text-red text-xs italic'>{msg}</div> }</ErrorMessage>
              </div>
              <div>
                <label htmlFor='partner-profession'>Parner Profession</label>
                <Field name='parner-profession' type='text'/>
                <ErrorMessage name='parner-profession'>{msg => <div className='text-red text-xs italic'>{msg}</div> }</ErrorMessage>
              </div>
          
          

                <button type='submit'>Submit</button>
            </div>
          </div>
        </Form>
      </Formik>
  )
}