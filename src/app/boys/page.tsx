import { Fragment } from "react";
import DogsPage from "../components/DogList";

export default function GirlsPage() { 
  return (
    <Fragment>          
      <div className="text-7xl text-center py-5 text-sand">Boys</div>
      <DogsPage sex={'M'}/>
    </Fragment>

    )

} 