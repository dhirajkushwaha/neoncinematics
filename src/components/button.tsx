import Link from "next/link"
type ButtonProp = {
    text: string,
    clasName: string
} 


export default function Button(props: ButtonProp){
    return(
        <div className={props.className} >
            <Link href={""}>
            <button  className="Button" > {props.text} </button>

            </Link>
        </div>
    )
}