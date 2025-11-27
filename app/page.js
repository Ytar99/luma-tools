import Head from "next/head";
import Image from "next/image";
import CustomScrollbar from "@/app/_components/CustomScrollbar";
import wormImage from "@/app/_assets/images/pet-worm.webp";

export default function Home() {
  return (
    <>
      <Head>
        <title>Игровые инструменты</title>
        <meta name="description" content="Полезные инструменты для игры" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div
        className="horizontal-container flex h-screen overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Главная секция с навигацией */}
        <section
          id="start"
          className="min-w-full h-screen snap-start flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 bg-gradient-to-br from-gray-900 to-blue-900 text-white border-r border-blue-700"
        >
          <div className="text-center max-w-2xl w-full px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Игровые инструменты
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 md:mb-8 text-blue-200">
              Добро пожаловать! Выберите нужный инструмент:
            </p>

            <nav className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6 md:mt-8">
              {[
                {
                  href: "#calculator",
                  text: "Калькулятор",
                  color: "bg-red-500 hover:bg-red-600",
                },
                {
                  href: "#books",
                  text: "Карта книг",
                  color: "bg-purple-500 hover:bg-purple-600",
                },
                {
                  href: "#maps",
                  text: "Карты",
                  color: "bg-green-500 hover:bg-green-600",
                },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 ${link.color} text-white rounded-lg transition-all duration-300 hover:-translate-y-1 text-sm sm:text-base text-center`}
                >
                  {link.text}
                </a>
              ))}
            </nav>

            <div className="mt-6 sm:mt-8 text-xs sm:text-sm text-blue-300 opacity-75">
              <p>Используйте горизонтальную прокрутку для навигации</p>
              <p className="mt-1">← →</p>
            </div>
          </div>
        </section>

        {/* Калькулятор ресурсов */}
        <section
          id="calculator"
          className="min-w-full h-screen snap-start flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 bg-gradient-to-br from-blue-900 to-purple-900 text-white border-r border-purple-700"
        >
          <div className="text-center w-full max-w-md px-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">
              Калькулятор ресурсов
            </h2>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 md:p-8 w-full max-w-md mx-auto">
              <div className="space-y-3 sm:space-y-4">
                <input
                  type="number"
                  placeholder="Количество предметов"
                  className="w-full p-2 sm:p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 text-sm sm:text-base"
                />

                <select className="w-full p-2 sm:p-3 rounded-lg bg-white/20 border border-white/30 text-white text-sm sm:text-base">
                  <option className="text-gray-800">Дерево</option>
                  <option className="text-gray-800">Камень</option>
                  <option className="text-gray-800">Железо</option>
                  <option className="text-gray-800">Золото</option>
                </select>

                <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                  <button className="p-2 sm:p-3 bg-green-500 hover:bg-green-600 rounded-lg transition-colors text-sm sm:text-base">
                    Рассчитать
                  </button>
                  <button className="p-2 sm:p-3 bg-gray-500 hover:bg-gray-600 rounded-lg transition-colors text-sm sm:text-base">
                    Сброс
                  </button>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-black/20 rounded-lg">
                <h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">
                  Результат:
                </h3>
                <p className="text-blue-200 text-xs sm:text-sm">
                  Введите данные для расчета
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Карта книг */}
        <section
          id="books"
          className="min-w-full h-screen snap-start flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 bg-gradient-to-br from-purple-900 to-pink-900 text-white border-r border-pink-700"
        >
          <div className="text-center w-full max-w-4xl px-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Потерянные книги
            </h2>
            <p className="text-sm sm:text-lg mb-4 sm:mb-6 text-pink-200">
              Найдите все скрытые книги на карте мира
            </p>

            <div className="relative w-full max-w-2xl sm:max-w-3xl mx-auto">
              <div className="bg-gray-800 rounded-xl p-3 sm:p-4 aspect-video flex items-center justify-center text-gray-400 text-sm sm:text-base">
                [Интерактивная карта мира]
                {/* Здесь будет ваша карта */}
              </div>

              {/* Маркеры книг */}
              <div className="absolute top-1/4 left-1/3 text-2xl sm:text-3xl cursor-pointer hover:scale-125 transition-transform">
                📖
              </div>
              <div className="absolute top-1/2 left-2/3 text-2xl sm:text-3xl cursor-pointer hover:scale-125 transition-transform">
                📖
              </div>
              <div className="absolute top-3/4 left-1/4 text-2xl sm:text-3xl cursor-pointer hover:scale-125 transition-transform">
                📖
              </div>
            </div>

            <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 rounded-lg p-3 sm:p-4">
                <h3 className="font-semibold text-sm sm:text-base">
                  Книга магии
                </h3>
                <p className="text-xs sm:text-sm text-pink-200">Лесной храм</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3 sm:p-4">
                <h3 className="font-semibold text-sm sm:text-base">
                  История королевства
                </h3>
                <p className="text-xs sm:text-sm text-pink-200">
                  Королевская библиотека
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-3 sm:p-4">
                <h3 className="font-semibold text-sm sm:text-base">
                  Тайны алхимии
                </h3>
                <p className="text-xs sm:text-sm text-pink-200">
                  Пещера алхимика
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Интерактивные карты */}
        <section
          id="maps"
          className="min-w-full h-screen snap-start flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 bg-gradient-to-br from-pink-900 to-red-900 text-white border-r border-red-700"
        >
          <div className="text-center w-full max-w-6xl px-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">
              Интерактивные карты
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 sm:p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                {/* <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🗺️</div>*/}
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  🗺️ Карта локаций
                </h3>
                <p className="text-red-200 text-xs sm:text-sm">
                  Все ключевые точки мира
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 sm:p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                {/* <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⛏️</div>*/}
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  ⛏️ Карта ресурсов
                </h3>
                <p className="text-red-200 text-xs sm:text-sm">
                  Месторождения руд и растений
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 sm:p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                {/* <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎯</div>*/}
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  🎯 Карта квестов
                </h3>
                <p className="text-red-200 text-xs sm:text-sm">
                  Расположение заданий и NPC
                </p>
              </div>
            </div>

            <div className="bg-black/20 rounded-xl p-4 sm:p-6 max-w-2xl mx-auto">
              <h3 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">
                Быстрый доступ
              </h3>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                <button className="px-3 sm:px-4 py-1 sm:py-2 bg-blue-500 rounded-lg text-xs sm:text-sm">
                  Лес
                </button>
                <button className="px-3 sm:px-4 py-1 sm:py-2 bg-green-500 rounded-lg text-xs sm:text-sm">
                  Горы
                </button>
                <button className="px-3 sm:px-4 py-1 sm:py-2 bg-yellow-500 rounded-lg text-xs sm:text-sm">
                  Пустыня
                </button>
                <button className="px-3 sm:px-4 py-1 sm:py-2 bg-gray-500 rounded-lg text-xs sm:text-sm">
                  Подземелья
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* О проекте */}
        <section
          id="end"
          className="min-w-full h-screen snap-start flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 bg-gradient-to-br from-indigo-900 to-blue-800 text-white"
        >
          <div className="text-center max-w-2xl w-full px-4">
            <div className="mb-6 sm:mb-8">
              <Image
                src={wormImage}
                alt="Паук с яйцами"
                width={150}
                height={150}
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex items-center justify-center mx-auto mb-4 sm:mb-6"
              />
            </div>

            <div className="m-6 text-xs sm:text-sm text-blue-300 opacity-75">
              <p>Думал здесь что-то будет?</p>
            </div>

            <a
              href="#start"
              className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-linear-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg transition-all duration-300 hover:-translate-y-1 text-sm sm:text-base text-center`}
            >
              Пойти налево
            </a>
          </div>
        </section>
      </div>
      <CustomScrollbar />
    </>
  );
}
