import { Medal, Calendar } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function RecentAchievements() {
  const achievements = [
    {
      athleteName: 'Куклин Матвей',
      competition: 'Первенство Москвы по муайтай',
      medal: 'silver',
      date: 'ноябрь 2025',
      image: '/images/kuklin-matvey.jpg',
    },
    {
      athleteName: 'Рамазан Юнусов',
      competition: 'Первенство Москвы по муайтай',
      medal: 'gold',
      date: 'ноябрь 2025',
      image: '/images/ramazan-unusov.jpg',
    },
    {
      athleteName: 'Абубакир Юнусов',
      competition: 'Первенство Москвы по муайтай',
      medal: 'silver',
      date: 'ноябрь 2025',
      image: '/images/abubakir-unusov.jpg',
    },
    {
      athleteName: 'Евгений Момотов',
      competition: 'Кубок России по муайтай',
      medal: 'silver',
      date: 'ноябрь 2025',
      image: '/images/evgenii-momotov.jpg',
    },
    {
      athleteName: 'Евгений Момотов',
      competition: 'Чемпионат Москвы по тайскому боксу',
      medal: 'gold',
      date: 'ноябрь 2025',
      image: '/images/evgenii-momotov2.jpg',
    },
  ];

  const getMedalColor = (medal: string) => {
    switch (medal) {
      case 'gold':
        return 'bg-yellow-500';
      case 'silver':
        return 'bg-gray-400';
      case 'bronze':
        return 'bg-orange-600';
      default:
        return 'bg-gray-500';
    }
  };

  const getMedalText = (medal: string) => {
    switch (medal) {
      case 'gold':
        return 'Золото';
      case 'silver':
        return 'Серебро';
      case 'bronze':
        return 'Бронза';
      default:
        return '';
    }
  };

  return (
    <section id="achievements" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-12 text-gray-900">Последние достижения</h2>
        <div className="relative">
          <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            <div className="flex gap-6 px-4" style={{ width: 'max-content' }}>
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex-shrink-0 w-80"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <ImageWithFallback
                      src={achievement.image}
                      alt={achievement.athleteName}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 ${getMedalColor(achievement.medal)} rounded-full flex items-center justify-center`}>
                        <Medal className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-900">{getMedalText(achievement.medal)}</span>
                    </div>
                    <h3 className="text-xl mb-2 text-gray-900">{achievement.athleteName}</h3>
                    <p className="text-gray-600 mb-3">{achievement.competition}</p>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{achievement.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}