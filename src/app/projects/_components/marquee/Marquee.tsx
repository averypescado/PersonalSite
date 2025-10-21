import styles from "./Marquee.module.css"
import Image from "next/image";
export default function Marquee() {

    const schools = [
        {
          id: 1,
          title: "Oakland",
          image: "/oakland.png",
        },
        {
          id: 2,
          title: "San Framon",
          image: "/sanramon2.png",
        },
        {
          id: 3,
          title: "Norristown",
          image: "/norristown.png",
        },
        {
            id: 4,
            title: "Santa Ana",
            image: "/SantaAna.png",
          },
          {
            id: 5,
            title: "Elk Grove",
            image: "/ElkGrove.png",
          },
          {
            id: 6,
            title: "Fresno",
            image: "/Fresno.png",
          },
          {
            id: 7,
            title: "Long Beach",
            image: "/LBSU.png",
          },
          {
            id: 8,
            title: "San Juan",
            image: "/SanJuan.png",
          },
          {
            id: 9,
            title: "Clove",
            image: "/Clovis.png",
          },
          {
              id: 10,
              title: "Garden Grove",
              image: "/GardenGrove.png",
            },
            {
              id: 11,
              title: "Fremont",
              image: "/Fremont.png",
            },
            {
              id: 12,
              title: "Capistrano",
              image: "/Capistrano.png",
            },
            {
                id: 13,
                title: "San Bernadino",
                image: "/SanBernadino.png",
            },
            {
                id: 14,
                title: "Banning",
                image: "/Banning.png",
            },
            {
                id: 15,
                title: "Franklin Pierce",
                image: "/FranklinPierce.png",
            },
            {
                id: 16,
                title: "Sacramento",
                image: "/Sacremento.png",
            },
            {
                id: 17,
                title: "Twin Rivers",
                image: "/TwinRivers.png",
            },
      ];


    return (
        <div className={styles.holder}>
            <div className={styles.marquee}>
                <ul 
                    aria-hidden="true" 
                    className={styles.marquee_content}
                >
                    {schools.slice(0,6).map((school) => 
                        <li 
                            className={styles.district}
                            key={school.id}
                        >
                            <Image 
                                src={school.image}
                                alt={school.title}
                                fill
                                className={styles.filled}
                            />
                            {school.title}
                        </li>
                    
                    )}
                        
                </ul>
                <ul 
                    aria-hidden="true" 
                    className={styles.marquee_content}
                >
                    {schools.slice(0,6).map((school) => 
                        <li 
                            className={styles.district}
                            key={school.id}
                        >
                            <Image 
                                src={school.image}
                                alt={school.title}
                                fill
                                className={styles.filled}
                            />
                            {school.title}
                        </li>
                    
                    )}
                        
                </ul>
                
            </div>
            <div className={styles.marquee_reverse}>
                <ul 
                    aria-hidden="true" 
                    className={styles.marquee_content_reverse}
                >
                    {schools.slice(6,12).map((school) => 
                        <li 
                            className={styles.district}
                            key={school.id}
                        >
                            <Image 
                                src={school.image}
                                alt={school.title}
                                fill
                                className={styles.filled}
                            />
                            {school.title}
                        </li>
                    
                    )}
                </ul>
                <ul 
                    aria-hidden="true" 
                    className={styles.marquee_content_reverse}
                >
                    {schools.slice(6,12).map((school) => 
                        <li 
                            className={styles.district}
                            key={school.id}
                        >
                            <Image 
                                src={school.image}
                                alt={school.title}
                                fill
                                className={styles.filled}
                            />
                            {school.title}
                        </li>
                    
                    )}
                </ul>
                
            </div>
            <div className={styles.marquee}>
                <ul 
                    aria-hidden="true" 
                    className={styles.marquee_content}
                >
                    {schools.slice(12,17).map((school) => 
                        <li 
                            className={styles.district}
                            key={school.id}
                        >
                            <Image 
                                src={school.image}
                                alt={school.title}
                                fill
                                className={styles.filled}
                            />
                            {school.title}
                        </li>
                    
                    )}
                </ul>
                <ul 
                    aria-hidden="true" 
                    className={styles.marquee_content}
                >
                    {schools.slice(12,17).map((school) => 
                        <li 
                            className={styles.district}
                            key={school.id}
                        >
                            <Image 
                                src={school.image}
                                alt={school.title}
                                fill
                                className={styles.filled}
                            />
                            {school.title}
                        </li>
                    
                    )}
                </ul>
                
            </div>
            <div className={styles.marquee}>
                <ul 
                    aria-hidden="true" 
                    className={styles.marquee_content_reverse}
                >
                        <li className={styles.district}>1</li>
                        <li className={styles.district}>2</li>
                        <li className={styles.district}>3</li>
                        <li className={styles.district}>4</li>
                        <li className={styles.district}>5</li>
                        <li className={styles.district}>6</li>
                </ul>
                <ul 
                    aria-hidden="true" 
                    className={styles.marquee_content_reverse}
                >
                        <li className={styles.district}>1</li>
                        <li className={styles.district}>2</li>
                        <li className={styles.district}>3</li>
                        <li className={styles.district}>4</li>
                        <li className={styles.district}>5</li>
                        <li className={styles.district}>6</li>
                </ul>
                
            </div>
        </div>
    )

}