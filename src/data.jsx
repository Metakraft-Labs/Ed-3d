import Scene from "./components/Scene";
import slide4 from "./assets/slide4.jpeg";
import slide5 from "./assets/slide5.jpeg";
import slide6 from "./assets/slide6.jpeg";
import slide8 from "./assets/slide8.jpeg";
import slide9 from "./assets/slide9.jpeg";
import slide10 from "./assets/slide10.jpeg";
import slide11 from "./assets/slide11.jpeg";
import slide13 from "./assets/slide13.jpeg";
import slide14 from "./assets/slide14.jpeg";
import slide15 from "./assets/slide15.jpeg";
import slide16 from "./assets/slide16.jpeg";
import slide17 from "./assets/slide17.jpeg";
import slide19 from "./assets/slide19.jpeg";
import slide20 from "./assets/slide20.jpeg";
import slide21 from "./assets/slide21.jpeg";
import slide22 from "./assets/slide22.jpeg";
import slide23 from "./assets/slide23.jpeg";
import slide25 from "./assets/slide25.jpeg";
import slide26 from "./assets/slide26.jpeg";
import slide27 from "./assets/slide27.jpeg";
import slide28 from "./assets/slide28.jpeg";
import slide29 from "./assets/slide29.jpeg";
import slide30 from "./assets/slide30.jpeg";
import slide31 from "./assets/slide31.jpeg";
import slide32 from "./assets/slide32.jpeg";
import slide2 from "./assets/slide2.glb";
import slide3 from "./assets/slide3.glb";
import slide7 from "./assets/slide7.glb";
import slide12 from "./assets/slide12.glb";
import slide24 from "./assets/slide24.glb";

import { styles } from "./styles";

export const data = [
  {
    id: 1,
    label: " Detailed Study of Alimentary canal: Human Digestive System",
    slide: (
      <div className={`${styles.flexCenter} h-screen`}>
        <img
          className={`absolute object-cover h-full w-full top-0 left-0 z-0`}
          src={`https://portal.perceiv.io/biology.e4b24cadadf2b6c3.jpg`}
          alt=""
        />
        <div
          className={`absolute z-20 ${styles.flexCenter} mb-[5rem] flex-col w-full left-0`}
        >
          <h2 className={`${styles.head1} `}>Biology</h2>
          <h1 className={`${styles.head2} m-[2rem]`}>
            Detailed Study of Alimentary <br className="hidden lg:flex" /> canal: Human Digestive System
          </h1>
          <p className={`${styles.text1}`}>Grade 11th</p>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    label: "Location of Digestive System in Human Body",
    slide: (
      <Scene scene={slide2} />
    ),
  },

  {
    id: 3,
    label: "Human Digestive System",
    slide: (
      <Scene scene={slide3} />
    ),
  },

  {
    id: 4,
    label: "DIGESTIVE SYSTEM - 4",
    slide: <img src={slide4} className={`${styles.slides}`} alt="Slide 4" />,
  },
  {
    id: 5,
    label: "DIGESTIVE SYSTEM - 5",
    slide: <img src={slide5} className={`${styles.slides}`} alt="Slide 5" />,
  },
  {
    id: 6,
    label: "DIGESTIVE SYSTEM - 6",
    slide: <img src={slide6} className={`${styles.slides}`} alt="Slide 6" />,
  },
  {
    id: 7,
    label: "Human Teeth",
    slide: (
      <Scene scene={slide7} />
    ),
  },
  {
    id: 8,
    label: "DIGESTIVE SYSTEM - 8",
    slide: <img src={slide8} className={`${styles.slides}`} alt="Slide 8" />,
  },
  {
    id: 9,
    label: "DIGESTIVE SYSTEM - 9",
    slide: <img src={slide9} className={`${styles.slides}`} alt="Slide 9" />,
  },
  {
    id: 10,
    label: "DIGESTIVE SYSTEM - 10",
    slide: <img src={slide10} className={`${styles.slides}`} alt="Slide 10" />,
  },
  {
    id: 11,
    label: "DIGESTIVE SYSTEM - 11",
    slide: <img src={slide11} className={`${styles.slides}`} alt="Slide 11" />,
  },
  {
    id: 12,
    label: "Tooth Cross Section",
    slide: (
      <Scene scene={slide12} />
    ),
  },
  {
    id: 13,
    label: "DIGESTIVE SYSTEM - 13",
    slide: <img src={slide13} className={`${styles.slides}`} alt="Slide 13" />,
  },
  {
    id: 14,
    label: "DIGESTIVE SYSTEM - 14",
    slide: <img src={slide14} className={`${styles.slides}`} alt="Slide 14" />,
  },
  {
    id: 15,
    label: "DIGESTIVE SYSTEM - 15",
    slide: <img src={slide15} className={`${styles.slides}`} alt="Slide 15" />,
  },
  {
    id: 16,
    label: "DIGESTIVE SYSTEM - 16",
    slide: <img src={slide16} className={`${styles.slides}`} alt="Slide 16" />,
  },
  {
    id: 17,
    label: "DIGESTIVE SYSTEM - 17",
    slide: <img src={slide17} className={`${styles.slides}`} alt="Slide 17" />,
  },
  {
    id: 18,
    label: "DIGESTIVE SYSTEM - 18",
    slide: <img src={slide17} className={`${styles.slides}`} alt="Slide 17" />,
  },
  {
    id: 19,
    label: "DIGESTIVE SYSTEM - 19",
    slide: <img src={slide19} className={`${styles.slides}`} alt="Slide 19" />,
  },
  {
    id: 20,
    label: "DIGESTIVE SYSTEM - 20",
    slide: <img src={slide20} className={`${styles.slides}`} alt="Slide 20" />,
  },
  {
    id: 21,
    label: "DIGESTIVE SYSTEM - 21",
    slide: <img src={slide21} className={`${styles.slides}`} alt="Slide 21" />,
  },
  {
    id: 22,
    label: "DIGESTIVE SYSTEM - 22",
    slide: <img src={slide22} className={`${styles.slides}`} alt="Slide 22" />,
  },
  {
    id: 23,
    label: "DIGESTIVE SYSTEM - 23",
    slide: <img src={slide23} className={`${styles.slides}`} alt="Slide 23" />,
  },
  {
    id: 24,
    label: "Villi Cross Section",
    slide: (
      <Scene scene={slide24} />
    ),
  },
  {
    id: 25,
    label: "DIGESTIVE SYSTEM - 25",
    slide: <img src={slide25} className={`${styles.slides}`} alt="Slide 25" />,
  },
  {
    id: 26,
    label: "DIGESTIVE SYSTEM - 26",
    slide: <img src={slide26} className={`${styles.slides}`} alt="Slide 26" />,
  },
  {
    id: 27,
    label: "DIGESTIVE SYSTEM - 27",
    slide: <img src={slide27} className={`${styles.slides}`} alt="Slide 27" />,
  },
  {
    id: 28,
    label: "DIGESTIVE SYSTEM - 28",
    slide: <img src={slide28} className={`${styles.slides}`} alt="Slide 28" />,
  },
  {
    id: 29,
    label: "DIGESTIVE SYSTEM - 29",
    slide: <img src={slide29} className={`${styles.slides}`} alt="Slide 29" />,
  },
  {
    id: 30,
    label: "DIGESTIVE SYSTEM - 30",
    slide: <img src={slide30} className={`${styles.slides}`} alt="Slide 30" />,
  },
  {
    id: 31,
    label: "DIGESTIVE SYSTEM - 31",
    slide: <img src={slide31} className={`${styles.slides}`} alt="Slide 31" />,
  },
  {
    id: 32,
    label: "DIGESTIVE SYSTEM - 32",
    slide: <img src={slide32} className={`${styles.slides}`} alt="Slide 32" />,
  },
];
