import React,{useContext, useState} from "react";

import colorContext from "../context/colorContext"


const Hello = () =>{
     
    let {style, morning, twilight, night} = useContext(colorContext)
    let [count, setCount] = useState(1)
    let [styleName, setStyleName] = useState("Twilight")


    function changeStyle(){
          if(count ==  1){
            twilight()
            setStyleName("Night")
            setCount(count+1)
          }
            else if(count == 2){
                night()
                setStyleName("Morning")
                setCount(count+1)
            }
            else{
                morning()
                setStyleName("Twilight")
                setCount(1)
            }
    }

    return(
        <div>
              <h1> Switch the theme</h1>

              <div style={{color: style.color, backgroundColor: style.background,
                border: style.border, 
                textAlign: style.align
            }}>
                   <h1>Abhishek</h1>
                   <p>I am a Software Developer</p>
                   <button>Know More</button>
              </div>
                <br/><br/>
                <button onClick={changeStyle}>{styleName}</button>
               
        </div>
    )
}

export default Hello