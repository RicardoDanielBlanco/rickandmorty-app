import { useParams } from "react-router-dom";
import Details from "../Details";
import GoBackButton from "../../components/BackButton";


function LocDetails(){
  const {id} = useParams()
  const category = 'location'
  return(
    <>
    <Details id={id} category={category}/>
    <GoBackButton />
    </>
  )
    
}

export default LocDetails;