'use client'
import ApplicationFormValidationSchema from './ApplicationFormValidationSchema';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { FocusEvent, useState } from 'react';

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
  const [inputType, setInputType] = useState('text') 
	
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
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor='firstName' className='block text-sm font-medium leading-6 text-sand mb-2'>First Name</label>
                <Field name='firstName' type='text' placeholder="Firstname" className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                <ErrorMessage name='lastName'>{msg => <div className='text-red-500 text-xs italic mt-1'><sup>*</sup>{msg}</div>}</ErrorMessage>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor='lastName' className='block text-sm font-medium leading-6 text-sand mb-2'>Last Name</label>
                <Field name='lastName' type='text' placeholder="Lastname" className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                <ErrorMessage name='lastName'>{msg => <div className='text-red-500 text-xs italic mt-1'>{msg}</div>}</ErrorMessage>
              </div>



              <div className='col-span-full'>
                <label htmlFor='address' className='block text-sm font-medium leading-6 text-sand mb-2'>Address</label>
                <Field name='address' type='text' placeholder='Address' className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                <ErrorMessage name='address'>{msg => <div className='text-red text-xs italic'>{msg}</div> }</ErrorMessage>
              </div> 

              <div className='sm:col-span-2'>
                <label htmlFor='city' className='block text-sm font-medium leading-6 text-sand mb-2'>City</label>   
                <Field name='city' type='text' placeholder='City' className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                <ErrorMessage name='city'>{msg => <div className='text-red text-xs italic'>{msg}</div> }</ErrorMessage>
              </div>

              <div className='sm:col-span-2'>
                <label htmlFor='state' className='block text-sm font-medium leading-6 text-sand mb-2'>State</label>   
                <Field name='state' type='text' placeholder='State' className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                <ErrorMessage name='state'>{msg => <div className='text-red text-xs italic'>{msg}</div> }</ErrorMessage>
              </div>

              <div className='sm:col-span-2'>
                <label htmlFor='zip' className='block text-sm font-medium leading-6 text-sand mb-2'>Zip</label>   
                <Field name='zip' type='text' placeholder='xxxxx' className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                <ErrorMessage name='zip'>{msg => <div className='text-red text-xs italic'>{msg}</div> }</ErrorMessage>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor='birthdate' className='block text-sm font-medium leading-6 text-sand mb-2'>Birthdate</label>
                <Field name='birthdate' type='date' className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>                  
                <ErrorMessage name='birthdate'>{msg => <div className='text-red-500 text-xs italic mt-1'>{msg}</div> }</ErrorMessage>
              </div>

              <div className='sm:col-span-3'>
                <label htmlFor='phone' className='block text-sm font-medium leading-6 text-sand mb-2'>Phone</label>   
                <Field name='phone' type='tel' placeholder="xxx-xxx-xxxx" className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                <ErrorMessage name='phone'>{msg => <div className='text-red text-xs italic'>{msg}</div> }</ErrorMessage>
              </div>
              
              <div className='col-span-full'>
                <label htmlFor='email' className='block text-sm font-medium leading-6 text-sand mb-2'>E-mail</label>
                <Field name='email' type='text' placeholder='username@google.com' className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                <ErrorMessage name='email'>{msg => <div className='text-red text-xs italic'>{msg}</div> }</ErrorMessage>
              </div> 

              <div className='col-span-full'>
                <label htmlFor='profession' className='block text-sm font-medium leading-6 text-sand mb-2'>Profession</label>
                <Field name='profession' type='text' placeholder='Profession' className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                <ErrorMessage name='professsion'>{msg => <div className='text-red text-xs italic'>{msg}</div> }</ErrorMessage>
              </div> 
              <div className='col-span-full'>
                <label htmlFor='partner-profession' className='block text-sm font-medium leading-6 text-sand mb-2'>Parner Profession</label>
                <Field name='partner-profession' type='text' placeholder='Partner Profession' className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                <ErrorMessage name='partner-rofesssion'>{msg => <div className='text-red text-xs italic'>{msg}</div> }</ErrorMessage>
              </div> 
          
          

                <button type='submit'>Submit</button>
            </div>
          </div>
        </Form>
      </Formik>
  )
}