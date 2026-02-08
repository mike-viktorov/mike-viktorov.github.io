import { Instagram, MessageCircle, Users } from 'lucide-react';

export function Social() {
  const socialLinks = [
    {
      icon: MessageCircle,
      name: 'Telegram',
      description: 'Следите за новостями и фотографиями тренировок',
      link: 'https://t.me/viktorov_team',
      color: 'bg-blue-500',
    },
    {
      icon: Instagram,
      name: 'Instagram',
      description: 'Видео и фото с тренировок и соревнований',
      link: 'https://www.instagram.com/mishasever75/',
      color: 'bg-pink-600',
    },
    {
      icon: Users,
      name: 'ВКонтакте',
      description: 'Сообщество наших спортсменов',
      link: 'https://vk.com/mktbrus',
      color: 'bg-blue-600',
    },
  ];

  return (
    <section className="py-16 bg-gray-50" aria-labelledby="social-heading">
      <div className="container mx-auto px-4">
        <h2 id="social-heading" className="text-4xl text-center mb-4 text-gray-900">Фото и Видео</h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Подписывайтесь на наши социальные сети
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                aria-label={`Перейти на ${social.name}`}
              >
                <div className={`w-16 h-16 ${social.color} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl text-center mb-2 text-gray-900">{social.name}</h3>
                <p className="text-gray-600 text-center text-sm">{social.description}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}