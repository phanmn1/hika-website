
import { IApplicationFormValues } from "@/app/backend/ApplicationForm"
import { QuestionItem } from "@/data/questions"
import { FormInfo } from "@/types/FormInfo"
import { readFileSync } from "fs"

const base64Encode = (file: string) => {
  const bitmap = readFileSync(file)
  return Buffer.from(bitmap).toString('base64')

}

const getCurrentDate = () => {
  const date = new Date()
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  return `${month}/${day}/${year}`

}

const buildContext = (context: IApplicationFormValues, questions: QuestionItem[], img: string) => {

  const profile = [
    { "question": "Today's Date: ", "response": getCurrentDate()},
    { "question": "First and Last name: ", "response": `${context['firstName']} ${context['lastName']}` },
    { "question": "Your birthdate: ", "response": context['birthdate'] }, 
    { "question": "Street address: ", "response": context['address'] },
    { "question": "City: ", "response": context['city'] }, 
    { "question": "State: ", "response": context['state'] },
    { "question": "Zipcode: ", "response": context['zip'] },
    { "question": "Phone #: ", "response": context['phone'] },
    { "question": "E-mail address: ", "response": context['email'] },
    { "question": "Profession ", "response": context['profession'] }, 
    { "question": "Your parners' profession: ", "response": context['partnerProfession']}
  ]

  const responsesArray =  questions.map((question, index) => {
    const qIndex = `question${index + 1}`
    return { "question": question['question'], "response": context[qIndex as keyof typeof context]}
  })

  const preferences = {
    "gender": context['gender'].toLowerCase(),
    "color": context['preference']
  }
  

  return {
    "profile": profile,
    "questions": responsesArray,
    "preferences": preferences, 
    "img": base64Encode(img)
  }
}


export { buildContext }


