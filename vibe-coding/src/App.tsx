import './App.css'

function App() {
  const quotes = [
    {
      q: "Vibe‑coding рушит барьеры для создания приложений. Теперь любой человек может завибкодить приложение за считанные секунды.",
      a: "Mustafa Suleyman",
      r: "CEO Microsoft AI"
    },
    {
      q: "Это сдвиг, который может поставить под вопрос саму защищённость традиционного софта и классической разработки.",
      a: "Mustafa Suleyman",
      r: "CEO Microsoft AI"
    },
    {
      q: "Руководители, игнорирующие меняющийся ландшафт разработки софта, рискуют сделать себя и свои компании устаревшими. Vibe‑coding уже происходит сегодня.",
      a: "Craig Beebe",
      r: "Tech Visionary & Executive"
    },
    {
      q: "Те руководители, кто экспериментирует с vibe‑coding уже сегодня, завтра будут задавать темп в своих индустриях.",
      a: "Craig Beebe",
      r: "Tech Visionary & Executive"
    },
    {
      q: "Vibe‑coding делает программирование куда более увлекательным: люди могут экспериментировать с приложениями и сайтами без какого‑либо опыта в коде.",
      a: "Sundar Pichai",
      r: "CEO Google"
    },
    {
      q: "Раньше вы просто описывали идею. Теперь вы можете немного завибкодить её и сразу показать людям.",
      a: "Sundar Pichai",
      r: "CEO Google"
    },
    {
      q: "Это и поразительно, и самое слабое состояние технологии, которое мы когда‑либо увидим. Я не могу дождаться, чтобы увидеть, что мир построит на этом.",
      a: "Sundar Pichai",
      r: "CEO Google"
    },
    {
      q: "Переход к ИИ‑агентам — это не просто повышение эффективности. Это переосмысляет то, как устроены SaaS‑продукты и как вообще делается работа в цифровом бизнесе.",
      a: "Satya Nadella",
      r: "CEO Microsoft"
    },
    {
      q: "Некоторые компании радикально полностью убирают людей из ключевых частей бизнес‑модели и перестраивают её вокруг ИИ‑агентов.",
      a: "Magnus Grimeland",
      r: "Investor & Entrepreneur"
    }
  ];

  // Double quotes for seamless marquee
  const marqueeQuotes = [...quotes, ...quotes];

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
          <h1>
            Превращайте идеи в <span className="gradient-text">продукты</span> силой своего вайба
          </h1>
          <p>
            Vibe-coding — это революция, где знание синтаксиса больше не барьер.
            Мы научим вас управлять ИИ-агентами, чтобы создавать софт со скоростью мысли.
          </p>
          <div className="cta-group">
            <button className="btn-primary">Начать обучение</button>
            <button className="btn-secondary">Посмотреть демо</button>
          </div>
        </section>

        {/* MARQUEE SECTION */}
        <section className="marquee-container">
          <div className="marquee-track">
            {marqueeQuotes.map((quote, idx) => (
              <div key={idx} className="quote-card">
                <p>«{quote.q}»</p>
                <div className="quote-author">
                  <span className="name">{quote.a}</span>
                  <span className="role">{quote.r}</span>
                </div>
              </div>
            ))}
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
              <button className="btn-secondary">Узнать больше о поддержке</button>
            </div>
            <div className="step-list">
              <div className="step-item">
                <span className="step-num">01</span>
                <div className="step-info">
                  <h3>Инфраструктура под ключ</h3>
                  <p>Настройка VPN, регистрация во всех ИИ-сервисах и выпуск зарубежных карт для оплаты.</p>
                </div>
              </div>
              <div className="step-item">
                <span className="step-num">02</span>
                <div className="step-info">
                  <h3>Личный куратор-агент</h3>
                  <p>Помогаем внедрить ИИ-агентов в ваш реальный бизнес-кейс с первого дня.</p>
                </div>
              </div>
              <div className="step-item">
                <span className="step-num">03</span>
                <div className="step-info">
                  <h3>Сообщество лидеров</h3>
                  <p>Доступ в закрытый клуб руководителей, которые уже меняют свои индустрии.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROGRAM SECTION */}
        <section id="program" className="program">
          <div className="section-title">
            <h2>Программа <span className="gradient-text">революции</span></h2>
          </div>
          <div className="program-grid">
            <div className="program-card">
              <span className="module-num">Модуль 1</span>
              <h3>Мышление ИИ-архитектора</h3>
              <p>Как декомпозировать мечту в технический вайб, понятный агентам.</p>
            </div>
            <div className="program-card">
              <span className="module-num">Модуль 2</span>
              <h3>Оркестрация агентов</h3>
              <p>Настройка и управление автономными командами ИИ-разработчиков.</p>
            </div>
            <div className="program-card">
              <span className="module-num">Модуль 3</span>
              <h3>Продукт за выходные</h3>
              <p>От пустой папки до работающего SaaS-решения за 48 часов.</p>
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
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
      </main>

      <footer className="footer">
        <div className="logo">VibeCode Leaders</div>
        <div className="footer-links">
          <span>© 2026 Все права защищены</span>
        </div>
      </footer>
    </div>
  )
}

export default App
