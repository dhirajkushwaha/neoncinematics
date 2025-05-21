
import Link from 'next/link'


export default function NavBar(){


    return(
        <div className='mx-auto w-[80vw] xl:w-[1024px] h-[100px] flex justify-between items-center uppercase navBar ' 
        style={{ fontFamily:"polysans",   }}
        >
            <Link  href="./" >Home</Link>
            <Link  href="./events" >Events</Link>
            <Link  href="./team" >Team</Link>
            <Link  href="./goal" >Goal</Link>
            <Link  href="./blog" >Blog</Link>
            <Link  href="./shot" >Shots</Link>
            <Link  href="./about" >About</Link>






        </div>
    )
}