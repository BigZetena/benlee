import { useState } from "react";
import { COLORS } from "../App";

export const Card = ({ title, description, bgSrc, flipp = true }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div
      className={`hover:text-[#c684ff] relative rounded-lg shadow-lg cursor-pointer w-full mx-auto h-[500px]  transition-all overflow-hidden group `}
      onClick={flipp ? handleFlip : () => {}}
      style={{
        perspective: "1000px",
      }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 ease-in-out transform ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front Side */}
        <div
          className={` absolute w-full h-full bg-center bg-cover flex flex-col justify-center items-center rounded-lg shadow-inner transition-opacity duration-500 ease-in-out ${
            isFlipped ? "opacity-50" : "opacity-100"
          }`}
          style={{
            backgroundImage: `url(${bgSrc})`,
            backgroundColor: COLORS.almostBlack,
            backfaceVisibility: "hidden",
          }}
        >
          <div
            className={`transition-all duration-300 relative z-10 text-center p-10 rounded-md   bg-black/50 backdrop-blur-sm  ${
              isFlipped ? "opacity-0" : ""
            }
              `}
          >
            <h2 className={`text-4xl font-bold text-white`}>{title}</h2>
            <p className="mt-4  px-4 py-2  rounded-md ">
              Нажмите, чтобы узнать больше
            </p>
          </div>
        </div>

        {/* Back Side */}
        <div
          className={`absolute z-20 w-full h-full bg-white text-black flex flex-col justify-center items-center p-8 font-sans rounded-lg shadow-lg transition-all duration-500 ease-in-out ${
            isFlipped ? "opacity-100 scale-105" : "opacity-0 scale-100"
          }`}
        >
          <h2 className="md:text-4xl text-lg font-bold text-[#9b61ce] mb-4">
            {title}
          </h2>
          <div className="font-medium text-black md:text-lg text-sm">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};
