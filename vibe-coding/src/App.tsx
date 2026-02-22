import './App.css'
import logo from './assets/vibe-code-leaders-logo.svg'

function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="header-left">
          <img src={logo} className="brand-logo" alt="Vibe Code Leaders logo" />
          <div className="brand-text">
            <span className="brand-name">Vibe Code Leaders</span>
            <span className="brand-tagline">
              Руководители, которые думают как разработчики
            </span>
          </div>
        </div>
        <nav className="nav">
          <a href="#for-whom">Для кого</a>
          <a href="#results">Результаты</a>
          <a href="#program">Программа</a>
          <a href="#pricing">Тарифы</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="header-actions">
          <button className="btn btn-ghost">Войти</button>
          <button className="btn btn-primary">Записаться</button>
        </div>
      </header>

      <main className="main">
        <section className="hero">
          <div className="hero-text">
            <h1>
              Курс по коду
              <br />
              для амбициозных руководителей
            </h1>
            <p className="hero-subtitle">
              Пойми, как думает разработчик, научись говорить с командой на одном
              языке и принимай решения быстрее благодаря структуре из мира
              программирования.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary btn-lg">Записаться на поток</button>
              <button className="btn btn-outline btn-lg">Посмотреть программу</button>
            </div>
            <div className="hero-meta">
              <span>8 недель, онлайн</span>
              <span>Формат: видео, практики, созвоны</span>
              <span>Для СЕО, продактов и тимлидов</span>
            </div>
          </div>
          <div className="hero-card">
            <h2>Что вы унесёте с курса</h2>
            <ul>
              <li>Понимание, как устроены современные продукты и код</li>
              <li>Общий язык с разработчиками и продактом</li>
              <li>Инструменты для декомпозиции и приоритизации</li>
              <li>Личный мини‑проект, собранный по итогам курса</li>
            </ul>
          </div>
        </section>

        <section id="for-whom" className="section">
          <div className="section-header">
            <h2>Для кого этот курс</h2>
            <p>
              Курс «Vibe Code Leaders» специально собран для руководителей, которые
              хотят лучше понимать разработки и собирать сильные продуктовые
              команды.
            </p>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <h3>Руководители бизнеса</h3>
              <p>Предприниматели и C‑level, которые работают с IT‑командами.</p>
              <ul>
                <li>Хотите осознанно заказывать разработку</li>
                <li>Устали от «мы так не делаем в проде»</li>
              </ul>
            </div>
            <div className="card">
              <h3>Продуктовые менеджеры</h3>
              <p>Руководители продуктов и проектов в digital‑командах.</p>
              <ul>
                <li>Хотите лучше понимать ограничения и риски</li>
                <li>Строить реалистичные роадмапы</li>
              </ul>
            </div>
            <div className="card">
              <h3>Тимлиды и руководители команд</h3>
              <p>Лидеры кросс‑функциональных команд, которые растут в роли.</p>
              <ul>
                <li>Нужно сильнее «продуктовое» мышление</li>
                <li>Важно выстраивать понятную архитектуру решения</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="results" className="section section-muted">
          <div className="section-header">
            <h2>Что вы получите после курса</h2>
          </div>
          <div className="grid grid-3">
            <div className="card card-soft">
              <h3>Новый способ думать про задачи</h3>
              <p>
                Научитесь декомпозировать запросы бизнеса в четкие требования,
                похожие на технические задачи.
              </p>
            </div>
            <div className="card card-soft">
              <h3>Язык общения с разработчиками</h3>
              <p>
                Поймете базовые конструкции кода, архитектуры и сможете задавать
                правильные вопросы команде.
              </p>
            </div>
            <div className="card card-soft">
              <h3>Личный «кодовый» майндсет</h3>
              <p>
                Перейдёте от Micromanagement к системному управлению через процессы
                и структуры.
              </p>
            </div>
          </div>
        </section>

        <section id="program" className="section">
          <div className="section-header">
            <h2>Программа курса</h2>
            <p>8 модулей, которые постепенно проводят вас от основ к практике.</p>
          </div>
          <div className="program-list">
            <details open>
              <summary>
                Модуль 1. Как думают разработчики
                <span>1 неделя</span>
              </summary>
              <p>
                Разбираем базовые понятия из программирования и то, как инженеры
                принимают решения. Учимся переводить бизнес‑задачи в структуры.
              </p>
            </details>
            <details>
              <summary>
                Модуль 2. Архитектура продукта простыми словами
                <span>1 неделя</span>
              </summary>
              <p>
                Картина мира: фронтенд, бэкенд, базы данных, интеграции. Как это
                связано с рисками, сроками и бюджетом.
              </p>
            </details>
            <details>
              <summary>
                Модуль 3. Как ставить задачи, чтобы их реально сделали
                <span>1 неделя</span>
              </summary>
              <p>
                Структура хорошего запроса: контекст, ограничения, критерии
                готовности, риски. Живые примеры постановки задач.
              </p>
            </details>
            <details>
              <summary>
                Модуль 4. Декомпозиция и приоритизация
                <span>1 неделя</span>
              </summary>
              <p>
                Разбиваем большие идеи на реализуемые куски, считаем стоимость
                изменений и выбираем, что делать в первую очередь.
              </p>
            </details>
            <details>
              <summary>
                Модуль 5–8. Практика и личный проект
                <span>4 недели</span>
              </summary>
              <p>
                Работа над своим кейсом: от формулировки цели до структуры
                решения. Наставничество, разборы и обратная связь.
              </p>
            </details>
          </div>
        </section>

        <section id="pricing" className="section section-muted">
          <div className="section-header">
            <h2>Тарифы и формат участия</h2>
            <p>Выберите формат, который лучше всего подходит под ваши задачи.</p>
          </div>
          <div className="grid grid-3">
            <div className="card card-pricing">
              <h3>Базовый</h3>
              <p className="price">50 000 ₽</p>
              <ul>
                <li>Доступ ко всем материалам курса</li>
                <li>Домашние задания и шаблоны</li>
                <li>Доступ к записи на 6 месяцев</li>
              </ul>
              <button className="btn btn-outline full-width">Выбрать тариф</button>
            </div>
            <div className="card card-pricing card-pricing-featured">
              <h3>Расширенный</h3>
              <p className="price">75 000 ₽</p>
              <ul>
                <li>Все из базового тарифа</li>
                <li>Групповые созвоны с разбором кейсов</li>
                <li>Чат с куратором на время курса</li>
              </ul>
              <button className="btn btn-primary full-width">Записаться</button>
            </div>
            <div className="card card-pricing">
              <h3>Премиум</h3>
              <p className="price">120 000 ₽</p>
              <ul>
                <li>Все из расширенного тарифа</li>
                <li>Индивидуальные сессии с автором курса</li>
                <li>Разбор вашей команды и процессов</li>
              </ul>
              <button className="btn btn-outline full-width">Забронировать слот</button>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <h2>Отзывы участников</h2>
            <p>Несколько живых впечатлений от руководителей, которые уже прошли курс.</p>
          </div>
          <div className="grid grid-3">
            <div className="card card-soft">
              <p className="quote">
                «После курса диалоги с разработкой стали в два раза короче. Мы наконец‑то
                говорим об одном и том же языком ограничений и решений.»
              </p>
              <p className="quote-author">— Анна, CEO продуктовой компании</p>
            </div>
            <div className="card card-soft">
              <p className="quote">
                «Стал лучше понимать, когда команда тянет время, а когда действительно
                есть сложность в архитектуре. Это сильно влияет на решения.»
              </p>
              <p className="quote-author">— Сергей, руководитель направления</p>
            </div>
            <div className="card card-soft">
              <p className="quote">
                «Я впервые почувствовал, что код — это не магия, а просто другой способ
                описывать логику бизнеса. Очень освобождающее ощущение.»
              </p>
              <p className="quote-author">— Мария, продакт‑менеджер</p>
            </div>
          </div>
        </section>

        <section id="faq" className="section section-muted">
          <div className="section-header">
            <h2>Частые вопросы</h2>
          </div>
          <div className="faq-list">
            <details>
              <summary>Нужно ли уметь программировать, чтобы идти на курс?</summary>
              <p>
                Нет. Курс рассчитан на людей без технического бэкграунда. Мы даём
                столько кода, сколько нужно для понимания логики и решений.
              </p>
            </details>
            <details>
              <summary>Сколько времени в неделю потребуется?</summary>
              <p>
                В среднем 3–5 часов в неделю: теория, практика и разборы. Вы можете
                подстраивать темп под свой график.
              </p>
            </details>
            <details>
              <summary>Будет ли личная работа с моим кейсом?</summary>
              <p>
                Да, в расширенном и премиум тарифах мы работаем с вашими реальными
                задачами и разбираем их на практике.
              </p>
            </details>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-left">
          <span className="brand-name">Vibe Code Leaders</span>
          <span className="footer-copy">© {new Date().getFullYear()} Все права защищены</span>
        </div>
        <div className="footer-links">
          <a href="#privacy">Политика конфиденциальности</a>
          <a href="#offer">Публичная оферта</a>
        </div>
      </footer>
    </div>
  )
}

export default App
