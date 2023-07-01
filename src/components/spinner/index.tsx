import { RingLoader } from "react-spinners";

function Spinner(){
    return (
        <div className="conteinerCard">
            <RingLoader
                color="rgb(49, 181, 214)"
                loading
                size={200} 
            />
        </div>
    )
}

export default Spinner;