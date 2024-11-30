import { FaTelegram, FaYandex, FaYoutube } from "react-icons/fa";
import { Card } from "./components/Card";
import { Header } from "./components/Header";

// Color palette
export const COLORS = {
  lightPurple: "#C179FF",
  purple: "#9C4DCC",
  darkPurple: "#432867",
  almostBlack: "#1A0226",
};

function App() {
  return (
    <div className="bg-[#020003] text-white">
      {" "}
      <Header />
      <div className="min-h-screen flex flex-col items-center animate-fade-in container max-w-7xl mx-auto px-4">
        {/* Header */}
        {/* Main Content */}{" "}
        <main className="flex flex-col w-full items-center">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 w-full px-4">
            <Card
              bgSrc="bit.jpg"
              title="Бит/Инструментал"
              description={
                <>
                  Одна из самых распространённых проблем начинающих и не только
                  исполнителей-это во первых поиск бита подходящего по стилю или
                  написание текста и вокальной партии под [FREE] бит с Youtube.
                  Хороший трек-это симбиоз аккомпанимента с вокалом, по этому в
                  нашу услугу входит{" "}
                  <ul className="list-disc ml-4">
                    <li>
                      Внимательный диалог в ходе которого будут приняты во
                      внимание все предпочтения и пожелания
                    </li>
                    <li>
                      Работа с референсом. Создание бита основываясь на
                      предоставленном референсе{" "}
                    </li>
                    <li>
                      Аранжировка и стилизация согласно тексту, идее и
                      настроению трека
                    </li>
                  </ul>
                  Цена формируется исходя из объема работы.
                </>
              }
            />
            <Card
              bgSrc="sved.jpg"
              title="Сведение"
              description={
                <>
                  Сведение-это процесс в ходе которого ваш трек обретает
                  завершённый вид и самое главное баланс между всеми
                  инструментами, голосами и прочими аудиоматериалами. <br />
                  Первый результат вы получите в течении 24 часов после
                  получения дорожек. <br />С целью избежать "а может так
                  попробуем" правок, есть возможность присутствовать и наблюдать
                  за созданием звука в вашем треке онлайн. <br />
                  Цена формируется исходя из объема работы.
                </>
              }
            />
            <Card
              bgSrc="red.jpg"
              title="Редакция Вокала"
              description={
                <>
                  Редакция вокала подразумевает под собой комплекс действий
                  необходимый для придания "профессионализма" вашим вокальным
                  дорожкам.
                  <ul className="list-disc ml-4">
                    <li>
                      Подбор лучших дублей из предосталвенного количества
                      записей.
                    </li>
                    <li>
                      Ручная коррекция динамики "С"ок, шумов, взрывных
                      согласных, а так же ликвидация гула комнаты.
                    </li>
                    <li>
                      Склевание лучших дублей в одну чистую дорожку 4. Дотянем
                      то, что не дотянул вокалист
                    </li>
                  </ul>
                  Цена формируется в зависимости от объема (часов) работы.
                </>
              }
            />
            <Card
              bgSrc="port.jpg"
              title="Портфолио"
              description="Портфолио нашего лучшего продакшена! Ознакомьтесь с примерами нашей работы."
            />
          </div>
        </main>
        {/* Call to Action */}
        <section className="my-16 text-center">
          <h2 className="text-3xl font-bold text-lightPurple">
            Начните создавать музыку уже сегодня
          </h2>
          <p className="mt-2 text-gray-400">
            Мы готовы превратить вашу идею в настоящий хит!
          </p>
        </section>
        {/* Footer */}
        <footer className="w-full bg-almostBlack text-center py-6">
          <ul className="flex justify-center space-x-6 text-gray-400">
            <li>
              <a
                href="https://t.me/benleesoundsamaizing"
                className="hover:text-purple-400 flex gap-2 items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram />
                Telegram
              </a>
            </li>
            <li>
              <a
                href="https://dzen.ru/benleesoundsamazing"
                className="hover:text-purple-400 flex gap-2 items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYandex />
                Дзен
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCN5WDXVH79n7J33kW4Tu-LQ"
                className="hover:text-purple-400 flex gap-2 items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
                YouTube
              </a>
            </li>
          </ul>
          <p className="mt-4 text-gray-500 text-sm">
            © 2024 Benlee Sound. Все права защищены.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
