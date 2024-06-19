import Header from '../../components/header/Header';
import css from './../../img/skills/css3.svg';
import html from './../../img/skills/html5.svg';
import react from './../../img/skills/react.svg';
import javascript from './../../img/skills/js.svg';
import './Home.css'
const Home = () => {
    return(
        <>
            <Header/>
            <main className="section">
                <div className="container">

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Frontend</h2>
                            <p>JavaScript, TypeScript, ReactJS, Redux, HTML, CSS, NPM, BootStrap, MaterialUI</p>
                        </li>
                    </ul>
                </div>
                <div className="skills_item">
                    <div className="title">
                        What do I use at work?
                    </div>
                    <div className="skills__items">
                        <div className="skills__item">
                            <div className="skills__item-img">
                                <img src={html} alt="html" />
                            </div>
                            <h3 className="title">HTML5</h3>
                            <p>Именно он создает каркас вашего сайта или приложения, а пятая версия позволит мне создавать более SEO-оптимизированную структуру вашего продукта</p>
                        </div>
                        <div className="skills__item">
                            <div className="skills__item-img">
                                <img src={css} alt="css" />
                            </div>
                            <h3 className="title">CSS3</h3>
                            <p>Этот язык стилей позволяет мне создавать абсолютно любой внешний вид вашего сайта или приложения. Все ограничивается только вашей фантазией!</p>
                        </div>
                        <div className="skills__item">
                            <div className="skills__item-img">
                                <img src={javascript} alt="javascript" />
                            </div>
                            <h3 className="title">Java Script</h3>
                            <p>Этот язык программирования позволяет оживить все что угодно: слайдеры, окна, подсказки, вкладки, получение данных от сервера и многое другое</p>
                        </div>
                        <div className="skills__item">
                            <div className="skills__item-img">
                                <img src={react} alt="react" />
                            </div>
                            <h3 className="title">React</h3>
                            <p>Эта библиотека позволяет создавать web-приложения. Мы можем создать максимально интерактивный продукт именно под ваши цели</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home;