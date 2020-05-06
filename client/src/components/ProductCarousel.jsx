import React, {useState} from 'react'

export const ProductCarousel = (props) => {
    const [index, setIndex] = useState({current: 0, max: props.images.length -1});

    const nextPicture = (change) =>{
        setIndex({current: index.current + change, max: index.max})
    }
    
    return (
        <div>
            {index.current>0 && <button onClick={()=>nextPicture(-1)}>Previous</button> }
            {index.current<index.max && <button onClick={()=>nextPicture(1)}>Next</button> }

            {props.images.map((image, i)=>{
                return <div key={i}>{ i===index.current && <img src={image} />}</div>
            })}
        </div>
    )
}
