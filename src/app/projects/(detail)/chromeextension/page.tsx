import styles from "../layout.module.css";
import Image from 'next/image'
import ChromeFeedback from "../../_components/chromefeedback/Chromefeedback";
import UseCases from "../../_components/usecases/Usecases";
import Quotes from "../../_components/quotes/Quotes";
import Bottomnav from "../../_components/bottomnav/Bottomnav";

export default function TileOneProject() {
  return (
    <>
    <div className={styles.main}>
      <p>Chrome pip</p>
      <h1>Seamless presenting and multitasking: Launching Meets Picture in Picture</h1>
      <div className={styles.hero}> 
        <Image
          src="/bgtile1.png"
          alt="text"
          fill
        />
      </div>
      <div className={styles.impact}>Automatic picture in picture launched in July 2024 in partnership with the Chrome team. It has millions of daily users, and won an internal award for being one of the most impactful projects across Google Cloud</div>

      <div className={styles.process}>
        <div className={styles.section}>Process</div>
        <p>
          <b>Identifying room for improvement</b><br></br>
          The first version of Meet picture in picture had low usage, but it was loved by those that did use it. Partnering with UXR, I identified a few key areas for improvement:
          </p>
      </div>
      <ChromeFeedback />


      

      <div className={styles.process}>

        <p>
          <b>Identifying key use cases</b><br></br>
I partnered with our amazing UXR to understand the key uses cases people were using pip for. This informed which features we should toggle on and prioritize in the UI.</p>
      </div>

      <UseCases />
      <div className={styles.process}>
        <p>
          <b>Partnering with Chrome to improve discoverability</b><br></br>
          We partnered with Chrome to trigger the picture in picture any time somebody navigates to a new tab within the same window. What we built in Meet is using all public APIs. We influence and give feedback, but don’t get special treatment. In order to create a strong partnership I focused on understanding their goals and constraints, so that I could be a teammate and advocate for them in Meet specific meetings.
        </p>
        <Image 
          width={500}
          height={600}
          src="/chromeet.png"
          alt="Picture of the author"
          className={styles.meetchrome}
        />
      </div>

    
{/* 
      <div className={styles.process}>
        <p>
          <b>Making components super responsive</b><br></br>
None of the components we were using were designed to be very responsive. Since Chrome pip could get very small, and there are many combinations of things that could be happening at the same time, it got complicated.</p>
      </div>


      <div className={styles.process}>
        <p>
          <b>Further improvements</b><br></br>
          Resize APIs<br></br>
          Discovering draggability<br></br>
          Layouts
</p>
      </div> */}




    </div>
      <Bottomnav next='Working in AI' nextref="/projects/tiletwo"  />
    </>
  );
} 