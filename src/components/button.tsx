import Link from "next/link"
type ButtonProp = {
    text: string,
    class: string
} 


export default function Button(props: ButtonProp){
    return(
        <div className={props.class} >
            <Link href={""}>
            <button  className="Button" > {props.text} </button>

            </Link>
        </div>
    )
}