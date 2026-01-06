import styles from "../layout.module.css";
import Image from "next/image";
import Bottomnav from "../../_components/bottomnav/Bottomnav";
import Cards from "../../_components/cards/Cards";

export default function TileTwoProject() {
  return (
    <>
    <div className={styles.main}>
      <p>Working in AI</p>
      <h1>Reflections, since I can&apos;t share what I&apos;m currently working on.</h1>
      {/* <div className={styles.hero}>  */}
        <Cards/>
      {/* </div> */}
      <div className={styles.textcontain}>
        <div className={styles.impact}>
          Since early 2024, I&apos;ve been focused on how AI can help make meetings better. I&apos;ve worked on features related to Meet&apos;s built in AI note-taker, and a few other projects which have not been announced yet. While I can&apos;t speak about those projects specifically, I&apos;ll describe what I&apos;ve learned along the way.
        </div>

        <div id="problems" className={styles.section}>Focus on real user problems & opportunities</div>
        <p>
          With the boom in AI, and a company wide focus, there were tons of AI based concepts bouncing around the Meet team. The problem was that the team was having trouble figuring out which projects might be most impactful, what we should focus on, and how to effectively make progress. So, in early 2025, I co-led a team-wide workshop with my awesome research lead, Aaron Lynch. We got everybody together in San Francisco, and synthesized all of our existing research with the goal of identifying key problems and opportunities, and most importantly, figuring out how to make progress on them.
        </p>

      </div>

      <div className={styles.piccontainer}>
        <Image 
          width={500}
          height={300}
          src="/problems.gif"
          alt="Gif of Office character saying he has problems"
          className={styles.meetchrome}
        />
      </div>

      <div className={styles.textcontain}>
        <div id="prototype" className={styles.section}>
          Prototype with real data as much as possible
        </div>
        <p>
          After the workshop, the core team got together to figure out next steps. There was a problem area which had bubbled up, and a lot of people had explored Figma prototypes to solve. However, since the solution involved leveraging user data on AI, designers on the team felt a bit stuck as to how to make more progress in order to advocate for engineering resources. 
        </p>
        <p>
          I made a react prototype that leveraged Workspace apis and Gemini api to connect to users&apos; actual data. Sharing the prototype around built a lot of excitement within the team, and was an integral part of getting the work prioritized. It also played a big role in getting an adjacent product team on board to team up.
        </p>
        <p>
          Though it was far from production level code, it gave our team something to shape. With real data, it became quickly apparent what context was useful, what wasn&apos;t, and how we might go about creating something valuable.
        </p>
        <p>
          I&apos;ve led the design track since, targeting a launch this year.
        </p>  
      </div>

      <div className={styles.piccontainer}>
        <Image 
            width={1947}
            height={843}
            src="/protodiag.png"
            alt="Dialog of a person at a computer. There are two lines, one coming from Google workspace, and teh other from Genini. They convene in a UI circle then go into the computer"
            className={styles.diagram}
        />
      </div>
      <div className={styles.textcontain}>
        <div id="communicate" className={styles.section}>
          Design for now and tomorrow. Clearly communicate.
        </div>
        <p>
          Things move fast in tech, and things in AI have been moving even faster. It&apos;s a common saying that teams need to design products for where the world is going.
        </p>
        <p>
          Within a single feature, it&apos;s important to design for present day, where they might go in the near future, and further out. It is equally as important to understand and clearly communicate what needs to be true (usually model improvements) to enable those experiences. Designing features that rely on only significant improvement in AI models and understanding significantly slows down momentum because we don&apos;t want to wait, we need to make continuous improvements. These are also full of assumptions, since nobody really knows exactly where things are going.
        </p>
        <p>
          Conversely, only designing for the present day runs the risk of only making incremental change, and missing step changes that may happen.
        </p>
        <p>
          Communicating clearly has been impactful for me in helping our team make decisions about investment. For example, I was asked to help design a brand new feature that had been announced at Cloud Next. I created a plan which showed how we could execute in the short term, and continuously improve, and crucially, what improvements we would need to do in order to facilitate this.
        </p>
        <p>
          This breakdown helped the team identifying that we can help users significantly with little investment, but choose not to invest in everything that would get us to the long term solution at this time.
        </p>
      </div>
      <div className={styles.piccontain}>
          <Image 
            width={650}
            height={450}
            src="/mvp.png"
            alt="Infographic of a sad face of somebody trying to make a car, but not being able to drive anything during incremental steps. Happier faces in a bottom row where they have a skateboard, then a scooter, then a bike, a motoerbike, and a car."
            className={styles.meetchrome}
          />
      </div>
      <div className={styles.textcontain}>

      </div>


 
   



   
  



    
        

        








  


      </div>
      <Bottomnav previous= "Chrome pip" prevref= "/projects/chromepip" next='AI Notes' nextref="/projects/ainotes"  />

 
    </>
  );
} 