import { useEffect } from "react";
import { useState } from "react";
function Typing({
    text,
    typingSpeed =100,
    deletingSpeed =5,
}){
    const [displayText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);
    useEffect(()=>{ 
        const handelTyping = () => {

        };
        const timeOut = setTimeout(handelTyping,
            isDeleting ? deletingSpeed : typingSpeed
        );
        

    })
    return (
        <div>
            <h1>Typing</h1>
        </div>
    )
}
export default Typing;