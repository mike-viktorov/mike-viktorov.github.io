## Установка и запуск

### Установка зависимостей

```bash
npm i
```

### Разработка

```bash
npm run dev
```

Запускает dev-сервер для разработки.

## Сборка для production

### Обычная сборка

```bash
npm run build
```

Создает оптимизированную сборку в папке `dist/`.

### Сборка с prerendering (рекомендуется для SEO)

Для улучшения индексации поисковыми системами рекомендуется использовать prerendering, который генерирует статический HTML из SPA.

**Шаг 1:** Установите puppeteer (требуется только один раз):

```bash
npm install --save-dev puppeteer
```

**Шаг 2:** Запустите сборку с prerendering:

```bash
npm run build:prerender
```

Этот скрипт:
1. Собирает проект (`vite build`)
2. Генерирует статический HTML с полным контентом страницы
3. Копирует `robots.txt` и `sitemap.xml` в папку `dist/`

**Важно:** После prerendering в `dist/index.html` будет полный HTML-контент, который поисковые системы смогут проиндексировать без необходимости выполнения JavaScript.

## SEO оптимизация

Проект включает:
- ✅ Полные SEO мета-теги (description, keywords, Open Graph, Twitter Cards)
- ✅ Структурированные данные Schema.org (JSON-LD)
- ✅ `robots.txt` и `sitemap.xml`
- ✅ Семантическая HTML разметка
- ✅ Prerendering для статической генерации контента

Подробнее см. [SEO_IMPROVEMENTS.md](./SEO_IMPROVEMENTS.md)
