import { useState } from "react";
import { COLORS } from "../App";

export const Card = ({ title, description, bgSrc }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div
      className="relative  rounded-lg shadow-lg cursor-pointer w-full  mx-auto h-[500px] overflow-hidden"
      onClick={handleFlip}
    >
      {/* Card Container */}
      <div
        className={`relative w-full h-full card-container ${
          isFlipped ? "flipped" : ""
        }`}
        style={{
          perspective: "1000px",
        }}
      >
        {/* Front Side */}
        <div
          className={`absolute w-full h-full flex flex-col justify-center items-center card-side bg-center bg-cover rounded-lg shadow-inner transition-opacity duration-500 ${
            isFlipped ? "opacity-0" : "opacity-100"
          }`}
          style={{
            backfaceVisibility: "hidden",
            backgroundImage: `url(${bgSrc})`,
            backgroundColor: COLORS.almostBlack,
          }}
        >
          {/* Overlay for Blur and Darkness */}
          <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-0 rounded-lg"></div>
          <div className="relative z-10 text-center px-6">
            <h2 className="text-4xl font-bold text-white">{title}</h2>
            <p className="mt-4  text-gray-300">Нажмите, чтобы узнать больше</p>
          </div>
        </div>

        {/* Back Side */}
        <div
          className={`bg-gray-50 text-black absolute w-full h-full  card-side p-4 sm:p-8 rounded-lg transition-transform duration-500`}
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            // backgroundColor: COLORS.almostBlack,
            color: COLORS.almostBlack,
          }}
        >
          <h2 className="text-4xl font-bold mb-4 sm:mb-8 w-full">{title}</h2>
          <div className="font-medium  text-black  text-sm sm:text-lg">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};
