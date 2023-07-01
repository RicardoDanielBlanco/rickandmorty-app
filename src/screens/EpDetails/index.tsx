import { useParams } from "react-router-dom";
import Details from "../Details";
import GoBackButton from "../../components/BackButton";


function EpDetails(){
  const {id} = useParams()
  const category = 'episode'
  return(
    <>
    <Details id={id} category={category}/>
    <GoBackButton />
    </>
  )
    
}

export default EpDetails;