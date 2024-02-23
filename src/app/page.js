"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Wine from '../app/animations/wine.json'
import { useRouter } from "next/navigation"; 
import Lottie from "lottie-react";
import Navbar from "./components/Navigation";
import Products from "./components/Products";
import Image from "next/image";
import Contact from "./components/Contact";
import Producers from "./components/Producers";
import { Instagram } from "lucide-react";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [section, setSection] = useState('products');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjust the duration as needed

    return () => clearTimeout(timeout);
  }, []);

  const transition = { duration: 0.8, ease: "easeInOut" };

  const handleNavLinkClick = (section) => {
    setSection(section);
  };

  return (
    <div className="h-min-screen w-screen ">
      {isLoading ? (
        <div className="animate-pulse flex items-center justify-center h-screen">
          <Lottie animationData={Wine} style={{ height: "200px" }} />
        </div>
      ) : (
        <div>
          <div className="p-10">
            <motion.h1
              className="text-2xl md:text-6xl  text-white"
              id="Left"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={transition}
            >
              BIG NOSE
              
       
              <Link href={"https://www.instagram.com/bignose.norway/"} className="hover:scale-110 transition-all absolute right-20 top-15" target="_blank">
                <Instagram />
              </Link>
   
            </motion.h1>
            <div className="mt-3 flex flex-col">
              <motion.div
                className="md:w-3/4 m-auto text-lg font-thin text-white"
                id="Left"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={transition}
              >
                
                <div className="mb-10">
                  {/* Navbar with links */}
                  <ul className="list-none flex gap-5 text-white mt-4 text-sm md:text-3xl">
                    <li className="uppercase">
                      <a
                        href="#"
                        className={`${section === 'products' ? "border-b" : "text-gray-500"}`}
                        onClick={() => handleNavLinkClick('products')}
                      >
                        Produkter
                      </a>
                    </li>
                    <li className="uppercase">
                      <a
                        href="#"
                        className={`${section === 'producers' ? "border-b" : "text-gray-500"}`}
                        onClick={() => handleNavLinkClick('producers')}
                      >
                        Produsenter
                      </a>
                    </li>
                    <li className="uppercase">
                      <a
                        href="#"
                        className={`${section === 'contact' ? "border-b" : "text-gray-500"}`}
                        onClick={() => handleNavLinkClick('contact')}
                      >
                        Kontakt
                      </a>
                    </li>
                  </ul>
                </div>

         

              </motion.div>

              <motion.small
                className=" md:inline-block mt-5 text-lg"
                id="Right"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={transition}
              >
                
                        <motion.div
              animate={{ x: 0, opacity: 1 }}
              transition={transition}
              initial={{ x: 0, opacity: 0 }}>
                {section === 'products' && <Products />}
                {section === 'producers' && <Producers />}
                {section === 'contact' && <Contact />}

                </motion.div>
              </motion.small>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}