import styles from "../layout.module.css";
import Image from 'next/image'
import ChromeFeedback from "../../_components/chromefeedback/Chromefeedback";
import UseCases from "../../_components/usecases/Usecases";
import Quotes from "../../_components/quotes/Quotes";
import Bottomnav from "../../_components/bottomnav/Bottomnav";
import Video from "../../_components/video/Video";

export default function TileOneProject() {
  return (
    <>
    <div className={styles.main}>
      <p>Chrome pip</p>
      <h1>Seamless presenting and multitasking: Launching Meets Picture in Picture</h1>
      <div className={`${styles.hero} ${styles.piphero}`}> 
      <Video src="/AutoPip.mp4" thumbnail="/bgtile1.png" />
      </div>
      <div className={styles.textcontain}>
        <div className={styles.impact}>
          Automatic picture in picture launched in July 2024. It has millions of daily users, and won an internal award for being one of the most impactful projects across Google Cloud.
        </div>
      </div>

      <Quotes
      items={[
        {
          text:
            "My wife just discovered Auto Pip and stopped me from working to tell me how AMAZING it IS. This is so much better than resizing the browser.",
          author: "Anonymous user",
          avatarSrc: "/face1.png",
        },
        {
          text:
            "I love picture in picture for Meet because I am able to multitask—doing my work and still being engaged with the meetings I sit in on.",
          author: "Anonymous user",
          avatarSrc: "/face2.png",
        },
      ]}
      />

      <div className={styles.textcontain}>
        <div className={styles.section}>Identifying room for improvement</div>
        <p>
          The first version of Meet picture in picture had low usage, but it was loved by those that did use it. Partnering with UXR, I identified a few key areas for improvement:
        </p>
      </div>
       <ChromeFeedback />


      

      <div className={styles.textcontain}>
        <div className={styles.section}>Key use cases</div>

          <p>
            I partnered with our amazing UXR to get feedback on what the key uses cases people were using pip for. This informed which features we should toggle on and prioritize in the UI.
          </p>
      </div>

      <UseCases />
      <div className={styles.textcontain}>
          <div className={styles.section}>Improving discoverability</div>
            <p>
              We partnered with Chrome to trigger the picture in picture any time somebody navigates to a new tab within the same window. What we built in Meet is using all public APIs. We influence and give feedback, but don’t get special treatment. In order to create a strong partnership I focused on understanding their goals and constraints, so that I could be a teammate and advocate for them in Meet specific meetings.
            </p>
            <div className={styles.piccontainer}>
            <Image 
              width={500}
              height={600}
              src="/chromeet.png"
              alt="Picture of the author"
              className={styles.meetchrome}
            />


          </div>

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



      <Bottomnav next='Working in AI' nextref="/projects/tiletwo" />

    </div>
    </>
  );
} 

{/* */}