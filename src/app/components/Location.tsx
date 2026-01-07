import { MapPin, Bus, Train, ExternalLink } from 'lucide-react';

export function Location() {
  // Координаты: Москва, СВАО, ул. Малыгина 3с2
  const yandexMapsUrl = 'https://yandex.ru/maps/?rtext=~55.877652,37.699651&rtt=auto';
  const dgisUrl = 'https://2gis.ru/moscow/directions/points/%7C37.699666%2C55.877595%3B4504235282631417?m=37.62017%2C55.753873%2F10.76';
  
  return (
    <section id="location" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-12 text-gray-900">Где проходят занятия</h2>
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
            <p className="text-xl mb-6">Свяжитесь с нами для записи на индивидуальные или групповые занятия</p>
            <a href="https://t.me/mike_viktorov" className="bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Связаться с тренером
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}