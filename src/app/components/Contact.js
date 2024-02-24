"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Wine } from "lucide-react";
import Link from 'next/link'

export default function Contact() {
  const [isShowing, setIsShowing] = useState(false);

  const handleButtonClick = () => {
    setIsShowing(true);
  };

  const transition = { duration: 0.8, ease: "easeInOut" }; // Adjust the duration as needed

  return (
    <div className="h-screen text-center">
    
        <div className="p-10">
    
          <div className="mt-3">
   
          <motion.div
                       className='flex mt-10 justify-between w-full flex-col'
              animate={{ x: 0, opacity: 1 }}
              transition={transition}
              initial={{ x: 0, opacity: 0 }}>

        <form className="flex flex-col items-center justify-around  p-1 rounded-md">
        <motion.h1
            className="text-4xl text-white flex flex-col items-center"
            id="Left"
            initial={{ y: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={transition}
          >
            Kontakt oss her <Wine />
          </motion.h1>
          <div className="flex flex-col">
            <label className="text-white">Navn (påkrevd)</label>
          <div className="flex flex-col md:flex-row justify-between mb-3 gap-2 ">
              <input type={"Fornavn"} placeholder="Fornavn" className="p-3  bg-transparent border-b text-white"/>
              <input type={"Etternavn"} placeholder="Etternavn" className="p-3  bg-transparent border-b text-white"/>
            </div>

            <div className="flex mb-3">
              <input type={"email"} placeholder="Skriv din epost her" className="p-3  bg-transparent border-b flex w-full text-white"/>
            </div>
        
 


<textarea placeholder="Skriv ditt spørsmål her" className="w-full md:w-[450px] p-10 resize-none  bg-transparent border-b text-white"></textarea>
          </div>


          <button className="border mt-3 p-3 px-5 hover:scale-105 transition-all rounded-full text-white">
            Send
          </button>



        </form>



        <div className="flex gap-10 flex-col md:flex-wrap md:flex-row items-center justify-center">
 
          
          
          
     
          
          <div class=" flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80 md:w-96 hover:scale-105 transition-all">
            <div class="p-10">
            <Link href={"https://mentalhelse.no/fa-hjelp/studenttelefonen/"} target="_blank" className="flex flex-col items-center justify-center">
                <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Rune Grytting
                </h5>
                <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                epost@eksempl.no
                </p>
              </Link>
            </div>
        
          </div>

          <div class=" flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80 md:w-96 hover:scale-105 transition-all">
            <div class="p-10">
            <Link href={"https://mentalhelse.no/fa-hjelp/arbeidslivstelefonen/"} target="_blank" className="flex flex-col items-center justify-center">
                <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Jon Ruud
                </h5>
                <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                epost@eksempl.no
                </p>
              </Link>
            </div>
        
          </div>


          <div class=" flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80 md:w-96 hover:scale-105 transition-all">
            <div class="p-10">
            <Link href={"https://sidetmedord.mentalhelse.no/"} target="_blank" className="flex flex-col items-center">
                <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                 Oda Ruud
                </h5>
                <p class="font-sans flex items-center flex-col text-base antialiased font-light leading-relaxed text-inherit">
              epost@eksempl.no
              </p>
              </Link>
            </div>
        
          </div>
        </div>
            </motion.div>
          </div>
     
        </div>
    
    </div>
  );
}
