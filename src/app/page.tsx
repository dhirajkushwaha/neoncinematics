"use client"


import NavBar from "@/components/navBar";
import EventCard from "@/components/eventCard";
import Footer from "@/components/footer";
import Image from "next/image";

import "../styles/home.style.css"

import { useEffect, useRef } from 'react'; 

export default function Home() {
  return (
    
    <div>
      <NavBar />
      <div  className="hero flex justify-center" >
        {/* <img className="w-[100vw]" src="./assets/images/homepage-bg.jpg" alt="" /> */}
        <img src="./assets/images/hp-logo.svg" alt="" />

      </div>

      <div className="container mx-auto" style={{fontFamily:"polysans"}}>

        <div  className="text-7xl text-center my-[150px]   mx-auto">
          <p   >
            Neon is all about <br /> Creativity, Ideas and Filming

          </p>
            <p style={{color:"black", textShadow:"0px 0px 2px orange", userSelect:"none" }} >Official Cinematic Club</p>

        </div>

      </div>


      <div className="mx-auto w-[80vw] xl:w-[1024px]"  >
        <h1 className="text-5xl text-center" style={{fontFamily:"polysans"}} >Events</h1>

        <div className="EventCard flex flex-wrap mt-10 gap-[4px]">
          <EventCard 
            img="https://i.pinimg.com/736x/af/23/0d/af230dc0fda2e962661e1c1239230eac.jpg" 
            title="CineSnap" 
            desc="Lorem ipsum dolor sit amet, but first, coffee. Bacon ipsum dolor amet brisket t-bone pork belly. If you’re still reading this, you probably need more caffeine. Insert more buzzwords here. 🚀" 
            
            />

                      <EventCard 
            img="https://i.pinimg.com/736x/af/23/0d/af230dc0fda2e962661e1c1239230eac.jpg" 
            title="CineSnap" 
            desc="Lorem ipsum dolor sit amet, but first, coffee. Bacon ipsum dolor amet brisket t-bone pork belly. If you’re still reading this, you probably need more caffeine. Insert more buzzwords here. 🚀" 
            
            />
            <EventCard 
            img="https://i.pinimg.com/736x/af/23/0d/af230dc0fda2e962661e1c1239230eac.jpg" 
            title="CineSnap" 
            desc="Lorem ipsum dolor sit amet, but first, coffee. Bacon ipsum dolor amet brisket t-bone pork belly. If you’re still reading this, you probably need more caffeine. Insert more buzzwords here. 🚀" 
            
            />

            <EventCard 
            img="https://i.pinimg.com/736x/af/23/0d/af230dc0fda2e962661e1c1239230eac.jpg" 
            title="CineSnap" 
            desc="Lorem ipsum dolor sit amet, but first, coffee. Bacon ipsum dolor amet brisket t-bone pork belly. If you’re still reading this, you probably need more caffeine. Insert more buzzwords here. 🚀" 
            
            />
        </div>
      </div>



      <Footer />
    </div>
  );
}
