// app/[lang]/places/[slug]/page.js
import { notFound } from 'next/navigation';
import { getTranslator } from 'next-intl/server'; // Для получения переводов на сервере
import { getPlaceData, getAllPlaceParams } from '@/lib/places'; // Функции для получения данных
import PlaceDetailComponent from '@/components/PlaceDetailComponent'; // Компонент отображения

// --- Генерация метаданных (SEO) ---
export async function generateMetadata({ params: { lang, slug } }) {
  const place = await getPlaceData(slug); // Получаем данные места по slug

  if (!place) {
    return {
      title: 'Место не найдено', // Заголовок по умолчанию
    };
  }

  // Получаем переводчик для текущего языка
  const t = await getTranslator(lang, 'places'); // Загружаем переводы из messages/[lang].json (раздел 'places')

  // Получаем название и описание на нужном языке
  const title = place.name[lang] || place.name.en; // Название на текущем языке или английском как fallback
  const description = place.shortDescription[lang] || place.shortDescription.en; // Краткое описание

  return {
    title: `${title} | ${t('discover_kyrgyzstan_title')}`, // Формируем заголовок страницы (e.g., "Ала-Арча | Открой Кыргызстан")
    description: description, // Мета-описание
    // Можно добавить openGraph метаданные для соцсетей
    openGraph: {
        title: `${title} | ${t('discover_kyrgyzstan_title')}`,
        description: description,
        images: [
            {
                url: place.mainImageUrl || '/placeholder-image.jpg', // URL основного изображения
                width: 1200,
                height: 630,
                alt: title,
            },
        ],
        locale: lang,
        type: 'article',
    },
  };
}

// --- Компонент страницы ---
export default async function PlacePage({ params: { lang, slug } }) {
  // Получаем данные для конкретного места по его slug
  const placeData = await getPlaceData(slug);

  // Если данные для такого slug не найдены, показываем 404 страницу
  if (!placeData) {
    notFound(); // Встроенная функция Next.js для 404
  }

  // Получаем функцию перевода для использования внутри компонента (если нужно)
  // Обычно переводы лучше получать и передавать из серверного компонента или использовать useTranslations в клиентских
  const t = await getTranslator(lang, 'places'); // Загружаем переводы для компонента

  // Рендерим компонент, отвечающий за отображение деталей места,
  // передавая ему полученные данные и язык
  return (
    <PlaceDetailComponent
        place={placeData}
        lang={lang}
        translations={{ // Передаем нужные переведенные строки
            backToList: t('back_to_list'),
            location: t('location'),
            howToGetThere: t('how_to_get_there'),
            bestTimeToVisit: t('best_time_to_visit'),
            interestingFacts: t('interesting_facts'),
            // ... другие необходимые строки
        }}
    />
  );
}

// --- Генерация статических путей (SSG) ---
// Эта функция сообщает Next.js, какие страницы [slug] нужно сгенерировать во время сборки
export async function generateStaticParams({ params: { lang }}) {
    // Получаем все возможные параметры (языки и слаги)
    // getAllPlaceParams должна вернуть массив объектов типа:
    // [ { slug: 'ala-archa' }, { slug: 'son-kul' }, ... ]
    const places = await getAllPlaceParams();

    // Возвращаем массив параметров для генерации страниц
    // Для каждого места будет сгенерирована страница
    return places.map((place) => ({
        slug: place.slug,
        // lang будет автоматически подставлен Next.js из структуры папок
    }));

    // Важно: Если у вас много мест и вы не хотите генерировать все при сборке,
    // можно не использовать generateStaticParams, тогда страницы будут генерироваться
    // при первом запросе (SSR/ISR), или вернуть пустой массив и настроить fallback.
}

// Указываем, что страницы динамические (хотя мы генерируем их статически с помощью generateStaticParams)
// Это может быть полезно для некоторых конфигураций. Можно и убрать, если generateStaticParams используется.
// export const dynamic = 'force-dynamic'; // Или 'auto', 'force-static', 'error'

// Опционально: Настройка ревалидации (ISR - Incremental Static Regeneration)
// Позволяет периодически обновлять статически сгенерированные страницы без полной пересборки сайта
// export const revalidate = 3600; // Ревалидировать страницу раз в час (в секундах)
