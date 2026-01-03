import { Medal, Calendar } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function RecentAchievements() {
  const achievements = [
    {
      athleteName: 'Альмира Тишурина',
      competition: 'Чемпионат России по тайскому боксу',
      medal: 'gold',
      date: '15 декабря 2025',
      image: 'https://images.unsplash.com/photo-1601039834001-7d32a613c60d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdWF5JTIwdGhhaSUyMGZpZ2h0ZXJ8ZW58MXx8fHwxNzY3NDcyMDUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      athleteName: 'Дмитрий Викторов',
      competition: 'Кубок Москвы по боксу',
      medal: 'silver',
      date: '3 ноября 2025',
      image: 'https://images.unsplash.com/photo-1587653478919-9cdd825ea821?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjBjaGFtcGlvbiUyMG1lZGFsfGVufDF8fHx8MTc2NzQ3MjA1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      athleteName: 'Павел Хандохин',
      competition: 'Чемпионат Москвы по тайскому боксу',
      medal: 'bronze',
      date: '20 октября 2025',
      image: 'https://images.unsplash.com/photo-1716307043003-dbe6a5cc496e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjBneW18ZW58MXx8fHwxNzY3NDcyMDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      athleteName: 'Альмира Тишурина',
      competition: 'Кубок России по тайскому боксу',
      medal: 'gold',
      date: '28 сентября 2025',
      image: 'https://images.unsplash.com/photo-1724529808495-8b7cf64e3e3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjB2aWN0b3J5JTIwYXRobGV0ZXxlbnwxfHx8fDE3Njc0NzI1OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      athleteName: 'Дмитрий Викторов',
      competition: 'Кубок Кавказа по боксу',
      medal: 'bronze',
      date: '12 августа 2025',
      image: 'https://images.unsplash.com/photo-1633715398353-1faf3874a597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWNrYm94aW5nJTIwY29tcGV0aXRpb258ZW58MXx8fHwxNzY3NDcyNTkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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