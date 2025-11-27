import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Игровые инструменты</title>
        <meta name="description" content="Полезные инструменты для игры" />
      </Head>

      <div className="flex h-dvh overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth">
        {/* Главная секция с навигацией */}
        <section className="min-w-full h-dvh snap-start flex flex-col justify-center items-center p-8 bg-gradient-to-br from-gray-900 to-blue-900 text-white border-r border-blue-700">
          <div className="text-center max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Игровые инструменты</h1>
            <p className="text-xl mb-8 text-blue-200">Добро пожаловать! Выберите нужный инструмент:</p>

            <nav className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href="#calculator"
                className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all duration-300 hover:-translate-y-1"
              >
                Калькулятор ресурсов
              </a>
              <a
                href="#books"
                className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-all duration-300 hover:-translate-y-1"
              >
                Карта книг
              </a>
              <a
                href="#maps"
                className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all duration-300 hover:-translate-y-1"
              >
                Интерактивные карты
              </a>
              <a
                href="#crafting"
                className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition-all duration-300 hover:-translate-y-1"
              >
                Крафтинг
              </a>
            </nav>
          </div>
        </section>

        {/* Калькулятор ресурсов */}
        <section
          id="calculator"
          className="min-w-full h-dvh snap-start flex flex-col justify-center items-center p-8 bg-gradient-to-br from-blue-900 to-purple-900 text-white border-r border-purple-700"
        >
          <div className="text-center max-w-2xl w-full">
            <h2 className="text-4xl font-bold mb-8">Калькулятор ресурсов</h2>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 max-w-md mx-auto">
              <div className="space-y-4">
                <input
                  type="number"
                  placeholder="Количество предметов"
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200"
                />

                <select className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white">
                  <option className="text-gray-800">Дерево</option>
                  <option className="text-gray-800">Камень</option>
                  <option className="text-gray-800">Железо</option>
                  <option className="text-gray-800">Золото</option>
                </select>

                <div className="grid grid-cols-2 gap-4">
                  <button className="p-3 bg-green-500 hover:bg-green-600 rounded-lg transition-colors">
                    Рассчитать
                  </button>
                  <button className="p-3 bg-gray-500 hover:bg-gray-600 rounded-lg transition-colors">Сброс</button>
                </div>
              </div>

              <div className="mt-6 p-4 bg-black/20 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Результат:</h3>
                <p className="text-blue-200">Введите данные для расчета</p>
              </div>
            </div>
          </div>
        </section>

        {/* Карта книг */}
        <section
          id="books"
          className="min-w-full h-dvh snap-start flex flex-col justify-center items-center p-8 bg-gradient-to-br from-purple-900 to-pink-900 text-white border-r border-pink-700"
        >
          <div className="text-center w-full max-w-4xl">
            <h2 className="text-4xl font-bold mb-8">Потерянные книги</h2>
            <p className="text-lg mb-6 text-pink-200">Найдите все скрытые книги на карте мира</p>

            <div className="relative w-full max-w-3xl mx-auto">
              <div className="bg-gray-800 rounded-xl p-4 aspect-video flex items-center justify-center">
                <span className="text-gray-400">[Интерактивная карта мира]</span>
                {/* Здесь будет ваша карта */}
              </div>

              {/* Маркеры книг */}
              <div className="absolute top-1/4 left-1/3 text-3xl cursor-pointer hover:scale-125 transition-transform">
                📖
              </div>
              <div className="absolute top-1/2 left-2/3 text-3xl cursor-pointer hover:scale-125 transition-transform">
                📖
              </div>
              <div className="absolute top-3/4 left-1/4 text-3xl cursor-pointer hover:scale-125 transition-transform">
                📖
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <h3 className="font-semibold">Книга магии</h3>
                <p className="text-sm text-pink-200">Лесной храм</p>
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <h3 className="font-semibold">История королевства</h3>
                <p className="text-sm text-pink-200">Королевская библиотека</p>
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-2">
                <h3 className="font-semibold">Тайны алхимии</h3>
                <p className="text-sm text-pink-200">Пещера алхимика</p>
              </div>
            </div>
          </div>
        </section>

        {/* Интерактивные карты */}
        <section
          id="maps"
          className="min-w-full h-dvh snap-start flex flex-col justify-center items-center p-8 bg-gradient-to-br from-pink-900 to-red-900 text-white"
        >
          <div className="text-center w-full max-w-6xl">
            <h2 className="text-4xl font-bold mb-8">Интерактивные карты</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-2 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <h3 className="text-xl font-semibold mb-2">🗺️ Карта локаций</h3>
                <p className="text-red-200">Все ключевые точки мира</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-2 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <h3 className="text-xl font-semibold mb-2">⛏️ Карта ресурсов</h3>
                <p className="text-red-200">Месторождения руд и растений</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-2 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <h3 className="text-xl font-semibold mb-2">🎯 Карта квестов</h3>
                <p className="text-red-200">Расположение заданий и NPC</p>
              </div>
            </div>

            <div className="bg-black/20 rounded-xl p-6 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Быстрый доступ</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <button className="px-4 py-1 bg-blue-500 rounded-lg">Ферма</button>
                <button className="px-4 py-1 bg-green-500 rounded-lg">Лес</button>
                <button className="px-4 py-1 bg-gray-500 rounded-lg">Горы</button>
                <button className="px-4 py-1 bg-yellow-500 rounded-lg">Джунгли</button>
                <button className="px-4 py-1 bg-red-500 rounded-lg">Пиратская бухта</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
