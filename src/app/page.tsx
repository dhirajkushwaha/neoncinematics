"use client"


import NavBar from "@/components/navBar";
import EventCard from "@/components/eventCard";
import Footer from "@/components/footer";
import Button from "@/components/button";
import Link from "next/link";


import Image from "next/image";

import "../styles/home.style.css"

import { useEffect, useRef } from 'react'; 

export default function Home() {
  return (
    
    <div>
     
      <div  className="hero flex justify-center" >
        {/* <img className="w-[100vw]" src="./assets/images/homepage-bg.jpg" alt="" /> */}
        <img src="./assets/images/hp-logo.svg" alt="" />

      </div>

      <div className="container py-5 mt-5 px-10  lg:px-0 lg:w-[1280px] lg:my-20  mx-auto DMSans" >
      
            <div className="flex flex-col gap-8 justify-center items-center lg:flex-row lg:gap-16"> 

              <div className=" mt-2 lg:w-[45%] " >
                <img className="rounded-[20px]"  src="https://i.pinimg.com/736x/af/23/0d/af230dc0fda2e962661e1c1239230eac.jpg"  alt="" /> 
              </div>
              <div className=" lg:w-[45%]">

                <h1 className="polysans  text-3xl lg:text-5xl" >About Us</h1>
                <p className="my-1 text-lg" >
                  At Neon Cinematics, we believe in the power of visuals to transcend words. Our work is a fusion of cinematic storytelling, dynamic photography, and immersive videography, all crafted to evoke emotions and create lasting impressions. Every frame we capture is meticulously designed to resonate with audiences, turning concepts into compelling narratives.

                </p>

                <div>

                </div>
                <Button  class="mt-5"  text="Learn More." />
              </div>


            </div>
        
      </div>


      <div className="teamSection flex flex-col items-center container py-10 mt-5 px-10 lg:px-0 lg:w-[1280px] lg:my-20   mx-auto DMSans" >
         
        <h1 className="polysans   text-3xl lg:text-5xl text-center" >Meet Our Team</h1>
        <img className="mt-5   rounded-[10px]" src="https://acorn.works/wp-content/uploads/2023/08/team-building-leadership.jpg" alt="" />
        <Button  class="mt-10"  text="Explore Team" />

      </div>



{/* Hehehe  */}
      {/* <div className=" container bg-white mx-auto 2xl:w-[1280px] polysans" >
        <div>
          <h1 className="" >About Us </h1>

        </div>
      </div> */}


      <div className="container px-7 polysans mx-auto"  >

        <div  className="text-3xl lg:text-7xl text-center my-[150px]   mx-auto">
          <p   >
            Neon is all about <br /> Creativity, Ideas and Filming
          </p>
            <p style={{color:"black", textShadow:"0px 0px 2px orange", userSelect:"none" }} >Official Cinematic Club</p>

        </div>

      </div>


      <div className="mx-auto w-[80vw] xl:w-[1024px]"  >
        {/* <h1 className="text-5xl text-center" style={{fontFamily:"polysans"}} >Events</h1> */}

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

       
        </div>

        <div className="Event-element py-[10px] px-[20px] lg:py-[20px] lg:px-[30px] flex items-center justify-between" >
          <h1 className="polysans  text-3xl lg:text-4xl" >Events </h1>
          <Link href="">   
          <div className="flex flex-row items-center hover:opacity-60">
            <span>All Events</span>
            <img className="ml-[5px] h-[25px]" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWElEQVR4nO2Y30rDMBSH013MP49ofQ9RYU5RER9Ab7a3UfYO6isIIl4oFD4JixpD7ZLupEY5H/Rq4+T3tSdpGmMURVGUvwQwAnaBvYjL/q8yJeFCpVBLDbwNnAAPQBMx8BtwJiAwlQq/IJ3nllqVvavARXBdAk+5BOydT8U+gdOEeTH/oY6IgG2bD/aB8dpFv4efBaEfpQX8ns8dfgYcSwt8IpL8ay5cB+HnTmpatEBXeLP8vVyBVeGLFnDhr7rCFyvQMWFHK1529a8LpIQPXnY7InuhdQRi2yYrfQWKCN9XILVtShSoiwgvJBAdHjgHXtq24kMLVG4VSVpJWO5iLa+9A0uuQkWMhQrEgz6BFrSFEkBb6J+2UJPjoz4E2PDGaYwUwbHKQQ4JYAwceuPcSRb3jzmGYiIpsAXcDhj+BtgUE/AkjoD7yMPdVBpXeyIeXlEURVFMobwDfaVfnvN75poAAAAASUVORK5CYII=" alt="external-link"></img> 
          </div> 
          
          
          
          </Link> 
        </div>
      </div>


<div className="mt-30 mx-auto w-[80vw] xl:w-[1024px]"  >
        {/* <h1 className="text-5xl text-center" style={{fontFamily:"polysans"}} >Events</h1> */}

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

       
        </div>

        <div className="Event-element py-[10px] px-[20px] lg:py-[20px] lg:px-[30px] flex items-center justify-between" >
          <h1 className="polysans  text-3xl lg:text-4xl" >Events </h1>
          <Link href="">   
          <div className="flex flex-row items-center hover:opacity-60">
            <span>All Events</span>
            <img className="ml-[5px] h-[25px]" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWElEQVR4nO2Y30rDMBSH013MP49ofQ9RYU5RER9Ab7a3UfYO6isIIl4oFD4JixpD7ZLupEY5H/Rq4+T3tSdpGmMURVGUvwQwAnaBvYjL/q8yJeFCpVBLDbwNnAAPQBMx8BtwJiAwlQq/IJ3nllqVvavARXBdAk+5BOydT8U+gdOEeTH/oY6IgG2bD/aB8dpFv4efBaEfpQX8ns8dfgYcSwt8IpL8ay5cB+HnTmpatEBXeLP8vVyBVeGLFnDhr7rCFyvQMWFHK1529a8LpIQPXnY7InuhdQRi2yYrfQWKCN9XILVtShSoiwgvJBAdHjgHXtq24kMLVG4VSVpJWO5iLa+9A0uuQkWMhQrEgz6BFrSFEkBb6J+2UJPjoz4E2PDGaYwUwbHKQQ4JYAwceuPcSRb3jzmGYiIpsAXcDhj+BtgUE/AkjoD7yMPdVBpXeyIeXlEURVFMobwDfaVfnvN75poAAAAASUVORK5CYII=" alt="external-link"></img> 
          </div> 
          
          
          
          </Link> 
        </div>
      </div>

 
    </div>
  );
}
