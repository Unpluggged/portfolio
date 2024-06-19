import './Header.css';

const Header = () => {
    return(
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hi, my name is <em>Nikolay</em></strong><br/>
                    a frontend developer
                </h1>
                <div className="header__text">
                    <p>with passion for learning and creating.</p>
                </div>
                <a href="https://hh.ru/resume/cc5033ceff0d4ea0370039ed1f6a4234346c4a" className='btn' target='_blank' rel="noreferrer">View hh resume</a>
            </div>
        </header>
    )
}

export default Header;