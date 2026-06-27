import { MapPin, Bus, Train, ExternalLink, Phone } from 'lucide-react';

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.062 3.345-.479.329-.913.49-1.302.481-.428-.009-1.252-.241-1.865-.44-.751-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/>
  </svg>
);

const MaxIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <text
      x="12"
      y="17"
      textAnchor="middle"
      fontSize="9"
      fontWeight="900"
      fill="currentColor"
      fontFamily="system-ui, -apple-system, sans-serif"
    >
      MAX
    </text>
  </svg>
);

const contactChannels = [
  {
    name: 'Telegram',
    href: 'https://t.me/mike_viktorov',
    Icon: TelegramIcon,
    iconColor: 'text-[#229ED9]',
    ariaLabel: 'Написать в Telegram',
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/79268790946',
    Icon: WhatsAppIcon,
    iconColor: 'text-[#25D366]',
    ariaLabel: 'Написать в WhatsApp',
  },
  {
    name: 'MAX',
    href: 'https://max.ru/u/f9LHodD0cOJL8fVLtZLOT71BKVGUrbIrOszB93zrAuxsqr63eE2OtZcjLIE',
    Icon: MaxIcon,
    iconColor: 'text-[#0077FF]',
    ariaLabel: 'Написать в MAX',
  },
  {
    name: 'Позвонить',
    href: 'tel:+79268790946',
    Icon: Phone,
    iconColor: 'text-red-600',
    ariaLabel: 'Позвонить тренеру',
  },
];

export function Location() {
  // Координаты: Москва, СВАО, ул. Малыгина 3с2
  const yandexMapsUrl = 'https://yandex.ru/maps/?rtext=~55.877652,37.699651&rtt=auto';
  const dgisUrl = 'https://2gis.ru/moscow/directions/points/%7C37.699666%2C55.877595%3B4504235282631417?m=37.62017%2C55.753873%2F10.76';
  
  return (
    <section id="location" className="py-16 bg-white" aria-labelledby="location-heading">
      <div className="container mx-auto px-4">
        <h2 id="location-heading" className="text-4xl text-center mb-12 text-gray-900">Где проходят занятия</h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Информация о локации */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl mb-2 text-gray-900">Адрес</h3>
                  <p className="text-xl text-gray-700">Москва, СВАО, ул. Малыгина 3с2</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mb-6">
                <h3 className="text-xl mb-4 text-gray-900">Как добраться:</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Train className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 mb-1">От платформы Лось или метро Бабушкинская:</p>
                      <p className="text-gray-600">605 маршрутка или автобус до остановки "Санаторий Светлана"</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bus className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 mb-1">От метро Медведково:</p>
                      <p className="text-gray-600">Маршрутное такси T80 или автобус 774 до остановки "ул. Малыгина"</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Кнопки для маршрутов */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-xl mb-4 text-gray-900">Построить маршрут:</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={yandexMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg transition-colors"
                  >
                    <span>Яндекс.Карты</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={dgisUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    <span>2GIS</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Карта */}
            <div className="rounded-lg overflow-hidden shadow-sm h-[500px]">
              <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3Aed45773d2be6babc8dfb71c45c8ae6a5e5c1772ff4472753f4231a346e9aab82&amp;source=constructor"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen={true}
                  style={{position: 'relative'}}
                  title="Карта локации"
              />
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-red-600 text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl mb-4">Готовы начать тренировки?</h3>
            <p className="text-xl mb-8">Выберите удобный способ связи</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
              {contactChannels.map(({ name, href, Icon, iconColor, ariaLabel }) => {
                const isExternal = href.startsWith('http');
                return (
                  <a
                    key={name}
                    href={href}
                    {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    aria-label={ariaLabel}
                    className="bg-white text-gray-900 px-4 py-5 rounded-lg hover:bg-gray-100 hover:-translate-y-0.5 transition-all flex flex-col items-center gap-2 shadow-sm"
                  >
                    <Icon className={`w-8 h-8 ${iconColor}`} />
                    <span>{name}</span>
                  </a>
                );
              })}
            </div>
            <p className="mt-6 text-lg text-white/90">
              Телефон:{' '}
              <a href="tel:+79268790946" className="underline underline-offset-4 hover:text-white">
                8 (926) 879-09-46
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}