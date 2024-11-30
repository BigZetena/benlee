import { FaTelegram, FaYoutube, FaYandex } from "react-icons/fa";

export const Header = () => {
  return (
    <>
      {/* Background Section */}
      <section
        className="bg-center bg-cover"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(28, 10, 40, 0.8), rgba(3, 0, 3, 1)), url(header.jpg)`,
        }}
      >
        <header className="relative w-full h-screen bg-center bg-cover text-white flex flex-col justify-between max-w-7xl mx-auto px-4">
          {/* Top Bar */}
          <div className="absolute top-0 left-0 w-full flex justify-between items-center py-4 px-4 sm:px-8">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <img
                src="logo.png"
                alt="Logo"
                className="w-12 h-12 sm:w-20 sm:h-20 rounded-full border-4 "
              />
              <h3 className="font-extrabold text-xl sm:text-4xl">
                BENLEE
                <br />
                SOUND
              </h3>
            </div>
            {/* Social Links */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              <a
                href="https://t.me/benleesoundsamaizing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl sm:text-3xl hover:text-purple-300 transition duration-300"
              >
                <FaTelegram />
              </a>
              <a
                href="https://dzen.ru/benleesoundsamazing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl sm:text-3xl hover:text-purple-300 transition duration-300"
              >
                <FaYandex />
              </a>
              <a
                href="https://www.youtube.com/channel/UCN5WDXVH79n7J33kW4Tu-LQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl sm:text-3xl hover:text-purple-300 transition duration-300"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col justify-center  px-4 sm:px-12 lg:px-24">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-wider drop-shadow-md leading-tight">
              Из <span className="text-[#C179FF]">идеи</span> создаем
              <br />
              <span className="text-[#C179FF] text-4xl sm:text-7xl lg:text-8xl">
                ВИБРАЦИИ
              </span>
            </h1>
            <p className="mt-4 text-sm sm:mt-6 sm:text-xl text-gray-200 max-w-lg sm:max-w-2xl">
              Вдохновение. Профессионализм. Эмоции.
            </p>
          </div>

          {/* Bottom Space */}
          <div className="pb-6"></div>
        </header>
      </section>

      {/* Moving Background Section */}
      <div className="relative overflow-hidden bg-black text-center">
        <div className="flex scroll h-64 md:h-96 absolute inset-0 w-[200vw]">
          <div
            className="w-screen h-full bg-cover bg-center"
            style={{ backgroundImage: "url(wave.svg)" }}
          ></div>
          <div
            className="w-screen h-full bg-cover bg-center"
            style={{ backgroundImage: "url(wave.svg)" }}
          ></div>
        </div>

        {/* Content */}
        <h2 className="relative text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-wider drop-shadow-md max-w-max py-10 sm:py-20 lg:py-32 mx-auto">
          <span className="text-[#C179FF] glow">Атмосфера</span> и{" "}
          <span className="text-[#C179FF] glow">эмоции</span> <br />
          для <span className="text-[#C179FF] glow">каждого</span> проекта
        </h2>
      </div>
    </>
  );
};
