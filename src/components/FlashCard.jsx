import { useState } from "react"
import GetPokes from "../data/Pokes.jsx";
import uuid from 'react-uuid'



export default function FlashCard({key= uuid(), title = "jujuba", description = 'descricao'}){

    const [showImage, setShowImage] = useState(true);

    function handleCardClick(){
        setShowImage(currentshowImage => !currentshowImage);
    }
    
    return(
        <div className='shadow-lg p-4 w-60 h-36 flex flex-row items-center justify-center bg-blue' onClick = {handleCardClick}>
            {showImage? title : description} 
        </div>
    )
}