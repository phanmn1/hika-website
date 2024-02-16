import { Fragment } from "react";
import DogDetail from "../../components/DogDetail"
import { dogs } from '../../data/dogArray'
import { DogInfo } from "../../types/DogInfo";
import LineSeparator from "@/app/components/LineSeparator";

const markLastItem = (dogs: DogInfo[]) => {
  let lastElement = dogs[dogs.length - 1] // get last element
  lastElement.isLast = true
  return dogs
}

interface IDogsProps {
  params: {sex: 'boys' | 'girls'}
}

export default function DogsPage({params}: IDogsProps)  {

  const { sex } = params
  
  const filteredDogs = dogs.filter((item) => {
    const _sex = params.sex === 'boys' ? 'M' : 'F'
    return item.sex === _sex
  })
  
  const markedArray = markLastItem(filteredDogs)

  const title = sex.charAt(0).toUpperCase() + sex.slice(1)

  return (
    <Fragment>
      <div className="text-7xl text-center py-5 text-sand">{title}</div>
      <LineSeparator/>
      <div className="text-sand py-9 md:mx-auto max-w-3xl mx-5"> 
             {markedArray.map((item) => <DogDetail key={item.callName} {...item}/>)} 
      </div>
    </Fragment>

  )
}
    
