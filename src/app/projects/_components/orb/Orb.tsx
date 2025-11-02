"use client"
import styles from "./orb.module.css"
import { X } from 'lucide-react';
import { Copy, Check } from 'lucide-react';
import { House } from 'lucide-react';
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react"; // ⬅️ add this

import {useState} from "react";
import { s } from "motion/react-client";

const variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

interface OrbProps {
  use: string;
}

export default function Orb({use}: OrbProps) {
    const [selected, setSelected] =useState("none");
    const [copied, setCopied] = useState(false);

    const setContact = () => {
      setSelected("contact");
    }
    
    const setMoreInfo = () => {
      setSelected("moreinfo");
    }

    const setnone = () => {
      setSelected("none");
    }

    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText('averydwfisher@gmail.com');
        setCopied(true);
        
        // Reset after 2 seconds
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    };


    


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
        height: selected === "none" ? 52 
                : selected === "contact" ? 124
                : selected === "moreinfo" ? 300
                :52
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}  // ← Add transition here too
    > 

        {use == "home" &&
           <div className={styles.topflex}>
              <div className={styles.name}>{selected== "none" ? "Avery Fisher" 
              : selected == "contact" ? "Email me at:"
              : "Avery Fisher"} </div>
              <div className={styles.groupbutton}>
                <div
                  className={`${styles.buttons} ${styles.aboutbutton}`}
                  onClick={()=> setMoreInfo()}
                >
                    about me
                </div>
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


          
         </div>         
        }

          {use == "project" &&
                     <div className={styles.topflex}>
                      <div className={styles.groupbutton}>
                        <Link
                          href="/"
                        >
                          <div className={styles.buttons}><House color="black" size={18} /></div>
                        </Link>
                        <div className={styles.name}>{selected== "none" ? "Avery Fisher" 
                          : selected == "contact" ? "Email me at:"
                          : "Avery Fisher"}
                        </div>






                      </div>
                    
                     <div className={styles.groupbutton}>
                       <div
                         className={`${styles.buttons} ${styles.aboutbutton}`}
                         onClick={()=> setMoreInfo()}
                       >
                           about me
                       </div>
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
       
       
                 
                </div>  







        
          }

         
{selected == "contact"
  &&

    <div
      className={styles.email}
    >
      <div>averydwfisher@gmail.com</div>
      <div className={styles.copybutton}>
      {copied ? 
        

      <Check color="black" size={24} />: <Copy onClick={handleCopy} color="black" size={24} /> }
      </div>
    </div>

}

{selected == "moreinfo"
  &&

    <div
      className={styles.contact}
    >
        <div>
          My first job was as a researcher, and I studied mechanical engineering and design in college. These experiences impact my approach to design. 
          <br></br><br></br>
          In my free time I enjoy playing soccer, sewing, playing chess, and djaying.
          <br></br><br></br>




        </div>
    <div 
      className={styles.copy}
    >
      <div>
        Contact me at averydwfisher@gmail.com
      </div>
      <div className={styles.copybutton}>
      {copied ? 
        

      <Check color="black" size={24} />: <Copy onClick={handleCopy} color="black" size={24} /> }

      </div>



    </div>


      


    </div>

}


        </motion.div>

    </motion.div>


  );
} 

