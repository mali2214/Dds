// --- Файл: next.config.js ---
// Конфигурация Next.js с плагином next-intl
const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Добавьте сюда домены, с которых будете загружать изображения (например, Unsplash, Firebase Storage)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co', // Для плейсхолдеров
      },
      // Добавьте другие хосты по мере необходимости
    ],
  },
  // Другие ваши настройки Next.js
};

module.exports = withNextIntl(nextConfig);

// --- Файл: middleware.js ---
// Middleware для обработки языковых префиксов
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ru', 'kg'], // Поддерживаемые языки (добавьте остальные)
  defaultLocale: 'ru', // Язык по умолчанию
  localePrefix: 'as-needed', // Префикс только если язык не по умолчанию ( /en/about, но /about для ru)
  // localePrefix: 'always', // Всегда добавлять префикс ( /ru/about, /en/about)
});

export const config = {
  // Применять middleware ко всем путям, кроме служебных (_next) и файлов статики (images, favicon.ico)
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)']
};


// --- Файл: messages/en.json ---
// Пример файла переводов для английского языка
{
  "common": {
    "discover_kyrgyzstan": "Discover Kyrgyzstan",
    "explore": "Explore",
    "loading": "Loading...",
    "go_back": "Go Back",
    "all_places": "All Attractions",
    "footer_text": "© {year} Discover Kyrgyzstan Project. All rights reserved."
  },
  "HomePage": {
    "welcome_title": "Welcome to the Heart of Central Asia!",
    "welcome_text": "Explore the stunning natural beauty of Kyrgyzstan, from majestic mountains to crystal-clear lakes.",
    "explore_button": "Explore Kyrgyzstan"
  },
  "PlacesPage": {
     "title": "Natural Attractions",
     "description": "Discover the most breathtaking natural wonders of Kyrgyzstan."
  },
  "PlaceCard": {
    "read_more": "Read More"
  },
  "PlaceDetails": {
    "discover_kyrgyzstan_title": "Discover Kyrgyzstan", // Для <title>
    "back_to_list": "Back to List",
    "location": "Location",
    "how_to_get_there": "How to Get There",
    "best_time_to_visit": "Best Time to Visit",
    "interesting_facts": "Interesting Facts",
    "gallery": "Gallery",
    "map": "Map"
  },
   "NotFound": {
    "title": "Not Found",
    "description": "Could not find the requested resource."
  }
}

// --- Файл: messages/ru.json ---
// Пример файла переводов для русского языка
{
  "common": {
    "discover_kyrgyzstan": "Открой Кыргызстан",
    "explore": "Исследовать",
    "loading": "Загрузка...",
    "go_back": "Назад",
    "all_places": "Все достопримечательности",
    "footer_text": "© {year} Проект Открой Кыргызстан. Все права защищены."
  },
  "HomePage": {
    "welcome_title": "Добро пожаловать в Сердце Центральной Азии!",
    "welcome_text": "Исследуйте потрясающую природную красоту Кыргызстана, от величественных гор до кристально чистых озер.",
    "explore_button": "Исследовать Кыргызстан"
  },
  "PlacesPage": {
     "title": "Природные Достопримечательности",
     "description": "Откройте для себя самые захватывающие чудеса природы Кыргызстана."
  },
  "PlaceCard": {
    "read_more": "Читать далее"
  },
  "PlaceDetails": {
    "discover_kyrgyzstan_title": "Открой Кыргызстан", // Для <title>
    "back_to_list": "Назад к списку",
    "location": "Местоположение",
    "how_to_get_there": "Как добраться",
    "best_time_to_visit": "Лучшее время для посещения",
    "interesting_facts": "Интересные факты",
    "gallery": "Галерея",
    "map": "Карта"
  },
  "NotFound": {
    "title": "Не найдено",
    "description": "Не удалось найти запрошенный ресурс."
  }
}


// --- Файл: lib/places.js ---
// Вспомогательные функции для получения данных о местах
// ЗАМЕНИТЕ ЭТО НА РЕАЛЬНУЮ ЛОГИКУ РАБОТЫ С ВАШЕЙ БД (Firebase, Supabase) ИЛИ ФАЙЛАМИ

// Условная база данных
const ALL_PLACES_DATA = {
  'ala-archa': {
    id: 'ala-archa',
    slug: 'ala-archa',
    name: { en: 'Ala Archa National Park', ru: 'Национальный парк Ала-Арча', kg: 'Ала-Арча улуттук паркы' },
    shortDescription: { en: 'Alpine national park in the Tian Shan mountains.', ru: 'Высокогорный национальный парк в горах Тянь-Шаня.', kg: 'Тянь-Шань тоолорундагы бийик тоолуу улуттук парк.' },
    description: { en: 'Detailed description about Ala Archa...', ru: 'Подробное описание про Ала-Арчу...', kg: 'Ала-Арча жөнүндө кеңири маалымат...' },
    mainImageUrl: 'https://images.unsplash.com/photo-1580694834815-1d536d6b44e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    galleryImageUrls: [
        'https://images.unsplash.com/photo-1568662137941-837f36d0f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1542697546-631137581b1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1610445796048-5a0d6b5a5b5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    ],
    locationInfo: { en: '40 km south of Bishkek.', ru: '40 км к югу от Бишкека.', kg: 'Бишкектен 40 км түштүктө.' },
    howToGetThere: { en: 'By taxi or marshrutka from Osh Bazaar.', ru: 'На такси или маршрутке от Ошского базара.', kg: 'Ош базарынан такси же маршрутка менен.' },
    bestTimeToVisit: { en: 'Late spring to early autumn (May-September).', ru: 'Поздняя весна - ранняя осень (май-сентябрь).', kg: 'Жаздын аягы - күздүн башы (май-сентябрь).' },
    facts: {
        en: ['Popular spot for hiking and picnics.', 'Has a glacier accessible by foot.'],
        ru: ['Популярное место для хайкинга и пикников.', 'Есть ледник, доступный пешком.'],
        kg: ['Жөө жүрүштөр жана пикниктер үчүн популярдуу жер.', 'Жөө жетүүгө мүмкүн болгон мөңгү бар.'],
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11799.99019668088!2d74.4786168376858!3d42.61583991163761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ebf71a8f8e5c7%3A0x4f75f3a8e4b8e1a5!2sAla%20Archa%20National%20Park!5e0!3m2!1sen!2skg!4v1678886655443!5m2!1sen!2skg'
  },
  'son-kul': {
    id: 'son-kul',
    slug: 'son-kul',
    name: { en: 'Son Kul Lake', ru: 'Озеро Сон-Куль', kg: 'Соң-Көл' },
    shortDescription: { en: 'Alpine lake located at an altitude of 3016 m.', ru: 'Высокогорное озеро, расположенное на высоте 3016 м.', kg: '3016 м бийиктикте жайгашкан бийик тоолуу көл.' },
    description: { en: 'Detailed description about Son Kul...', ru: 'Подробное описание про Сон-Куль...', kg: 'Соң-Көл жөнүндө кеңири маалымат...' },
    mainImageUrl: 'https://images.unsplash.com/photo-1597280852801-f19ff6a9d4e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    galleryImageUrls: [],
    locationInfo: { en: 'Naryn Region.', ru: 'Нарынская область.', kg: 'Нарын облусу.' },
    howToGetThere: { en: 'Requires a 4x4 vehicle, usually arranged tour.', ru: 'Требуется внедорожник, обычно через организованный тур.', kg: '4x4 унаа талап кылынат, адатта уюштурулган тур аркылуу.' },
    bestTimeToVisit: { en: 'Summer months (June-August).', ru: 'Летние месяцы (июнь-август).', kg: 'Жай айлары (июнь-август).' },
    facts: { en: ['Shepherds graze their livestock here in summer.', 'Possible to stay in yurts.'], ru: ['Пастухи пасут здесь скот летом.', 'Возможно остановиться в юртах.'], kg: ['Жайында койчулар малын ушул жерде жайышат.', 'Боз үйлөрдө калууга мүмкүнчүлүк бар.'] },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188688.7878788684!2d75.05711174999999!3d41.8407778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389a6a5b3e3f7e9d%3A0x1d1f2d3b4c5e6a7b!2sSong-Kol%20Lake!5e0!3m2!1sen!2skg!4v1678886789123!5m2!1sen!2skg'
  },
  // Добавьте больше мест...
};

// Функция для получения данных одного места по slug
export async function getPlaceData(slug) {
  await new Promise(resolve => setTimeout(resolve, 50)); // Имитация задержки
  return ALL_PLACES_DATA[slug] || null;
}

// Функция для получения всех slug'ов для generateStaticParams
export async function getAllPlaceParams() {
  await new Promise(resolve => setTimeout(resolve, 50));
  return Object.keys(ALL_PLACES_DATA).map(slug => ({ slug }));
}

// Функция для получения кратких данных всех мест (для страницы списка /places)
export async function getAllPlacesSummary(lang = 'ru') { // По умолчанию русский
  await new Promise(resolve => setTimeout(resolve, 50));
  return Object.values(ALL_PLACES_DATA).map(place => ({
    slug: place.slug,
    name: place.name[lang] || place.name.en, // Имя на нужном языке или fallback на английский
    shortDescription: place.shortDescription[lang] || place.shortDescription.en,
    mainImageUrl: place.mainImageUrl,
  }));
}


// --- Файл: app/layout.js ---
// Корневой макет (общий для всех языков)
import { Inter } from 'next/font/google';
import './globals.css'; // Импорт глобальных стилей Tailwind

const inter = Inter({ subsets: ['latin', 'cyrillic'] }); // Подключаем кириллицу для Inter

export const metadata = {
  title: 'Discover Kyrgyzstan', // Заголовок по умолчанию
  description: 'Explore the natural beauty of Kyrgyzstan.', // Описание по умолчанию
};

export default function RootLayout({ children }) {
  // Атрибут suppressHydrationWarning нужен из-за особенностей next-intl
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

// --- Файл: app/[lang]/layout.js ---
// Макет для конкретного языка
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { getTranslator } from 'next-intl/server';
import Header from '@/components/Header'; // Импорт компонента Header
import Footer from '@/components/Footer'; // Импорт компонента Footer
import { Inter } from 'next/font/google'; // Убедитесь, что шрифт импортирован

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

// Функция для генерации метаданных для конкретного языка
export async function generateMetadata({ params: { lang } }) {
  const t = await getTranslator(lang, 'common'); // Загружаем общие переводы
  return {
    title: t('discover_kyrgyzstan'),
  };
}

export default function LocaleLayout({ children, params: { lang } }) {
  const messages = useMessages();

  return (
    // Язык для <html> будет унаследован из корневого layout.js,
    // но здесь мы настраиваем провайдер переводов
    <div className={`flex flex-col min-h-screen ${inter.className}`}>
      <NextIntlClientProvider locale={lang} messages={messages}>
        <Header lang={lang} /> {/* Передаем язык в Header */}
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer lang={lang} /> {/* Передаем язык в Footer */}
      </NextIntlClientProvider>
    </div>
  );
}


// --- Файл: components/Header.js ---
// Компонент шапки сайта
'use client'; // Делаем клиентским для использования хуков и Link

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

// Простая иконка глобуса
const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline-block">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
);


export default function Header({ lang }) {
  const t = useTranslations('common'); // Загрузка общих переводов
  const currentLocale = useLocale(); // Текущий язык из URL
  const pathname = usePathname(); // Текущий путь без языка

  // Убираем языковой префикс из pathname для переключения
  const currentPathWithoutLocale = pathname.startsWith(`/${currentLocale}`)
    ? pathname.substring(`/${currentLocale}`.length) || '/'
    : pathname;


  const locales = ['ru', 'en', 'kg']; // Список доступных языков

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Логотип/Название сайта */}
        <Link href={`/${lang}`} className="text-2xl font-bold text-green-700 hover:text-green-800 transition-colors">
          {t('discover_kyrgyzstan')}
        </Link>

        {/* Основные ссылки навигации */}
        <div className="hidden md:flex space-x-6 items-center">
           <Link href={`/${lang}/places`} className="text-gray-600 hover:text-green-700 transition-colors">
             {t('all_places')}
           </Link>
           {/* Добавьте другие ссылки (О нас, Контакты) сюда */}
           {/* <Link href={`/${lang}/about`} className="text-gray-600 hover:text-green-700 transition-colors">О нас</Link> */}
        </div>


        {/* Переключатель языка */}
        <div className="relative">
           <details className="group">
              <summary className="flex items-center cursor-pointer p-2 rounded-md hover:bg-gray-100 transition-colors">
                 <GlobeIcon />
                 <span className="ml-1 uppercase font-medium text-gray-700">{currentLocale}</span>
              </summary>
              <div className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg py-1 z-10 hidden group-open:block">
                 {locales.map((loc) => (
                    <Link
                       key={loc}
                       href={currentPathWithoutLocale} // Ссылка на тот же путь, но middleware подставит нужный язык
                       locale={loc} // Указываем язык для Link
                       className={`block px-4 py-2 text-sm ${
                          currentLocale === loc
                             ? 'font-semibold text-green-700 bg-green-50'
                             : 'text-gray-700 hover:bg-gray-100'
                       } transition-colors`}
                    >
                       {loc.toUpperCase()}
                    </Link>
                 ))}
              </div>
           </details>
        </div>

        {/* Кнопка бургер-меню для мобильных (логику нужно добавить) */}
        <div className="md:hidden">
          <button className="text-gray-600 hover:text-green-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </nav>
    </header>
  );
}


// --- Файл: components/Footer.js ---
// Компонент подвала сайта
import { useTranslations } from 'next-intl';

export default function Footer({ lang }) {
  const t = useTranslations('common');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-gray-600 text-sm">
        {/* Используем t для перевода строки с подстановкой года */}
        {t('footer_text', { year: currentYear })}
        {/* Сюда можно добавить ссылки на соцсети, политику конфиденциальности и т.д. */}
      </div>
    </footer>
  );
}


// --- Файл: components/PlaceCard.js ---
// Компонент карточки места для списка
import Image from 'next/image'; // Используем Next.js Image для оптимизации
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

export default function PlaceCard({ place }) {
  const t = useTranslations('PlaceCard');
  const lang = useLocale(); // Получаем текущий язык

  // Fallback для изображения
  const imageUrl = place.mainImageUrl || 'https://placehold.co/600x400/e2e8f0/94a3b8?text=No+Image';

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <Link href={`/${lang}/places/${place.slug}`} className="block">
        <div className="relative w-full h-48"> {/* Задаем фиксированную высоту для изображения */}
          <Image
            src={imageUrl}
            alt={`[Image of ${place.name}]`} // Текст на русском для доступности
            fill // Заполняет контейнер
            style={{ objectFit: 'cover' }} // Масштабирует изображение, сохраняя пропорции и обрезая лишнее
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Помогает Next.js выбрать правильный размер
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/cccccc/ffffff?text=Error"; }} // Дополнительный fallback
          />
        </div>
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          <Link href={`/${lang}/places/${place.slug}`} className="hover:text-green-700 transition-colors">
            {place.name}
          </Link>
        </h3>
        <p className="text-sm text-gray-600 mb-4 flex-grow">{place.shortDescription}</p>
        <div className="mt-auto"> {/* Прижимаем кнопку к низу */}
          <Link
             href={`/${lang}/places/${place.slug}`}
             className="inline-block text-sm text-green-600 hover:text-green-800 font-medium transition-colors"
          >
            {t('read_more')} &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}


// --- Файл: app/[lang]/page.js ---
// Главная страница (/)
import { useTranslations } from 'next-intl';
import Link from 'next/link'; // Используем Link для навигации

export default function HomePage() {
  const t = useTranslations('HomePage'); // Загружаем переводы для HomePage
  const common_t = useTranslations('common'); // Загружаем общие переводы

  return (
    <div className="text-center flex flex-col items-center justify-center min-h-[60vh]">
       {/* Можно добавить фоновое изображение или слайдер сюда */}
       <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
             {t('welcome_title')}
          </h1>
          <p className="text-lg text-gray-600 mb-8">
             {t('welcome_text')}
          </p>
          <Link
             href="/places" // Ссылка без языка, middleware добавит текущий язык
             className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg shadow transition duration-300 text-lg"
          >
             {t('explore_button')}
          </Link>
       </div>
    </div>
  );
}


// --- Файл: app/[lang]/places/page.js ---
// Страница списка достопримечательностей (/places)
import { getTranslator } from 'next-intl/server';
import { getAllPlacesSummary } from '@/lib/places'; // Функция для получения списка мест
import PlaceCard from '@/components/PlaceCard'; // Компонент карточки

// Генерация метаданных для страницы списка
export async function generateMetadata({ params: { lang } }) {
  const t = await getTranslator(lang, 'PlacesPage');
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function PlacesListPage({ params: { lang } }) {
  const t = await getTranslator(lang, 'PlacesPage');
  // Получаем список мест для текущего языка
  const places = await getAllPlacesSummary(lang);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{t('title')}</h1>
      <p className="text-gray-600 mb-8">{t('description')}</p>

      {/* Сетка для карточек мест */}
      {places.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {places.map((place) => (
            <PlaceCard key={place.slug} place={place} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Места пока не добавлены.</p>
      )}
    </div>
  );
}


// --- Файл: app/[lang]/places/[slug]/page.js ---
// Страница детального описания места (/places/[slug])
// Используем код из предыдущего артефакта discover_kyrgyzstan_nextjs_place_page
// (Импорты и функции generateMetadata, generateStaticParams остаются такими же)
import { notFound } from 'next/navigation';
import { getTranslator } from 'next-intl/server';
import { getPlaceData, getAllPlaceParams } from '@/lib/places';
// Импортируем компонент отображения ДЕТАЛЕЙ места
import PlaceDetailComponent from '@/components/PlaceDetailComponent'; // УБЕДИТЕСЬ, ЧТО ЭТОТ КОМПОНЕНТ СУЩЕСТВУЕТ И РАБОТАЕТ

// --- Генерация метаданных (SEO) ---
export async function generateMetadata({ params: { lang, slug } }) {
  const place = await getPlaceData(slug);
  if (!place) {
     const t = await getTranslator(lang, 'NotFound');
     return { title: t('title') };
  }
  const t = await getTranslator(lang, 'PlaceDetails');
  const title = place.name[lang] || place.name.en;
  const description = place.shortDescription[lang] || place.shortDescription.en;
  return {
    title: `${title} | ${t('discover_kyrgyzstan_title')}`,
    description: description,
    openGraph: {
        title: `${title} | ${t('discover_kyrgyzstan_title')}`,
        description: description,
        images: [{ url: place.mainImageUrl || '/placeholder-image.jpg', width: 1200, height: 630, alt: title }],
        locale: lang,
        type: 'article',
    },
  };
}

// --- Компонент страницы ---
export default async function PlacePage({ params: { lang, slug } }) {
  const placeData = await getPlaceData(slug);
  if (!placeData) {
    notFound();
  }
  const t = await getTranslator(lang, 'PlaceDetails');

  // Рендерим компонент PlaceDetailComponent
  return (
    <PlaceDetailComponent
        place={placeData}
        lang={lang}
        translations={{
            backToList: t('back_to_list'),
            location: t('location'),
            howToGetThere: t('how_to_get_there'),
            bestTimeToVisit: t('best_time_to_visit'),
            interestingFacts: t('interesting_facts'),
            gallery: t('gallery'),
            map: t('map')
            // ... другие необходимые строки из PlaceDetails
        }}
    />
  );
}

// --- Генерация статических путей (SSG) ---
export async function generateStaticParams() {
    const places = await getAllPlaceParams();
    // Генерируем параметры только со slug, язык добавится автоматически
    return places.map((place) => ({
        slug: place.slug,
    }));
}

// Опционально: Настройка ревалидации (ISR)
// export const revalidate = 3600; // Раз в час


// --- Файл: components/PlaceDetailComponent.js ---
// Компонент для отображения ДЕТАЛЕЙ места
// (Этот компонент нужно создать или доработать на основе примера из предыдущих ответов)
// Убедитесь, что он принимает props: place, lang, translations
import Image from 'next/image';
import Link from 'next/link';
// Возможно, понадобится 'use client' для галереи
// import { useState } from 'react';

export default function PlaceDetailComponent({ place, lang, translations }) {
  // Получаем данные на нужном языке или используем fallback
  const name = place.name[lang] || place.name.en;
  const description = place.description[lang] || place.description.en;
  const locationInfo = place.locationInfo[lang] || place.locationInfo.en;
  const howToGetThereInfo = place.howToGetThere[lang] || place.howToGetThere.en;
  const bestTimeInfo = place.bestTimeToVisit[lang] || place.bestTimeToVisit.en;
  const facts = place.facts[lang] || place.facts.en || [];
  const galleryImages = place.galleryImageUrls || [];
  const mapEmbedUrl = place.mapEmbedUrl;

  const mainImageUrl = place.mainImageUrl || 'https://placehold.co/1200x600/e2e8f0/94a3b8?text=No+Image';

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Основное изображение */}
      <div className="relative w-full h-64 md:h-96 mb-6 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={mainImageUrl}
            alt={`[Image of ${name}]`}
            fill
            style={{ objectFit: 'cover' }}
            priority // Загружаем основное изображение в первую очередь
            sizes="100vw"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/1200x600/cccccc/ffffff?text=Error"; }}
          />
      </div>

      {/* Заголовок */}
      <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">{name}</h1>

      {/* Описание */}
      <div className="prose prose-lg max-w-none text-gray-700 mb-8" dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br />') }} />
       {/* Используем dangerouslySetInnerHTML если описание содержит HTML или переносы строк. Будьте осторожны с XSS! */}
       {/* <p className="text-lg text-gray-600 mb-6">{description}</p> */}


      {/* Галерея */}
      {galleryImages.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">{translations.gallery}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((url, index) => (
              <div key={index} className="relative aspect-square rounded-md overflow-hidden shadow hover:shadow-lg transition-shadow duration-300">
                 <Image
                    src={url || 'https://placehold.co/400x400/e2e8f0/94a3b8?text=No+Image'}
                    alt={`[Image of ${name}] ${index + 1}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    loading="lazy" // Ленивая загрузка для галереи
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x400/cccccc/ffffff?text=Error"; }}
                 />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Секция с информацией и картой */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2 space-y-6">
          {locationInfo && (
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{translations.location}</h3>
              <p className="text-gray-600">{locationInfo}</p>
            </div>
          )}
          {howToGetThereInfo && (
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{translations.howToGetThere}</h3>
              <p className="text-gray-600">{howToGetThereInfo}</p>
            </div>
          )}
          {bestTimeInfo && (
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{translations.bestTimeToVisit}</h3>
              <p className="text-gray-600">{bestTimeInfo}</p>
            </div>
          )}
          {facts.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{translations.interestingFacts}</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {facts.map((fact, index) => (
                  <li key={index}>{fact}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Карта */}
        {mapEmbedUrl && (
           <div className="lg:col-span-1">
             <h3 className="text-xl font-semibold text-gray-700 mb-2">{translations.map}</h3>
             <div className="aspect-video rounded-lg overflow-hidden shadow"> {/* Используем aspect-video для соотношения 16:9 */}
                <iframe
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Карта ${name}`}
                    className="absolute inset-0 w-full h-full"
                ></iframe>
             </div>
           </div>
        )}
      </div>

      {/* Кнопка "Назад" */}
      <div className="mt-10 text-center">
         <Link href={`/${lang}/places`} className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-6 rounded-lg shadow transition duration-300">
            &larr; {translations.backToList}
         </Link>
      </div>
    </div>
  );
}


