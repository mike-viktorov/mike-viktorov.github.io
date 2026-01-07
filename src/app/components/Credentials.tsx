import { Award, Trophy, Users, Clock } from 'lucide-react';

export function Credentials() {
  const credentials = [
    {
      icon: Trophy,
      title: 'Мастер Спорта по боксу',
    },
    {
      icon: Award,
      title: 'Кандидат в мастера спорта по тайскому боксу',
    },
    // {
    //   icon: Users,
    //   title: 'Тренер сборной Москвы по тайскому боксу',
    // },
    {
      icon: Users,
      title: 'Тренер федерации тайского бокса Москвы',
    },
    {
      icon: Clock,
      title: 'Стаж работы более 20 лет',
    },
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-12 text-gray-900">Регалии тренера</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {credentials.map((credential, index) => {
            const Icon = credential.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-900">{credential.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
