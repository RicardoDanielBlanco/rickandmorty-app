import { useParams } from "react-router-dom";
import Details from "../Details";
import GoBackButton from "../../components/BackButton";


function PjDetails(){
  const {id} = useParams()
  const category = 'character'
  return(
    <>
    <Details id={id} category={category}/>
    <GoBackButton />
    </>
  )
    
}

export default PjDetails;