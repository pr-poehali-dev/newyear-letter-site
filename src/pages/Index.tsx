import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';

const Snowflake = ({ delay, duration, left }: { delay: number; duration: number; left: string }) => (
  <div
    className="absolute text-snow opacity-70 pointer-events-none"
    style={{
      left,
      top: '-10vh',
      fontSize: `${Math.random() * 10 + 10}px`,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
    }}
  >
    ❄
  </div>
);

const TwinkleLight = ({ delay, top, left }: { delay: number; top: string; left: string }) => (
  <div
    className="absolute w-2 h-2 bg-gold rounded-full animate-twinkle"
    style={{
      top,
      left,
      animationDelay: `${delay}s`,
    }}
  />
);

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const snowflakes = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 15,
    left: `${Math.random() * 100}%`,
  }));

  const lights = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    delay: Math.random() * 2,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-night via-[#1e2740] to-night relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {snowflakes.map((snow) => (
          <div
            key={snow.id}
            className="animate-snowfall"
            style={{
              position: 'absolute',
              left: snow.left,
              animationDelay: `${snow.delay}s`,
              animationDuration: `${snow.duration}s`,
            }}
          >
            <Snowflake delay={snow.delay} duration={snow.duration} left="0" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {lights.map((light) => (
          <TwinkleLight key={light.id} delay={light.delay} top={light.top} left={light.left} />
        ))}
      </div>

      <div className="relative z-10">
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className={`max-w-4xl text-center ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="mb-8 inline-block animate-float">
              <div className="text-8xl mb-4">🎄</div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-snow">
              С Новым <span className="text-gold">2025</span> Годом!
            </h1>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent w-32"></div>
              <div className="text-4xl animate-twinkle">✨</div>
              <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent w-32"></div>
            </div>

            <p className="text-xl md:text-2xl text-frost font-light leading-relaxed mb-12 max-w-2xl mx-auto">
              Пусть этот год принесёт вам радость, счастье и исполнение всех желаний! 
              Пусть каждый день будет наполнен волшебством и новыми открытиями! 🎁
            </p>

            <div className="flex gap-6 justify-center items-center flex-wrap">
              <div className="text-5xl animate-float" style={{ animationDelay: '0.2s' }}>🎅</div>
              <div className="text-5xl animate-float" style={{ animationDelay: '0.4s' }}>⛄</div>
              <div className="text-5xl animate-float" style={{ animationDelay: '0.6s' }}>🎁</div>
              <div className="text-5xl animate-float" style={{ animationDelay: '0.8s' }}>🔔</div>
            </div>
          </div>
        </section>

        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className={`max-w-3xl ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
            <div className="bg-card/40 backdrop-blur-sm border-2 border-gold/30 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-gold mb-4">
                  Дорогие друзья!
                </h2>
                <div className="flex justify-center gap-4 mb-6">
                  <span className="text-3xl animate-twinkle">🌟</span>
                  <span className="text-3xl animate-twinkle" style={{ animationDelay: '0.5s' }}>🌟</span>
                  <span className="text-3xl animate-twinkle" style={{ animationDelay: '1s' }}>🌟</span>
                </div>
              </div>

              <div className="space-y-6 text-lg md:text-xl text-snow leading-relaxed">
                <p className="flex items-start gap-3">
                  <Icon name="Sparkles" className="text-gold mt-1 flex-shrink-0" size={24} />
                  <span>
                    Желаю вам в новом году крепкого здоровья, безграничного счастья и неиссякаемой энергии для воплощения самых смелых идей!
                  </span>
                </p>
                
                <p className="flex items-start gap-3">
                  <Icon name="Heart" className="text-holiday mt-1 flex-shrink-0" size={24} />
                  <span>
                    Пусть каждый день радует приятными сюрпризами, а рядом всегда будут любящие и родные люди!
                  </span>
                </p>
                
                <p className="flex items-start gap-3">
                  <Icon name="Star" className="text-gold mt-1 flex-shrink-0" size={24} />
                  <span>
                    Пусть в вашем доме царят уют, тепло и достаток, а новый год станет годом великих свершений и радостных событий!
                  </span>
                </p>

                <div className="text-center pt-8 border-t border-gold/30 mt-8">
                  <p className="text-2xl font-semibold text-gold mb-2">
                    С наступающим Новым Годом! 🎊
                  </p>
                  <p className="text-frost">
                    Пусть он будет волшебным! ✨
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <div className="text-6xl animate-float">
          🎉
        </div>
      </div>
    </div>
  );
};

export default Index;
