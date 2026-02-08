import { User, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function TrainingTypes() {
  return (
    <section id="training" className="py-16 bg-white" aria-labelledby="training-heading">
      <div className="container mx-auto px-4">
        <h2 id="training-heading" className="text-4xl text-center mb-12 text-gray-900">Типы тренировок</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Индивидуальные тренировки */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="aspect-video overflow-hidden">
              <ImageWithFallback
                src="/images/personal.jpg"
                alt="Индивидуальная тренировка"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl text-gray-900">Индивидуальные тренировки</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Всё внимание тренера сфокусировано на одном человеке, что позволяет детально 
                разбирать технику, исправлять ошибки и быстрее прогрессировать.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">✓</span>
                  <span>Персональная программа тренировок</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">✓</span>
                  <span>Максимальное внимание к технике</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">✓</span>
                  <span>Гибкий график занятий</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Групповые тренировки */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="aspect-video overflow-hidden">
              <ImageWithFallback
                src="/images/group.jpg"
                alt="Групповая тренировка"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl text-gray-900">Групповые тренировки</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Отработка навыков в парах с разными людьми разного роста и стиля. 
                Это очень важно для развития адаптивности и универсальности в бою.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">✓</span>
                  <span>Работа в парах с разными партнёрами</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">✓</span>
                  <span>Спарринги и практические упражнения</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">✓</span>
                  <span>Командная атмосфера и мотивация</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
