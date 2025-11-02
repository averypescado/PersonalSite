import styles from "../layout.module.css";
import Image from "next/image";
import Bottomnav from "../../_components/bottomnav/Bottomnav";
import Quotes from "../../_components/quotes/Quotes";

export default function Informedk12Project() {
  return (
    <>
    <div className={styles.main}>
      <p>Informedk12</p>
      <h1>Helping school districts create & manage digital forms & workflows</h1>
      <div className={`${styles.hero} ${styles.k12background}`}>
        <Image
              alt="pharrell in large hat"
              width={3300}
              height={2361}
              src="/IK12Nav@3x.png"
              className={styles.ik12}
              />
      </div>
      <div className={styles.textcontain}>
        <div className={styles.impact}>
          As part of a 3 person product team, I designed and developed critical features for school district administrators and company customer success managers. I worked directly with executives, design on priority feature launches.
        </div>
      </div>
      <div className={styles.textcontain}>
        <div className={styles.section}>
          My role        
        </div>
        <p>
          My role was primarily design, but since we had no researchers, or product managers, it encompassed much more than a traditional design role. I worked directly with engineering, did frontend development for a few projects, led research, and contributed significantly to strategy and planning.
        </p>
        <p>
            People often refer to this as wearing many hats, but I think of it as wearing one large hat. All parts were integral to designing a valuable product, and improving as a designer.
        </p>
        <div className={styles.piccontain}>
          <Image
              alt="pharrell in large hat"
              width={2546}
              height={3333}
              src="/pharrell.jpg"
              className={styles.pharrell}
          />
        </div>
        <div className={styles.section}>
          Favorite project: Improving Navigation      
        </div>
        <div className={styles.heropic}>
          <Image
              alt="pharrell in large hat"
              width={3300}
              height={2361}
              src="/IK12Nav@3x.png"
              className={styles.ik12}
              />
        </div>

        <div className={styles.section}>
          Business Problem      
        </div>
        <p>
          An unsustainable business model was limiting our ability to expand to new districts. Our customer success managers were devoting too much time to each district they worked with. In addition to hiring, we needed to create tools and features to support customer success managers, and make the product easier to use so districts could do more on their own.
        </p>

        <div className={styles.section}>
          User Problem      
        </div>
        <p>
          Through district admin trainings, and escalations from support, we learned that administrators were having trouble understanding how the different aspects of a form fit together. This significantly limited what they could do on their own on our platform. As a result, they were contacting their customer success manager for things we would ideally like them to do on their own.
        </p>
      </div>

      <Quotes
      items={[
        {
          text:
            "If I change the doc, I always forget that I also have to change the route. So I make one change, but my form ends up being broken.",
          author: "Steve Harmon (Oak Grove Union School District)",
          avatarSrc: "/face1.png",
        },
        {
          text:
            "If I want to look at submissions in a different category, I just have to close. Then I go all the way back and reopen the page I need.",
          author: "Kaycee Day (San Benito School District)",
          avatarSrc: "/face2.png",
        },
      ]}
    />
    <div className={styles.textcontain}>
      <div className={styles.section}>
          Design challenge    
      </div>

      <p>
        How do we create a navigation system which allows people to quickly get to where they need, and reinforece a simple mental model for the elements of a form?
      </p>
    </div>

    <div className={styles.textcontain}>
      <div className={styles.section}>
          Impact   
      </div>

      <p>
      This greatly impacted district&apos;s comfort operating InformedK12. I left shortly after this launched but the navigation has remained unchanged since then.      </p>
    </div>
      <Quotes
      items={[
        {
          text:
            "This is a total game changer! It simplifies so much strangeness that I usually have to spend time explaining in such an elegant way.",
          author: "Head of Customer Success",
          avatarSrc: "/face1.png",
        },
        {
          text:
            "I am so happy you pushed for that navigation way back when. It makes life so much simpler for us now, even all these years later. ",
          author: "CTO",
          avatarSrc: "/face2.png",
        },
      ]}
    />

    </div>

    
    <Bottomnav previous="AI Chrome extension" prevref="/projects/tilefive" next="Chrome pip" nextref="/projects/tileone" />
    </>
  );
}
