
import { FormInfo } from "@/types/FormInfo"
import { readFileSync } from "fs"

interface IFormInfo {
  profile: FormInfo[], 
  questions: FormInfo[], 
  preferences: {
    gender: string,
    color: string[]
  },
  img?: string
}

const context: IFormInfo = {
  "profile": [
    { "question": "Today's date: ", "response": "1/1/1990"},
    { "question": "First and Last name: ", "response": "John Doe"}, 
    { "question": "Your birthdate: ", "response": "1/1/1990" },
    { "question": "Street address: ", "response": "1234 street"},
    { "question": "City: ", "response": "Portland" },
    { "question": "State: ", "response": "Oregon" },
    { "question": "Zipcode: ", "response": "12345" },
    { "question": "Phone #:", "response": "555-555-5555" },
    { "question": "E-mail address: ", "response": "test@email.com" },
    { "question": "Profession: ", "response": "Test Profession" },
    { "question": "Your partners profession: ", "response": "Test Partner Profession" }
  ], 
  "questions": [
    { 
      "question" : "Have you ever owned a cavalier or currently have one now? If not, do you know of any cavaliers?",
      "response" : "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
    },
    {
      "question": "Have you owned and/or raised a puppy before? If so, please tell me about your past or current dog(s) or any other pet you have owned? If not, please discuss with me what your plans to train a young puppy and know what to expect. If you haven't owned or raised a puppy before I'd be happy to help.", 
      "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
    },
    {
      "question": "Who will be the primary caregiver?", 
      "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
    },
    {
      "question": "What do you expect from your breeder?", 
      "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
    }, 
    {
      "question": "What kind of property do you reside in and since when have you resided there?", 
      "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
    }, 
    {
      "question": "If you are renting can you show proof of permission from owner?", 
      "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
    },
    {
      "question": "Do you have a garden? Is it properly fenced? (If you don't have a yard, that's fine too!)",
      "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
    },
    {
      "question": "How long daily will the Cavalier be left alone at home?", 
      "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
    }, 
    {
      "question": "How many adults and kids are in the household and what are kids ages?",
      "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
    },
    {
      "question": "Do they all agree to have a cavalier?",
      "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
    }, 
    {
      "question": "Explain your home schedules and routines:",
      "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
    }, 
    {
      "question": "On holidays, how are you planning to care for your Cavalier? *<a href='#boarding'>[1]</a>",
      "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
    },
    {
      "question": "Have you ever returned a pet to the breeder, given a pet away, or taken to a shelter? If so, please explain.",
      "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
    },
    {
      "question": "Who will be your permanent veterinarian? (You will need to take the puppy to one in the first 48 hours you bring the puppy home).",
      "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
    }, 
    {
      "question": "How would you manage if there is a behavior problem with your puppy?",
      "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
    }, 
    {
      "question": "What do you expect from your companion dog?", 
      "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
    }, 
    {
      "question": "Are you planning to take your puppy to training classes and give much of your time into training your new puppy? What are your plans to train your Cavalier?",
      "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
    },
    {
      "question": "Do you understand that a Cavalier King Charles Spaniel is a companion dog and is to be kept as primarily indoor dogs and are not fit as outdoor guard dogs?",
      "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
    },
    {
      "question": "Are you willing to pay the higher cost for a good-quality food for your cavalier? (This is essential to keep this specific breed healthy and live a longer life).",
      "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
    },
    {
      "question": "Pet dogs are not allowed to breed. Does this cause a problem?",
      "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
    },
    {
      "question": "Do you understand that puppies from my program will be on a spay/neuter contract and sold with a limited AKC registration? *<a href='#akc'>[2]</a>",
      "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
    },
    {
      "question": "Please note here anything else you want to share that hasn't been covered already:",
      "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
    }
  ], 
  "preferences": {
    "gender": "m",
    "color": ["ruby", "bnt"]
  }, 
}

const base64Encode = (file: any) => {
  const bitmap = readFileSync(file)
  return Buffer.from(bitmap).toString('base64')

}

const buildContext = (context: any): IFormInfo => {

  return {
    "profile": [
      { "question": "Today's date: ", "response": "1/1/1990"},
      { "question": "First and Last name: ", "response": "John Doe"}, 
      { "question": "Your birthdate: ", "response": "1/1/1990" },
      { "question": "Street address: ", "response": "1234 street"},
      { "question": "City: ", "response": "Portland" },
      { "question": "State: ", "response": "Oregon" },
      { "question": "Zipcode: ", "response": "12345" },
      { "question": "Phone #:", "response": "555-555-5555" },
      { "question": "E-mail address: ", "response": "test@email.com" },
      { "question": "Profession: ", "response": "Test Profession" },
      { "question": "Your partners profession: ", "response": "Test Partner Profession" }
    ], 
    "questions": [
      { 
        "question" : "Have you ever owned a cavalier or currently have one now? If not, do you know of any cavaliers?",
        "response" : "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      },
      {
        "question": "Have you owned and/or raised a puppy before? If so, please tell me about your past or current dog(s) or any other pet you have owned? If not, please discuss with me what your plans to train a young puppy and know what to expect. If you haven't owned or raised a puppy before I'd be happy to help.", 
        "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      },
      {
        "question": "Who will be the primary caregiver?", 
        "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      },
      {
        "question": "What do you expect from your breeder?", 
        "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      }, 
      {
        "question": "What kind of property do you reside in and since when have you resided there?", 
        "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      }, 
      {
        "question": "If you are renting can you show proof of permission from owner?", 
        "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      },
      {
        "question": "Do you have a garden? Is it properly fenced? (If you don't have a yard, that's fine too!)",
        "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      },
      {
        "question": "How long daily will the Cavalier be left alone at home?", 
        "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      }, 
      {
        "question": "How many adults and kids are in the household and what are kids ages?",
        "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      },
      {
        "question": "Do they all agree to have a cavalier?",
        "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      }, 
      {
        "question": "Explain your home schedules and routines:",
        "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      }, 
      {
        "question": "On holidays, how are you planning to care for your Cavalier? *<a href='#boarding'>[1]</a>",
        "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      },
      {
        "question": "Have you ever returned a pet to the breeder, given a pet away, or taken to a shelter? If so, please explain.",
        "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      },
      {
        "question": "Who will be your permanent veterinarian? (You will need to take the puppy to one in the first 48 hours you bring the puppy home).",
        "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      }, 
      {
        "question": "How would you manage if there is a behavior problem with your puppy?",
        "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      }, 
      {
        "question": "What do you expect from your companion dog?", 
        "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      }, 
      {
        "question": "Are you planning to take your puppy to training classes and give much of your time into training your new puppy? What are your plans to train your Cavalier?",
        "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      },
      {
        "question": "Do you understand that a Cavalier King Charles Spaniel is a companion dog and is to be kept as primarily indoor dogs and are not fit as outdoor guard dogs?",
        "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      },
      {
        "question": "Are you willing to pay the higher cost for a good-quality food for your cavalier? (This is essential to keep this specific breed healthy and live a longer life).",
        "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      },
      {
        "question": "Pet dogs are not allowed to breed. Does this cause a problem?",
        "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      },
      {
        "question": "Do you understand that puppies from my program will be on a spay/neuter contract and sold with a limited AKC registration? *<a href='#akc'>[2]</a>",
        "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      },
      {
        "question": "Please note here anything else you want to share that hasn't been covered already:",
        "response": "Praesent et molestie metus. Mauris euismod euismod leo, ac molestie arcu ultricies eu. Suspendisse ac elit at orci pretium aliquam. Nulla et imperdiet libero, at iaculis massa. Sed nec ligula congue, euismod nulla sit amet, pellentesque neque. Integer rhoncus tincidunt eros, eget ultricies odio vestibulum condimentum. Mauris faucibus ornare eros, nec sodales nunc imperdiet in. Sed sed tincidunt massa. Suspendisse vel nunc dictum, cursus risus sit amet, volutpat massa. Suspendisse mattis justo eget pretium dapibus. Maecenas leo nibh, aliquet ut faucibus sed, accumsan in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu odio mauris. Ut pretium ac velit sit amet ornare."
      }
    ], 
    "preferences": {
      "gender": "m",
      "color": ["ruby", "bnt"]
    }, 
    "img": base64Encode(context)
  }
}


export default context
export { buildContext }


