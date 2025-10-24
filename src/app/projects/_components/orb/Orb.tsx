"use client"
import styles from "./orb.module.css"
import { X } from 'lucide-react';
import { Copy } from 'lucide-react';
import { House } from 'lucide-react';
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react"; // ⬅️ add this

import {useState} from "react";

const variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

interface OrbProps {
  use: string;
}

export default function Orb({use}: OrbProps) {
    const [selected, setSelected] =useState("none")

    const setContact = () => {
      setSelected("contact");
    }

    const setnone = () => {
      setSelected("none");
    }


    


  return (
    <motion.div
      className={`${styles.container} ${selected === "none" ? "" : styles.expanded}`}
      // Animate the FIXED container itself
      initial={{ opacity: 1, y: -24, }}
      animate={{ opacity: 1, y: 0,   scale: 1 }}
      exit={{    opacity: 0, y: -18, scale: 0.98 }}
      transition={{
        duration: 0.3,          // how long it lasts
        ease: "easeOut"         // smooth ease-out curve
      }}
    >        
    
    <motion.div
      className={styles.orb}
      initial={{ height: 52 }}  // ← Add this
      animate={{
        height: selected == "none" ? 52 : 200
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}  // ← Add transition here too
    > 

          {use == "home" &&
           <div className={styles.topflex}>
              <div className={styles.name}>{selected== "none" ? "Avery Fisher" : "Please email me at"} </div>


            <div className={styles.buttoncontainer}>
            <AnimatePresence mode="wait" initial={false}>
              { selected == "none" ? 
                      <motion.div 
                        key="contact"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{
                          duration: 0.1,          // how long it lasts
                          ease: "easeOut" 
                        }}
                        className={styles.buttons} onClick={()=> setContact()}
                      >
                        contact
                      </motion.div>
                      :
                      <motion.div 
                        className={styles.buttons} onClick={()=> setnone()}
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{
                          duration: 0.1,          // how long it lasts
                          ease: "easeOut" 
                        }}
                        exit="hidden"
                      >
                        <X color="black" size={18} />
                      </motion.div>

              }
            </AnimatePresence>

            </div>


          
         </div>         
          }

          {use == "project" &&
           <div className={styles.topflex}>
            <Link
            href="/"
            >
              <div className={styles.buttons}><House color="black" size={18} /></div>


            </Link>
            
           <div className={styles.name}>Avery Fisher</div>
           { selected == "none" ? 
                   <div className={styles.buttons} onClick={()=> setContact()}>
                     contact
                   </div>
                   :
                   <div className={styles.buttons} onClick={()=> setnone()}>
                     <X color="black" size={18} />
                   </div>

           }
         </div>         
          }

         

    <div
      className={styles.email}
    >
      <div>averydwfisher@gmail.com</div>
      <div className={styles.copybutton}>
        <Copy color="black" size={24} />
      </div>
    </div>




        </motion.div>

    </motion.div>


  );
} 