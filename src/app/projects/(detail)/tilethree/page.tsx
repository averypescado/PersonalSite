import styles from "../layout.module.css";
import Image from "next/image";
import YoutubeWidge from "../../_components/youtubewidge/YoutubeWidge";
import NudgeWidget from "../../_components/nudgewidget/Nudgewidget";
import QuoteContain from "../../_components/quotecontain/Quotecontain";
import Problem from "../../_components/problem/Problem";
import Bottomnav from "../../_components/bottomnav/Bottomnav";

export default function TileThreeProject() {
  return (
    <>
    <div className={styles.main}>
      <p>Take notes with Gemini</p>
      <h1>Helping people who missed the meeting: Increasing usage</h1>
      <div className={styles.hero}>
      <Image
          src="/promo.png"
          alt=""
          fill 
          className={styles.tnwg}
          aria-hidden="true"
          quality={90}
                  
      />

      </div>
      <div className={styles.textcontain}>
        <div className={styles.impact}>Contextual nudges to turn on notes was the first growth experiment for Meet&apos;s flagship AI feature, Take Notes for Me. This features usage was called out by Sundar in recent earnings call.
      </div>
      </div> 

      <YoutubeWidge videoId="BtXRNTgsgpU" start={352} end={357} />
      <div className={styles.textcontain}>
        <div className={styles.impact}>
          It performs twice as well as general feature promos and has led to double digit increase in people turning on notes.

        </div>
      </div>

      <NudgeWidget />
      <div className={styles.textcontain}>
        <div className={styles.impact}> 
          But it started as a much larger, completely different feature.
        </div>
      </div>

      <div className={styles.textcontain}>
        <div className={styles.section}>
          The announcement
        </div>
        <p>
          In August 2023, Google Meet announced the feature &quot;Attend for Me&quot; at Google Cloud NEXT. It attracted a lot of attention, as people were intrigued by the promise of having less meetings.
        </p>
        <QuoteContain />
        <div className={styles.section}>
          The problem
        </div>
        <p>
          The problem was, there was a big difference between what was announced and what we were going to launch anytime soon. Almost a year after the announcement, we still hadn&apos;t launched anything. The team was getting stressed and ancy, I was tasked with creating a plan for how we could launch and continuously improve.
        </p>
        <div className={styles.section}>
          Grounding in the core problem
        </div>
        <p>
            I hadn&apos;t previously been working in this area, so I started by grounding myself, and then the team in the core problem we are trying to solve.
          </p>
      </div>
      <Problem />
        <div className={styles.textcontain}>
          <div className={styles.section}>
            Creating a plan
          </div>
          <p>
            After aligning on the problem, I spent the next few weeks working with the team on a proposal for how we could solve the user problem immediately, and then continuously improve over time. The plan clearly laid out how we could start by being helpful with a nudge to hosts when somebody marked &quot;attend for me&quot; in calendar.
          </p>
          <p>
          Then we could move on to being helpful and personalized, then finally being helpful, personalized and proactive.
          </p>
          <p>
          I presented the proposal to leadership to positive feedback. A few weeks later, we launched the host nudge. When a user marks &quot;No&quot; as an rsvp, and the meeting starts, the host is automatically notified to turn on the notes.
          </p>
        </div>
          <div className={styles.piccontain}>
          <video width="1435" height="938" autoPlay muted loop preload="none" className={styles.planvideo}>
            <source src="/description.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        </div>

        <div className={styles.textcontain}>
          <div className={styles.section}>
            Returning to the core problem and reassessing
          </div>
          <p>
            The host nudges were extremely successful in getting people to turn on notes more often, and in people feeling more secure in saying &quot;no&quot; to a meeting. Soon after that, we got new product leadership. Since we had clear milestones laid out, it was easy for them to take a look at our plan, and decide that it wasn&apos;t the right time to invest towards getting to &quot;personalized&quot; or &quot;personalized and proactive.&quot;
          </p>
          <p>
          By grounding ourselves in the core problem, our team made immediate impact, and make and informed decision about when to pause.
          </p>

        </div>
    </div>
    <Bottomnav previous= "Working in AI" prevref= "/projects/tiletwo" next='Mini Meet Platform' nextref="/projects/tilefour"  />
    </>
  );
} 
