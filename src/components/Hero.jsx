import React, { useState } from "react";
import { styles } from "../styles";
import { data } from "../data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import doc from "../assets/doc.svg";
import fullscreen from "../assets/fullscreen.svg";
import threeD from "../assets/3d.svg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showLabelsList, setShowLabelsList] = useState(false); 

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((e) => {
        console.error(`Error attempting to enable full-screen mode: ${e.message} (${e.name})`);
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
      <div className={`${styles.flexCenter} flex-col w-full h-screen relative object-cover`}>
      
      <div className={`absolute z-50 top-[1rem] right-[1rem] p-[0.4rem] bg-white rounded-lg`} onClick={toggleFullScreen}>
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

        <div className={`${styles.text2} flex flex-row  absolute w-full bottom-[0rem] z-10 p-[1rem] bg-white`}>
            <div className={`mr-[1rem]`}>{data[currentSlide].id}</div>
          <div className="text-left static bottom-[1.3rem] z-30"> 
            {data[currentSlide].label}
          </div>
        </div>
        
        <div 
          className={`${styles.text2} absolute w-full  bottom-0 z-20 p-4 cursor-pointer`}
          onClick={toggleLabelsList}
        >
          <div className={` fixed  bottom-3 w-[90%] max-w-[30rem] rounded-md text-left ${showLabelsList ? 'h-[20rem]' : 'h-[2.5rem]'}
          ${showLabelsList ? 'bg-white' : 'bg-white/10'}
          ${showLabelsList ? 'overflow-y-scroll' : 'overflow-hidden'} ` } >
            {showLabelsList && data.map((item, index) => (
              <button
                key={item.id}
                className={`px-[1rem] py-[0.5rem] w-full flex flex-row text-left hover:bg-black/20
                 ${index === currentSlide ? 'text-blue-500' : ''}`}
                onClick={() => { scrollToSlide(index); }}
              >
              <img src={item.id === 2 || item.id === 3 || item.id === 7 || item.id === 12 || item.id === 24 ? threeD : doc} alt="" />

               <span className={`mx-[1rem]`}>{item.id}</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;