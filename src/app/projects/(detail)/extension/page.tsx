import Clocks from "../../_components/Clocks/Clocks";
import styles from "../layout.module.css";
import Image from "next/image";
import Bottomnav from "../../_components/bottomnav/Bottomnav";
import Video from "../../_components/video/Video";

export default function TileFiveProject() {
  return (
    <>
    <div className={styles.main}>
      <p>Chrome extension</p>
      <h1>Simple explanations powered by Gemini</h1>
      <div className={`${styles.hero} ${styles.textured}`}>
        <Video src="/extension.mp4" thumbnail="/bgtile1.png" />


      </div>
      <div className={styles.textcontain}>
        <div className={styles.impact}>
          I made a chrome extension that allows you to quickly get simple explanations of highlighted text in one click. It got me hooked on building chrome extensions and experimenting with llm apis.
        </div>

        <div className={styles.section}>Scratching my own itch</div>
        <p>
          I love reading and learning about new things. I was in a large chat space for people particularly interested in the latest advancements in AI. Every day, people were sharing articles and papers on new models, tools, and research on LLMs. I needed a way to quickly understand what was being shared so I could follow along with the conversation, and I was interested in building something with an LLM. So to feed two birds with one scone, I built this Chrome extension.
        </p>
        <p>
        I shared it with some teammates, and people actually used it!
        </p>
        <div className={styles.section}>Developing a new tool at my disposal</div>
          <p>
            Since making this first extension, making chrome extensions has been a tool that I&apos;ve come back to many times. I&apos;ve made extensions to add ui elements to Meet and calendar. Even if it&apos;s just creating an entry point and seeing how it feels seeing it over and over all day as I do my work, it has proven to be an extremely helpful tool and skill to have.
          </p>
          <p>
            The inspiration for the tool was the wired youtube videos where experts explain things at varying levels of complexity.
          </p>

      </div>



        
          



        {/* <p>
        As I wrote in LINK I find prototyping in code very valuable, and it is a key part of my process. I regularly use workspace apis to use real data, use actual video feeds, have a more realistic experience in the browser.
        <br></br><br></br>

Teammates had seen my prototypes and many had reached out asking if I could teach them how they could do the same. After teaching a few people in 1:1 sessions, I made a reference doc for people getting started. Then, at our last team summit, I led a workshop where everybody got setup, and published their first React app in an hour.
<br></br><br></br>
Since the initial workshop, Ive added more chapters to the resource, including how to enable and use Workspace APIs

        </p> */}

      </div>
      <Bottomnav
        previous= "Minimeet platform" prevref= "/projects/minimeet"
        next= "School district form management" nextref= "/projects/informedk12"
      />
    </>
  );
} 