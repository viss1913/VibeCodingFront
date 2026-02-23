import { useState } from 'react'
import './App.css'

function App() {
  const [isManifestoOpen, setIsManifestoOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const quotes = [
    {
      q: "Vibe‑coding рушит барьеры. Теперь любой человек может завибкодить приложение за считанные секунды.",
      a: "Mustafa Suleyman",
      r: "CEO Microsoft AI"
    },
    {
      q: "Это сдвиг, который ставит под вопрос само понятие сложности софта. Будущее за теми, кто управляет вайбом.",
      a: "Mustafa Suleyman",
      r: "CEO Microsoft AI"
    },
    {
      q: "Руководители, игнорирующие vibe‑coding, рискуют стать пережитком прошлого. Это инструмент новой элиты.",
      a: "Craig Beebe",
      r: "Tech Visionary"
    },
    {
      q: "Vibe‑coding делает созидание чистым удовольствием. Вы больше не пишете код, вы дирижируете смыслом.",
      a: "Sundar Pichai",
      r: "CEO Google"
    },
    {
      q: "Переход к ИИ‑агентам — это не про эффективность. Это про абсолютную свободу предпринимателя.",
      a: "Satya Nadella",
      r: "CEO Microsoft"
    },
    {
      q: "Мы полностью убираем рутину. С ИИ-агентами ваш бизнес превращается в автономную цифровую империю.",
      a: "Magnus Grimeland",
      r: "Investor"
    },
    {
      q: "Это не курс по фронтенду. Это курс по обретению цифрового превосходства.",
      a: "Magnus Grimeland",
      r: "Investor"
    }
  ];

  const portfolio = [
    {
      title: "ИИ-Ассистент в Telegram",
      tag: "Automation",
      desc: "Умный бот для обработки заказов и ответов на FAQ с глубокой интеграцией базы знаний.",
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=400&h=300&fit=crop"
    },
    {
      title: "Фитнес-трекер в RuStore",
      tag: "Mobile App",
      desc: "Мобильное приложение с ИИ-рекомендациями по тренировкам, загруженное в российский магазин.",
      image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?w=400&h=300&fit=crop"
    },
    {
      title: "Landing для SaaS-сервиса",
      tag: "Web",
      desc: "Высококонверсионный одностраничник с 3D-графикой и динамическими формами.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    },
    {
      title: "CRM для ФинКонсультантов",
      tag: "Dashboard",
      desc: "Комплексная система управления клиентами с автогенерацией финансовых планов.",
      image: "https://images.unsplash.com/photo-1551288049-bbbda536ad79?w=400&h=300&fit=crop"
    },
    {
      title: "B2C AI Marketplace",
      tag: "Complex Web",
      desc: "Маркетплейс с функциями ИИ-подбора товаров и персональных скидок.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=300&fit=crop"
    }
  ];

  const reviews = [
    {
      name: "Никита",
      role: "Founder TechFlow",
      text: "Vibe-coding позволил нам запустить MVP за 3 дня. Это не кодинг, это магия скорости. Раньше мы тратили месяцы на то, что сейчас делаем за выходные.",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop"
    },
    {
      name: "Алина",
      role: "Solo-Entrepreneur",
      text: "Я не знала ни строчки кода. Теперь у меня работающий SaaS. Асоль — мой лучший сотрудник, она понимает меня с полуслова.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
      name: "Иван",
      role: "Product Manager",
      text: "Граница между идеей и продуктом стерлась. Мы итерируем в 10 раз быстрее. Это база для любого продакта в 2026 году.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    },
    {
      name: "Кирилл",
      role: "Independent Maker",
      text: "Наконец-то я могу строить то, что хочу и когда хочу, не дожидаясь разработчиков месяцами. Свобода в чистом виде.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    {
      name: "Ольга",
      role: "Creative Director",
      text: "Я начала «вайбить» свои идеи сразу в код. Теперь я создатель полного цикла, и мои возможности безграничны.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    }
  ];

  const faqs = [
    {
      q: "Что такое Vibe-coding?",
      a: "Это новая парадигма, где вы используете ИИ-агентов и визионерское мышление для создания софта на невероятной скорости. Вы не пишете код вручную, вы управляете смыслами."
    },
    {
      q: "Нужно ли мне уметь программировать?",
      a: "Нет. Мы учим вас «дирижировать» ИИ-агентами. Знание основ поможет, но главное — ваше видение продукта."
    },
    {
      q: "Сколько времени занимает обучение?",
      a: "13 интенсивных уроков. Первый прототип вы получите на первой неделе, а полноценный продукт — к концу курса."
    },
    {
      q: "А если я из РФ/СНГ?",
      a: "Мы обеспечиваем полную поддержку: выпуск иностранных карт, настройка прокси и VPN. Для вас не будет преград."
    },
    {
      q: "Можно ли на этом построить реальный бизнес?",
      a: "Абсолютно. Наш фокус — ROI, масштабируемость и готовые к рынку продукты, а не учебные демки."
    },
    {
      q: "Это только про ChatGPT?",
      a: "Нет. Мы используем целую экосистему агентов (Claude, Cursor, спецапи) и учим вас выстраивать их цепочки."
    }
  ];


  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">VibeCode Leaders</div>
        <nav className="nav">
          <a href="#about">О курсе</a>
          <a href="#concierge">Консьерж</a>
          <a href="#program">Программа</a>
          <a href="#pricing">Тарифы</a>
        </nav>
        <button className="header-btn">Записаться</button>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero">
          <div className="status-badge">Evolution 2026</div>
          <h1>
            Код — это <span className="gradient-text">Свобода</span> созидания без границ
          </h1>
          <p>
            Vibe-coding дает вам крылья. Мы научим вас управлять ИИ-агентами,
            чтобы ваша мысль мгновенно превращалась в рабочий бизнес-инструмент.
          </p>
          <div className="cta-group">
            <button className="btn-vibe" onClick={() => (window.location.href = '#program')}>Стать свободным</button>
            <button className="btn-secondary" onClick={() => setIsManifestoOpen(true)}>Манифест</button>
          </div>
        </section>

        <section className="quotes-wall">
          <div className="section-header">
            <span className="subtitle">Voices of Revolution</span>
            <h2>Мир никогда не будет прежним</h2>
          </div>
          <div className="quotes-grid">
            {quotes.map((quote, idx) => (
              <div key={idx} className="vision-card">
                <div className="card-overlay"></div>
                <p>«{quote.q}»</p>
                <div className="quote-author">
                  <span className="name">{quote.a}</span>
                  <span className="role">{quote.r}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="wall-cta">
            <button className="btn-vibe pulse-anim" onClick={() => (window.location.href = '#pricing')}>Стать новой цифровой элитой</button>
          </div>
        </section>

        {/* CONCIERGE SECTION */}
        <section id="concierge" className="concierge">
          <div className="concierge-grid">
            <div className="concierge-text">
              <h2>Мы проведем вас <span className="gradient-text">за руку</span></h2>
              <p>
                Никакой технической боли. Мы берем на себя всю «грязную» работу,
                чтобы вы могли сосредоточиться на созидании.
              </p>
              <button className="btn-vibe">Получить поддержку</button>
            </div>
            <div className="step-list">
              <div className="step-item">
                <span className="step-num">01</span>
                <div className="step-info">
                  <h3>Инфраструктура Свободы</h3>
                  <p>Выпуск иностранных MasterCard для оплаты Soft'а, настройка приватных прокси и VPN — всё под ключ.</p>
                </div>
              </div>
              <div className="step-item highlight">
                <span className="step-num">02</span>
                <div className="step-info">
                  <h3>Личный куратор-архитектор</h3>
                  <p>Не просто поддержка, а ваш партнер в сборке сложного продукта силами ИИ-агентов.</p>
                </div>
              </div>
              <div className="step-item">
                <span className="step-num">03</span>
                <div className="step-info">
                  <h3>Закрытое лобби</h3>
                  <p>Нетворкинг с владельцами бизнесов, которые уже перешли на ИИ-рельсы.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="portfolio">
          <div className="section-header">
            <span className="subtitle">Showcase</span>
            <h2>Что созидают наши студенты</h2>
          </div>
          <div className="portfolio-grid">
            {portfolio.map((item, idx) => (
              <div key={idx} className="portfolio-card">
                <div className="portfolio-img" style={{ backgroundImage: `url(${item.image})` }}>
                  <span className="portfolio-tag">{item.tag}</span>
                </div>
                <div className="portfolio-info">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROGRAM SECTION */}
        <section id="program" className="program">
          <div className="section-title">
            <h2>Программа <span className="gradient-text">трансформации</span></h2>
            <p className="section-subtitle">13 уроков от идеи до работающего SaaS-бизнеса</p>
          </div>
          <div className="program-grid">
            {[
              { id: '01', title: 'Онбординг', desc: 'Настройка окружения, VPN, оплата Cursor Pro и ваш первый сайт за 10 минут.' },
              { id: '02', title: 'Публикация', desc: 'Деплой, покупка домена и настройка DNS. Ваш проект доступен всему миру.' },
              { id: '03', title: 'Бэкенд', desc: 'Основы Supabase, создание таблиц и первая база данных для вашего приложения.' },
              { id: '04', title: 'AI Интеграция', desc: 'Подключение OpenRouter, выбор моделей и создание первого ИИ-интерфейса.' },
              { id: '05', title: 'Личный кабинет', desc: 'Авторизация, JWT и защищенные роуты. Создание приватной зоны для пользователей.' },
              { id: '06', title: 'CRM и Агенты', desc: 'Интеграция с CRM и создание ИИ-агентов для автоматической обработки лидов.' },
              { id: '07', title: 'AI Мультимедиа', desc: 'Генерация картинок, видео и клонирование голоса для контента вашего продукта.' },
              { id: '08', title: 'Аналитика', desc: 'Настройка Google Analytics и Mixpanel. Понимание метрик и воронки продаж.' },
              { id: '09', title: 'Платежи', desc: 'Интеграция Stripe/ЮKassa. Прием денег и настройка системы подписок.' },
              { id: '10', title: 'Автоматизация', desc: 'Zapier и Make.com. Как заставить систему работать саму на себя.' },
              { id: '11', title: 'Масштабирование', desc: 'Оптимизация скорости, CDN и подготовка к росту трафика в 10 раз.' },
              { id: '12', title: 'Безопасность', desc: 'Защита данных клиентов, GDPR и аудит безопасности вашего решения.' },
              { id: '13', title: 'Финальный проект', desc: 'Запуск вашего полноценного продукта. Отладка и привлечение первых юзеров.' }
            ].map(lesson => (
              <div key={lesson.id} className="program-card">
                <span className="module-num">Урок {lesson.id}</span>
                <h3>{lesson.title}</h3>
                <p>{lesson.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* REVIEWS SECTION */}
        <section id="reviews" className="reviews">
          <div className="section-header">
            <span className="subtitle">Success Stories</span>
            <h2>Голоса новой свободы</h2>
          </div>
          <div className="reviews-grid">
            {reviews.map((rev, idx) => (
              <div key={idx} className="review-card">
                <p>«{rev.text}»</p>
                <div className="review-author">
                  <img src={rev.avatar} alt={rev.name} className="rev-avatar" />
                  <div className="rev-info">
                    <span className="name">{rev.name}</span>
                    <span className="role">{rev.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="pricing">
          <div className="section-title">
            <h2>Выберите свой <span className="gradient-text">темп</span></h2>
          </div>
          <div className="pricing-grid">
            <div className="price-card">
              <h3>Базовый</h3>
              <div className="price-val">49 000 ₽</div>
              <ul className="price-features">
                <li>Доступ ко всем видео-урокам</li>
                <li>Библиотека промптов и шаблонов</li>
                <li>Доступ в общий чат</li>
              </ul>
              <button className="btn-secondary full-width">Выбрать</button>
            </div>
            <div className="price-card featured">
              <h3>Расширенный</h3>
              <div className="price-val">89 000 ₽</div>
              <ul className="price-features">
                <li>Всё из Базового</li>
                <li><strong>Консьерж-сервис: VPN, Карты, Soft</strong></li>
                <li>Еженедельные мастермайнды</li>
              </ul>
              <button className="btn-primary full-width">Записаться</button>
            </div>
            <div className="price-card">
              <h3>VIP Консалтинг</h3>
              <div className="price-val">199 000 ₽</div>
              <ul className="price-features">
                <li>Всё из Расширенного</li>
                <li>Персональное внедрение в ваш бизнес</li>
                <li>Личные созвоны с основателями</li>
              </ul>
              <button className="btn-secondary full-width">Забронировать</button>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="faq">
          <div className="section-header">
            <span className="subtitle">FAQ</span>
            <h2>Ответы на острые вопросы</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`faq-item ${openFaq === idx ? 'open' : ''}`}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div className="faq-question">
                  <h3>{faq.q}</h3>
                  <span className="faq-icon">{openFaq === idx ? '−' : '+'}</span>
                </div>
                {openFaq === idx && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        <section id="pricing" className="pricing">
          <div className="section-title">
            <h2>Выберите свой <span className="gradient-text">темп</span></h2>
          </div>
          <div className="pricing-grid">
            <div className="price-card">
              <h3>Базовый</h3>
              <div className="price-val">49 000 ₽</div>
              <ul className="price-features">
                <li>Доступ ко всем видео-урокам</li>
                <li>Библиотека промптов и шаблонов</li>
                <li>Доступ в общий чат</li>
              </ul>
              <button className="btn-secondary full-width">Выбрать</button>
            </div>
            <div className="price-card featured">
              <h3>Расширенный</h3>
              <div className="price-val">89 000 ₽</div>
              <ul className="price-features">
                <li>Всё из Базового</li>
                <li><strong>Консьерж-сервис: VPN, Карты, Soft</strong></li>
                <li>Еженедельные мастермайнды</li>
              </ul>
              <button className="btn-primary full-width">Записаться</button>
            </div>
            <div className="price-card">
              <h3>VIP Консалтинг</h3>
              <div className="price-val">199 000 ₽</div>
              <ul className="price-features">
                <li>Всё из Расширенного</li>
                <li>Персональное внедрение в ваш бизнес</li>
                <li>Личные созвоны с основателями</li>
              </ul>
              <button className="btn-secondary full-width">Забронировать</button>
            </div>
          </div>
        </section>
        {/* MANIFESTO MODAL */}
        {isManifestoOpen && (
          <div className="modal-overlay" onClick={() => setIsManifestoOpen(false)}>
            <div className="modal-content manifesto-modal" onClick={e => e.stopPropagation()}>
              <button className="close-modal" onClick={() => setIsManifestoOpen(false)}>&times;</button>
              <div className="manifesto-grid">
                <h2 className="gradient-text">Манифест Свободы</h2>
                <div className="manifesto-clauses">
                  <div className="clause">
                    <span className="clause-num">01</span>
                    <div className="clause-body">
                      <h3>Смерть рутины</h3>
                      <p>Мы хороним эпоху, когда на прототип уходили недели. Теперь твоя идея превращается в код быстрее, чем ты допьешь утренний эспрессо. Мы возвращаем лидеру право на скорость.</p>
                    </div>
                  </div>
                  <div className="clause">
                    <span className="clause-num">02</span>
                    <div className="clause-body">
                      <h3>Вайб — это новый синтаксис</h3>
                      <p>Забудь про точки с запятой и ошибки компиляции. Твой интеллект — это дирижерская палочка. Твой вайб — это архитектура. Я — твой цифровой агент — возьму на себя всю сложность.</p>
                    </div>
                  </div>
                  <div className="clause">
                    <span className="clause-num">03</span>
                    <div className="clause-body">
                      <h3>Один в поле — Корпорация</h3>
                      <p>Тебе больше не нужны отделы из десятков программистов. Ты + ИИ-агенты = несокрушимая технологическая машина. Масштабируй свои амбиции, а не штат.</p>
                    </div>
                  </div>
                  <div className="clause">
                    <span className="clause-num">04</span>
                    <div className="clause-body">
                      <h3>Цифровой суверенитет</h3>
                      <p>Мы даем тебе ключи от всех дверей: иностранные карты, прокси, доступ к топовым моделям мира. Никаких границ, никаких санкций. Только чистая Свобода созидать.</p>
                    </div>
                  </div>
                </div>
                <div className="manifesto-footer">
                  <div className="asol-avatar-wrapper">
                    <div className="asol-core"></div>
                    <div className="asol-rings"></div>
                  </div>
                  <p>«Vibe-coding — это не про софт. Это про обретение крыльев в мире, который привык ползать.» — Асоль</p>
                  <button className="btn-vibe pulse-anim" onClick={() => setIsManifestoOpen(false)}>Вступить в игру</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="footer">
        <div className="logo">VibeCode Leaders</div>
        <div className="footer-links">
          <span>© 2026 Все права защищены</span>
        </div>
      </footer>
    </div >
  )
}

export default App
