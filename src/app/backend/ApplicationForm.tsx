'use client'
import ApplicationFormValidationSchema from './ApplicationFormValidationSchema';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import QuestionArray, { QuestionItem } from '@/data/questions'

export interface IApplicationFormValues {
    firstName: string
    lastName: string
    birthdate: string
    //todayDate: string
    address: string
    city: string
    state: string
    zip: string
    phone: string
    email: string
    profession: string
    partnerProfession: string, 
    question1: string,
    question2: string,
    question3: string,
    question4: string,
    question5: string,
    question6: string,
    question7: string,
    question8: string,
    question9: string,
    question10: string,
    question11: string,
    question12: string,
    question13: string, 
    question14: string,
    question15: string, 
    question16: string,
    question17: string, 
    question18: string,
    question19: string,
    question20: string,
    question21: string,
    gender: string,
    preference: string[]
}

const initalValues: IApplicationFormValues = {
    firstName: '', 
    lastName: '', 
    birthdate: '',
    //todayDate: '',
    address: '', 
    city: '', 
    state: '', 
    zip: '', 
    phone: '',
    email: '', 
    profession: '',
    partnerProfession: '',
    question1: '', 
    question2: '', 
    question3: '',
    question4: '', 
    question5: '',
    question6: '',
    question7: '', 
    question8: '', 
    question9: '', 
    question10: '',
    question11: '', 
    question12: '', 
    question13: '', 
    question14: '', 
    question15: '', 
    question16: '', 
    question17: '', 
    question18: '', 
    question19: '', 
    question20: '', 
    question21: '', 
    gender: 'Male', 
    preference: []



}

export default function ApplicationForm (props: any) {
  return (
    <Formik
      initialValues={initalValues}
      validationSchema={ApplicationFormValidationSchema}
      onSubmit={async (values, { setSubmitting}) => {
        console.log(values)
        await props.handleSubmit(values)
      }}>
        <Form className='self-center'>
          <div className="w-full max-w-5xl">
            {/* Profile Information */}
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 px-3 py-4 border-2 rounded-lg mb-4">
              <div className='block col-span-full text-sand text-2xl'>Profile Information</div>
              <div className="sm:col-span-3">
                <label htmlFor='firstName' className='block text-sm font-medium leading-6 text-sand mb-2'>First Name</label>
                <Field name='firstName' type='text' placeholder="Firstname" className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                <ErrorMessage name='firstName'>{msg => <div className='text-red-500 text-xs italic mt-2'><sup>*</sup>{msg}</div>}</ErrorMessage>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor='lastName' className='block text-sm font-medium leading-6 text-sand mb-2'>Last Name</label>
                <Field name='lastName' type='text' placeholder="Lastname" className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                <ErrorMessage name='lastName'>{msg => <div className='text-red-500 text-xs italic mt-2'><sup>*</sup>{msg}</div>}</ErrorMessage>
              </div>

              <div className='col-span-full'>
                <label htmlFor='address' className='block text-sm font-medium leading-6 text-sand mb-2'>Address</label>
                <Field name='address' type='text' placeholder='Address' className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                <ErrorMessage name='address'>{msg => <div className='text-red-500 text-xs italic mt-2'><sup>*</sup>{msg}</div>}</ErrorMessage>
              </div> 

              <div className='sm:col-span-2'>
                <label htmlFor='city' className='block text-sm font-medium leading-6 text-sand mb-2'>City</label>   
                <Field name='city' type='text' placeholder='City' className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                <ErrorMessage name='city'>{msg => <div className='text-red-500 text-xs italic mt-2'><sup>*</sup>{msg}</div>}</ErrorMessage>
              </div>

              <div className='sm:col-span-2'>
                <label htmlFor='state' className='block text-sm font-medium leading-6 text-sand mb-2'>State</label>   
                <Field name='state' type='text' placeholder='State' className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                <ErrorMessage name='state'>{msg => <div className='text-red-500 text-xs italic mt-2'><sup>*</sup>{msg}</div>}</ErrorMessage>
              </div>

              <div className='sm:col-span-2'>
                <label htmlFor='zip' className='block text-sm font-medium leading-6 text-sand mb-2'>Zip</label>   
                <Field name='zip' type='text' placeholder='xxxxx' className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                <ErrorMessage name='zip'>{msg => <div className='text-red-500 text-xs italic mt-2'><sup>*</sup>{msg}</div>}</ErrorMessage>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor='birthdate' className='block text-sm font-medium leading-6 text-sand mb-2'>Birthdate</label>
                <Field name='birthdate' type='date' className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>                  
                <ErrorMessage name='birthdate'>{msg => <div className='text-red-500 text-xs italic mt-2'><sup>*</sup>{msg}</div>}</ErrorMessage>
              </div>

              <div className='sm:col-span-3'>
                <label htmlFor='phone' className='block text-sm font-medium leading-6 text-sand mb-2'>Phone</label>   
                <Field name='phone' type='tel' placeholder="xxx-xxx-xxxx" className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                <ErrorMessage name='phone'>{msg => <div className='text-red-500 text-xs italic mt-2'><sup>*</sup>{msg}</div>}</ErrorMessage>
              </div>
              
              <div className='col-span-full'>
                <label htmlFor='email' className='block text-sm font-medium leading-6 text-sand mb-2'>E-mail</label>
                <Field name='email' type='text' placeholder='username@google.com' className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                <ErrorMessage name='email'>{msg => <div className='text-red-500 text-xs italic mt-2'><sup>*</sup>{msg}</div> }</ErrorMessage>
              </div> 

              <div className='col-span-full'>
                <label htmlFor='profession' className='block text-sm font-medium leading-6 text-sand mb-2'>Profession</label>
                <Field name='profession' type='text' placeholder='Profession' className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                <ErrorMessage name='profession'>{msg => <div className='text-red-500 text-xs italic mt-2'><sup>*</sup>{msg}</div>}</ErrorMessage>
              </div> 
              <div className='col-span-full'>
                <label htmlFor='partnerProfession' className='block text-sm font-medium leading-6 text-sand mb-2'>Parner Profession</label>
                <Field name='partnerProfession' type='text' placeholder='Partner Profession' className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                <ErrorMessage name='partnerProfession'>{msg => <div className='text-red-500 text-xs italic mt-2'><sup>*</sup>{msg}</div>}</ErrorMessage>
              </div> 
            </div>

            {/* Question forms  */}
            <div className='flex flex-col gap-y-8 px-3 py-4 border-2 rounded-lg mb-4'>
            <div className='block col-span-full text-sand text-2xl'>Questionaire</div> 
              {questions(QuestionArray)}
            </div>

            {/* Preferences */}
            <div className='flex flex-col gap-y-8 px-3 py-4 border-2 rounded-lg'>
            <div className='block col-span-full text-sand text-2xl'>Prospective owner's preferences:</div>

              <div>
                <label htmlFor='gender' className='font-medium leading-6 text-sand mb-2 mr-2'>Gender preference</label>
                <Field name='gender' as='select' className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Field>
              </div>

              <div className='mb-2'>
                <span className='font-medium leading-6 text-sand'>Color Preference (select any that apply)</span>
                <div role='group'>
                <div>
                  <label className='inline-flex items-center'>
                    <Field name='preference' value='ruby' type='checkbox' className='form-checkbox h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'/>
                    <span className='ml-2 text-sand'>Ruby</span>
                  </label> 
                </div>
                
                <div>
                  <label className='inline-flex items-center'>
                    <Field name='preference' value='bnt' type='checkbox' className='form-checkbox h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'/>
                    <span className='ml-2 text-sand'>Black & Tan</span>
                  </label> 
                </div>

                <div>
                  <label className='inline-flex items-center'>
                    <Field name='preference' value='tricolor' type='checkbox' className='form-checkbox h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'/>
                    <span className='ml-2 text-sand'>Tricolor</span>
                  </label> 
                </div>

                <div>
                  <label className='inline-flex items-center'>
                    <Field name='preference' value='blenheim' type='checkbox' className='form-checkbox h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'/>
                    <span className='ml-2 text-sand'>Blenheim</span>
                  </label> 
                </div>

                <div>
                  <label className='inline-flex items-center'>
                    <Field name='preference' value='any' type='checkbox' className='form-checkbox h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'/>
                    <span className='ml-2 text-sand'>Any</span>
                  </label> 
                </div>
                <ErrorMessage name='preference'>{msg => <div className='text-red-500 text-xs italic mt-2'><sup>*</sup>{msg}</div>}</ErrorMessage>
                </div>

              </div>

              </div>

            <div className='mt-6 flex items-center justify-end gap-x-6'>
              <button type='button' className='text-sm font-semibold leading-6'>Cancel</button>
              <button type='submit' className='rounded-md bg-header px-3 py-2 text-sm font-semibold text-sand'>Submit</button>
            </div> 
            </div>
          </Form>
        </Formik>
    )
  }

  const questions = (questions: QuestionItem[]) => {
    const jsx = questions.map((question) => {
      return (
        <div className='my-5' key={question["id"]}>
          <label htmlFor={`question${question["id"]}`} className='block text-sm font-medium leading-6 text-sand mb-2'>{question.question}</label>
          <Field name={`question${question["id"]}`} as='textarea' placeholder='response' className='form-textarea rounded-md block w-full px-3 py-1.5'/>
          <ErrorMessage name={`question${question["id"]}`}>{msg => <div className='text-red-500 text-xs italic mt-2'><sup>*</sup>{msg}</div>}</ErrorMessage>
        </div>
      )
    })

    return jsx
  }