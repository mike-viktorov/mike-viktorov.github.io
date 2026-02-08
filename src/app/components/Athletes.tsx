import { Trophy } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Athletes() {
  const athletes = [
    {
      name: 'Альмира Тишурина',
      image: '/images/almira.jpg',
      achievements: [
        'Чемпионка Кубка Москвы',
        'Чемпионка Москвы',
        'Чемпионка Кубка России',
        'Чемпионка России',
        'Чемпионка мира',
        'Участница проф. боёв GLORY (Нидерланды)',
      ],
    },
    {
      name: 'Дмитрий Викторов',
      image: '/images/dmitry-viktorov.jpg',
      achievements: [
        'Призёр Кубка России',
        'Призёр Кубка Кавказа',
        'Призёр Кубка Москвы',
        'Призёр чемпионата Москвы',
      ],
    },
    {
      name: 'Павел Хандохин',
      image: '/images/pavel.jpeg',
      achievements: [
        'Призёр чемпионата Москвы',
        'Призёр Кубка Москвы',
        'Участник проф. боёв Russian Challenge',
      ],
    },
    {
      name: 'Евгений Момотов',
      image: '/images/evgenii-momotov3.jpg',
      achievements: [
        'Призёр Кубка России по муайтай',
        'Пятикратный чемпион Москвы',
        'Пятикратный чемпион Кубка Москвы по муайтай',
      ],
    },
  ];

  return (
    <section id="athletes" className="py-16 bg-gray-50" aria-labelledby="athletes-heading">
      <div className="container mx-auto px-4">
        <h2 id="athletes-heading" className="text-4xl text-center mb-4 text-gray-900">Выдающиеся спортсмены</h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Воспитанники тренера — чемпионы и призёры престижных соревнований
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {athletes.map((athlete, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <ImageWithFallback
                  src={athlete.image}
                  alt={athlete.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl text-gray-900">{athlete.name}</h3>
                </div>
                <ul className="space-y-2">
                  {athlete.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                      <span className="text-red-600 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}