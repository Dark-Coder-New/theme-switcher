import React,{useState} from "react";
import colorContext from "./colorContext"


let morning = {color:"black", background:"white", border:"1px solid blue", align:"right"}
const Provider = (props) =>{
    
    let [style, setStyle] = useState(morning)


    return(
        <colorContext.Provider value={
           {
            style:style,
            morning: ()=>setStyle(morning),
            twilight: ()=>setStyle({color:"tomato", background:"green", border:"1px solid yellow", align:"left"}),
            night: ()=> setStyle({color:"white", background:"black", border:"1px solid red", align:"center"}),
           
            
           }
        }>



        {props.children}
        </colorContext.Provider>
    )
}

export default Provider