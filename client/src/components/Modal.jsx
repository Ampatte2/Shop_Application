import React, {useState, useRef} from "react";

export const Modal = ({toggle, content}) => {

    const inputRef = useRef(null);
    const [isShown, setIsShown] = useState(false);

    const hide = () => {
        document.removeEventListener("mousedown", outsideClick)
        setIsShown(false)
    };

    const show = () => {
        document.addEventListener("mousedown", outsideClick)
        setIsShown(true)
    };

    const outsideClick = (e) =>{        
        if(!inputRef.current.contains(e.target)){
            hide();
        }
    };

    return (
        <div ref={inputRef}>
         {!isShown && toggle(show)}
         {isShown && content(hide)}   
        </div>
    )
}
