"use client";
import { useState, useEffect, useRef } from "react";
import snailImage from "@/app/_assets/images/pet-snail.webp";
import Image from "next/image";

const CustomScrollbar = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const scrollbarRef = useRef(null);
  const containerRef = useRef(null);

  const sections = [
    { id: "home", label: "Главная" },
    { id: "calculator", label: "Калькулятор" },
    { id: "books", label: "Книги" },
    { id: "maps", label: "Карты" },
    { id: "end", label: "Конец" },
  ];

  useEffect(() => {
    containerRef.current = document.querySelector(".horizontal-container");

    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const scrollLeft = container.scrollLeft;
      const clientWidth = container.clientWidth;

      // Определяем активную секцию
      const sectionIndex = Math.round(scrollLeft / clientWidth);
      setActiveSection(Math.min(sectionIndex, sections.length - 1));
    };

    const handleMouseMove = (e) => {
      if (!isDragging || !containerRef.current || !scrollbarRef.current) return;

      const scrollbar = scrollbarRef.current;
      const container = containerRef.current;
      const scrollbarRect = scrollbar.getBoundingClientRect();

      const clickX = e.clientX - scrollbarRect.left;
      const scrollbarWidth = scrollbarRect.width;
      const scrollPercentage = Math.min(
        Math.max(clickX / scrollbarWidth, 0),
        1,
      );

      // Рассчитываем секцию для перехода
      const targetSection = Math.floor(scrollPercentage * sections.length);

      container.scrollTo({
        left: targetSection * container.clientWidth,
        behavior: "smooth",
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    // Добавляем обработчики событий
    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll);
    }

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("resize", handleScroll);

    // Инициализируем начальное положение
    handleScroll();

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", handleScroll);
      }
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isDragging, sections.length]);

  const scrollToSection = (sectionIndex) => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    container.scrollTo({
      left: sectionIndex * container.clientWidth,
      behavior: "smooth",
    });
  };

  const handleSegmentClick = (index) => {
    scrollToSection(index);
  };

  const handleThumbMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  // Позиция маркера - центр активного сегмента
  const segmentWidth = 100 / sections.length;
  const markerPosition = activeSection * segmentWidth + segmentWidth / 2;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-4/5 max-w-2xl z-50">
      {/* Сегментированный скроллбар */}
      <div
        ref={scrollbarRef}
        className="relative flex items-center w-full h-3 bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-full cursor-pointer border border-gray-600"
      >
        {/* Сегменты с рисками */}
        {sections.map((section, index) => (
          <div
            key={section.id}
            className="flex items-center justify-center flex-1 h-full relative group"
            onClick={() => handleSegmentClick(index)}
          >
            {/* Сегмент - кликабельная область */}
            <div
              className={`w-full h-1 mx-1 rounded-full transition-all duration-300 ${
                index === activeSection
                  ? "bg-gradient-to-r from-blue-400 to-purple-400"
                  : "bg-gray-600 group-hover:bg-gray-500"
              }`}
            />

            {/* Вертикальная риска (кроме последней) */}
            {index < sections.length - 1 && (
              <div className="absolute right-0 w-px h-3 bg-gray-400" />
            )}
          </div>
        ))}

        {/* Маркер текущей секции - исправленное позиционирование */}
        <div
          className="absolute transition-all duration-300 ease-out w-10 h-10"
          style={{
            left: `${markerPosition}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          onMouseDown={handleThumbMouseDown}
        >
          <div className="relative w-full h-full">
            <Image
              src={snailImage}
              alt="marker"
              fill
              className="object-contain drop-shadow-md"
              onError={(e) => {
                // Fallback если изображение не загрузилось
                e.target.style.display = "none";
                const svg = document.getElementById("fallback-svg");
                if (svg) svg.style.display = "block";
              }}
            />
            {/* Fallback SVG если изображение не загрузилось */}
            <svg
              id="fallback-svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 hidden"
            >
              <circle
                cx="20"
                cy="20"
                r="18"
                fill="url(#gradient)"
                stroke="white"
                strokeWidth="2"
              />
              <circle cx="20" cy="20" r="6" fill="white" />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* Подписи секций - выравниваем по центру сегментов */}
      <div className="flex w-full mt-3">
        {sections.map((section, index) => {
          const segmentCenter = index * segmentWidth + segmentWidth / 2;
          return (
            <button
              key={section.id}
              className="absolute transform -translate-x-1/2 transition-all duration-300 text-xs"
              style={{
                left: `${segmentCenter}%`,
              }}
              onClick={() => scrollToSection(index)}
            >
              <span
                className={`
                px-1 py-1 rounded-md transition-all duration-300 text-nowrap text-[8px] sm:text-[12px]
                ${
                  index === activeSection
                    ? "text-white font-semibold bg-blue-500 bg-opacity-20 scale-110"
                    : "text-gray-400 hover:text-gray-300 hover:bg-gray-500 hover:bg-opacity-20"
                }
              `}
              >
                {section.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CustomScrollbar;
