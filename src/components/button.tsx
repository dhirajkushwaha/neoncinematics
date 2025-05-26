import Link from "next/link"
type ButtonProp = {
    text: string,
    class: string, 
} 


export default function Button(props: ButtonProp){
    return(
        <div className={props.class} > 
            <button  className="Button" > {props.text} </button>

          
        </div>
    )
}