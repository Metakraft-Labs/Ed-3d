import { useState, useEffect, useRef } from "react";
import { styles } from "../styles";
import { data } from "../data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import doc from "../assets/doc.svg";
import fullscreen from "../assets/fullscreen.svg";
import threeD from "../assets/3d.svg";
import aiverse from "../assets/aiverselogo1.svg";
import qrbtn from "../assets/qrbtn.svg";
import qrcode from "../assets/qrcode.svg";
import pen from "../assets/pen.svg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showLabelsList, setShowLabelsList] = useState(false);
  const [showQr, setShowQr] = useState(false);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const qrRef = useRef(null);
  const labelsListRef = useRef(null);

  const handleQr = () => {
    setShowQr((prev) => {
      console.log("Current showQr state:", prev);
      console.log("Toggling showQr state to:", !prev);
      return !prev;
    });
  };
  const handleClickOutside = (event) => {
    if (qrRef.current && !qrRef.current.contains(event.target)) {
      setShowQr(false);
    }
    if (labelsListRef.current && !labelsListRef.current.contains(event.target)) {
      setShowLabelsList(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((e) => {
        console.error(
          `Error attempting to enable full-screen mode: ${e.message} (${e.name})`
        );
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const scrollToSlide = (index) => {
    setCurrentSlide(index);
    setShowLabelsList(false);
  };

  const toggleLabelsList = () => {
    setShowLabelsList(!showLabelsList);
  };

  return (
    <>
      <div
        className={`${styles.flexCenter} flex-col w-full h-screen relative object-cover overflow-hidden`}
      >
        <div
          className={`absolute z-50 top-[1rem] right-[1rem] p-[0.4rem] bg-white rounded-lg`}
          onClick={toggleFullScreen}
        >
          <img src={fullscreen} alt="fullscreen" />
        </div>
        <Carousel
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          className={`${styles.flexCenter} flex-col absolute top-0 z-0 w-full h-full`}
          selectedItem={currentSlide}
          onChange={handleSlideChange}
        >
          {data.map((item) => (
            <div key={item.id} className={`${styles.flexCenter} h-full`}>
              {item.slide}
            </div>
          ))}
        </Carousel>

        <a
          href="https://metakraft.live/"
          className={`absolute left-[1.5rem] bottom-[5rem] z-20 ${styles.flexCenter}`}
        >
          <img src={aiverse} className="w-[4rem] brightness-[0.4] " alt="" />
          <h3 className={`text-[1.2rem] font-semibold  text-[#666666]`}>
            Edcraft
          </h3>
        </a>

        <div
        style={{
          boxShadow: "-2px -2px 10px 0.5px #b3b3b3"
        }}
          className={`${styles.text2} flex flex-row absolute w-full bottom-0 z-10 p-4 bg-white `}
        >
          <button
            onClick={handleQr}
            className="p-2 bg-white hover:bg-[#b3b3b3] transition-all 700ms ease-in-out rounded-lg ml-2 border-[#b3b3b3]"
          >
            <img src={qrbtn} alt="QR Button" />
          </button>

          <button
            className="p-2 absolute right-[1rem]  bg-white hover:bg-[#b3b3b3] transition-all 700ms ease-in-out rounded-lg  mr-2 "
          >
            <img src={pen} alt="QR Button" />
          </button>
        </div>


        {showQr && (
          <div
            className={`${styles.flexCenter} absolute z-50  bg-white/30 backdrop-blur-xl w-full h-screen`}
          >
            <div
              ref={qrRef}
              className={`${styles.flexCenter} flex-col py-[1rem] border-[6px] border-black/10  bg-white rounded-2xl  h-fit`}
            >
              <img src={qrcode} className={`w-[90%] `} alt="QR Code" />
              <h2
                className={` text-center text-[1rem] shadow-xl font-bold bg-purple-500 w-[80%] uppercase my-[1rem] py-[0.6rem] rounded-lg text-white`}
              >
                Scan to open
              </h2>
            </div>
          </div>
        )}

        <div
          onClick={toggleLabelsList}
          className={`${styles.text2} flex items-center absolute w-[30rem] left-[5rem] rounded-xl bottom-[1.2rem] z-20 p-4 cursor-pointer`}
        >
          <div className="text-left fixed bottom-[1.3rem] z-30">
            <span className={`mr-[1rem]`}>{data[currentSlide].id}</span>
            {data[currentSlide].label}
          </div>
        </div>

        {showLabelsList && (
          <div
          ref={labelsListRef} 
            className={` fixed left-[5rem]  bottom-3 w-[90%] max-w-[30rem] rounded-md text-left z-20 ${
              showLabelsList ? "h-[20rem]" : "h-[2.5rem]"
            }
          ${showLabelsList ? "bg-white " : "bg-white/10"}
          ${showLabelsList ? "overflow-y-scroll" : "overflow-hidden"} `}
          >
            {showLabelsList &&
              data.map((item, index) => (
                <button
                  key={item.id}
                  className={`px-[1rem] py-[0.5rem] w-full flex flex-row text-left hover:bg-black/20
                 ${index === currentSlide ? "text-blue-500" : ""}`}
                  onClick={() => {
                    scrollToSlide(index);
                  }}
                >
                  <img
                    src={
                      item.id === 2 ||
                      item.id === 3 ||
                      item.id === 7 ||
                      item.id === 12 ||
                      item.id === 24
                        ? threeD
                        : doc
                    }
                    alt=""
                  />

                  <span className={`mx-[1rem]`}>{item.id}</span>
                  {item.label}
                </button>
              ))}
          </div>
        )}
        
      </div>
    </>
  );
};

export default Hero;
