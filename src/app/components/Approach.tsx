import { Target, Users, Heart, TrendingUp } from 'lucide-react';

export function Approach() {
  const approaches = [
    {
      icon: Target,
      title: 'Подготовка к соревнованиям',
      description: 'Профессиональная подготовка спортсменов для участия в соревнованиях любого уровня',
    },
    {
      icon: TrendingUp,
      title: 'Постановка техники',
      description: 'Детальная работа над техникой ударов, защиты и передвижения',
    },
    {
      icon: Users,
      title: 'Работа с действующими спортсменами',
      description: 'Совершенствование навыков для профессиональных и любительских бойцов',
    },
    {
      icon: Heart,
      title: 'Занятия для любителей, девушек и детей',
      description: 'Индивидуальный подход к каждому, независимо от возраста и уровня подготовки',
    },
  ];

  return (
    <section id="approach" className="py-16 bg-gray-50" aria-labelledby="approach-heading">
      <div className="container mx-auto px-4">
        <h2 id="approach-heading" className="text-4xl text-center mb-4 text-gray-900">Подход к обучению</h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Индивидуальный подход к каждому спортсмену в зависимости от их целей и задач. 
          Умение найти ключ к разным людям — залог успешной тренерской работы.
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {approaches.map((approach, index) => {
            const Icon = approach.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl mb-3 text-gray-900">{approach.title}</h3>
                <p className="text-gray-600">{approach.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
