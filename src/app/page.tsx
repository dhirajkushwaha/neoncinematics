"use client"

import NavBar from "@/components/navBar";
import EventCard from "@/components/eventCard";
import Footer from "@/components/footer";
import Button from "@/components/button";
import Link from "next/link";
import gsap from "gsap";
import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"

import Image from "next/image";

import "../styles/home.style.css"

import { useEffect, useRef, useLayoutEffect } from 'react';

export default function Home() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const heroRef = useRef<HTMLHeadingElement>(null);


  useLayoutEffect(() => {
    if (!titleRef.current) return;



    gsap.fromTo(
      titleRef.current,
      { y: 0, opacity: 0 },
      {
        y: 0,

        opacity: 1,
        duration: 0.5,
        // ease: 'power2.out',
      }
    );
    gsap.fromTo(
      heroRef.current,
      {
        opacity: 0,
        // backgroundPositionX:"-200px" 

      },
      {

        opacity: 1,
        duration: 1,
        // backgroundPositionX:"0px" ,

        // ease: 'power2.out',
      },
    );
  }, []);
  return (

    <div className="DMSans">

      <div ref={heroRef} className="hero flex items-center justify-center h-[80vh] opacity-0" >
        {/* <img className="w-[100vw]" src="./assets/images/homepage-bg.jpg" alt="" /> */}
        {/* <img src="./assets/images/hp-logo.svg" alt="" /> */}

        <h1 ref={titleRef} className=" opacity-0 neon3 fontfg text-5xl uppercase italic text-center lg:text-8xl">Neon <br /> Cinematics </h1>

      </div>

      <div className="container py-5 mt-5 px-10  lg:px-0 lg:w-[1280px] lg:my-20  mx-auto DMSans" >

        <div className="flex flex-col gap-8 justify-center items-center lg:flex-row lg:gap-16">

          <div className=" mt-2 w-[100%] lg:w-[45%] " >
            <img className="rounded-[20px]" src="./assets/images/events/abt - 2.jpg" alt="" />
          </div>
          <div className=" lg:w-[45%]">

            <h1 className="polysans  text-3xl lg:text-5xl" >About Us</h1>
            <p className="my-1 text-lg" >
              At Neon Cinematics, we believe in the power of visuals to transcend words. Our work is a fusion of cinematic storytelling, dynamic photography, and immersive videography, all crafted to evoke emotions and create lasting impressions. Every frame we capture is meticulously designed to resonate with audiences, turning concepts into compelling narratives.

            </p>

            <div>

            </div>

            <button className="ButtonA    mt-[20px] py-[6px] px-[15px] lg:py-[12px] lg:px-[20px]  " >
              <Link href={"./about"} >
                Learn More.
              </Link>
            </button>
          </div>


        </div>

      </div>


      <div className="teamSection flex flex-col items-center container  mt-5 px-3 lg:py-8 py-4 lg:px-0 lg:w-[1280px] lg:my-20   mx-auto DMSans" >

        <h1 className="polysans   text-3xl lg:text-5xl text-center" >Meet Our Team</h1>
        <img className="mt-5 lg:w-[90%]  rounded-[10px]" src="./assets/images/team/team.jpg" alt="" />
        {/* <Button  class="mt-[-70px]"  text="Explore Team" /> */}
        <button className="ButtonA    mt-[20px] py-[6px] px-[15px] lg:py-[12px] lg:px-[20px] lg:mb-[40px] lg:mt-[-80px]" >
          <Link href={"./team"} >
            Explore Team
          </Link>
        </button>


      </div>



      {/* Hehehe  */}
      {/* <div className=" container bg-white mx-auto 2xl:w-[1280px] polysans" >
        <div>
          <h1 className="" >About Us </h1>

        </div>
      </div> */}


      <div className="container px-7 polysans mx-auto"  >

        <div className="text-3xl lg:text-7xl text-center my-[150px]   mx-auto">
          <p   >
            Neon is all about <br /> Creativity, Ideas and Filming
          </p>
          <p className="DMSans" style={{ color: "black", textShadow: "0px 0px 2px orange", userSelect: "none" }} >Official Cinematic Club</p>

        </div>

      </div>



      <div className="mt-30 mx-auto w-[90vw] xl:w-[1024px] bg-[#141414] p-[25px] rounded-[20px]"  >
        {/* <h1 className="text-5xl text-center" style={{fontFamily:"polysans"}} >Events</h1> */}

        <div className="  px-[20px]   lg:px-[20px] flex items-center border-none justify-between" >
          <h1 className="polysans  text-3xl lg:text-4xl" >Shots </h1>
          <Link href="./shots">
            <div className="flex flex-row items-center hover:opacity-60">
              <span>Gallary</span>
              <img className="ml-[5px] h-[25px] " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWElEQVR4nO2Y30rDMBSH013MP49ofQ9RYU5RER9Ab7a3UfYO6isIIl4oFD4JixpD7ZLupEY5H/Rq4+T3tSdpGmMURVGUvwQwAnaBvYjL/q8yJeFCpVBLDbwNnAAPQBMx8BtwJiAwlQq/IJ3nllqVvavARXBdAk+5BOydT8U+gdOEeTH/oY6IgG2bD/aB8dpFv4efBaEfpQX8ns8dfgYcSwt8IpL8ay5cB+HnTmpatEBXeLP8vVyBVeGLFnDhr7rCFyvQMWFHK1529a8LpIQPXnY7InuhdQRi2yYrfQWKCN9XILVtShSoiwgvJBAdHjgHXtq24kMLVG4VSVpJWO5iLa+9A0uuQkWMhQrEgz6BFrSFEkBb6J+2UJPjoz4E2PDGaYwUwbHKQQ4JYAwceuPcSRb3jzmGYiIpsAXcDhj+BtgUE/AkjoD7yMPdVBpXeyIeXlEURVFMobwDfaVfnvN75poAAAAASUVORK5CYII=" alt="external-link"></img>
            </div>



          </Link>
        </div>

        <div className="flex flex-wrap justify-between gap-1 mt-3" >
          <img className="lg:w-[33%]" src="./assets/images/shots/tnv (5).jpg" alt="" />
          <img className="lg:w-[33%]" src="./assets/images/shots/shotG1.jpg" alt="" />
          <img className="lg:w-[33%]" src="./assets/images/shots/shotG2.jpg" alt="" />
          <img className="lg:w-[33%]" src="./assets/images/homePage/advk (2).jpg" alt="" />
          <img className="lg:w-[33%]" src="./assets/images/homePage/ksh (1).jpg" alt="" />
          <img className="lg:w-[33%]" src="./assets/images/homePage/vsh (3).jpg" alt="" />




        </div>
      </div>


      <div className="mt-30 mx-auto w-[90vw] xl:w-[1024px]   bg-[#141414] p-[23px] py-6 px-8 rounded-[20px]"  >
        {/* <h1 className="text-5xl text-center" style={{fontFamily:"polysans"}} >Events</h1> */}

        <div className="   px-[20px]   lg:px-[20px] flex items-center border-none justify-between" >
          <h1 className="polysans  text-3xl lg:text-4xl" >Events </h1>
          <Link href="./events">
            <div className="flex flex-row items-center hover:opacity-60">
              <span>All Events</span>
              <img className="ml-[5px] h-[25px]" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWElEQVR4nO2Y30rDMBSH013MP49ofQ9RYU5RER9Ab7a3UfYO6isIIl4oFD4JixpD7ZLupEY5H/Rq4+T3tSdpGmMURVGUvwQwAnaBvYjL/q8yJeFCpVBLDbwNnAAPQBMx8BtwJiAwlQq/IJ3nllqVvavARXBdAk+5BOydT8U+gdOEeTH/oY6IgG2bD/aB8dpFv4efBaEfpQX8ns8dfgYcSwt8IpL8ay5cB+HnTmpatEBXeLP8vVyBVeGLFnDhr7rCFyvQMWFHK1529a8LpIQPXnY7InuhdQRi2yYrfQWKCN9XILVtShSoiwgvJBAdHjgHXtq24kMLVG4VSVpJWO5iLa+9A0uuQkWMhQrEgz6BFrSFEkBb6J+2UJPjoz4E2PDGaYwUwbHKQQ4JYAwceuPcSRb3jzmGYiIpsAXcDhj+BtgUE/AkjoD7yMPdVBpXeyIeXlEURVFMobwDfaVfnvN75poAAAAASUVORK5CYII=" alt="external-link"></img>
            </div>



          </Link>
        </div>

        <div className="flex justify-between items-center" >
                <div className="max-w-6xl mt-4 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    <div className="bg-[#121212] text-white rounded-xl overflow-hidden shadow-md border border-gray-800 hover:shadow-gray-500/30 transition-shadow">
                        {/* <img src={image} alt={title} className="w-full h-48 object-cover" /> */}
                   
<LiteYouTubeEmbed  
  aspectHeight={9}
  aspectWidth={16}
  id="c6WOUab3h8o"
  title="{video_title}"
/>
                        <div className="p-2 px-5">
                            <h3 className="text-xl font-bold mb-2">IIIT KOTA Fresher's Introduction 2K24</h3>
                            {/* <p className="text-gray-400">{description}</p> */}
                        </div>
                    </div>


                    <div className="bg-[#121212] text-white rounded-xl overflow-hidden shadow-md border border-gray-800 hover:shadow-gray-500/30 transition-shadow">
                        {/* <img src={image} alt={title} className="w-full h-48 object-cover" /> */}
                    
<LiteYouTubeEmbed  
  aspectHeight={9}
  aspectWidth={16}
  id="SL1U_5A6R9I"
  title="{video_title}"
/>
                        <div className="p-2 px-5">
                            <h3 className="text-xl font-bold mb-2">IIIT KOTA Orientation 2K24 !!</h3>
                            {/* <p className="text-gray-400">{description}</p> */}
                        </div>
                    </div>


                    <div className="bg-[#121212] text-white rounded-xl overflow-hidden shadow-md border border-gray-800 hover:shadow-gray-500/30 transition-shadow">
                      

<LiteYouTubeEmbed  
  aspectHeight={9}
  aspectWidth={16}
  id="5dFBIIe2i1w"
  title="{video_title}"
/>
                        <div className="p-2 px-5">
                            <h3 className="text-xl font-bold mb-2">IIIT KOTA Fresher's Introduction 2K23</h3>
                            {/* <p className="text-gray-400">{description}</p> */}
                        </div>
                    </div>





                </div>
        </div>
      </div>


    </div>
  );
}
