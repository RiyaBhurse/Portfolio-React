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
    var str = "";
    

}
export default Typing;