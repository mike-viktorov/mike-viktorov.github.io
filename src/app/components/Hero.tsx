import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Фоновое видео */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          {/* Placeholder для видео - замените src на реальный URL видео */}
          <source
            src="/videos/hero.mp4"
            type="video/mp4"
          />
        </video>
        
        {/* Темный оверлей для читаемости текста */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Пиксельная сетка поверх видео */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 1px,
                rgba(255, 255, 255, 0.03) 1px,
                rgba(255, 255, 255, 0.03) 2px
              ),
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 1px,
                rgba(255, 255, 255, 0.03) 1px,
                rgba(255, 255, 255, 0.03) 2px
              )
            `,
            backgroundSize: '2px 2px'
          }}
        />
      </div>

      {/* Контент */}
      <div className="relative z-10 container mx-auto px-4 py-24 text-center text-white">
        <h1 
          className="text-7xl md:text-9xl mb-6" 
          style={{ 
            fontFamily: 'var(--font-family-display)', 
            letterSpacing: '0.02em',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}
        >
          МИХАИЛ ВИКТОРОВ
        </h1>
        <p className="text-2xl md:text-4xl text-gray-200 mb-6">
          Профессиональный тренер по боксу и тайскому боксу
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Более 20 лет опыта подготовки чемпионов и развития спортсменов всех уровней
        </p>
        <button
          onClick={() => document.getElementById('training')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-lg transition-colors text-lg shadow-lg"
        >
          Записаться на тренировку
        </button>
      </div>

      {/* Индикатор прокрутки */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}