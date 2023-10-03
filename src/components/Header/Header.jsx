import React from 'react';
import styleCSS from './Header.module.css';
import Menu from '../../components/Menu/Menu';
import logo from '../../images/logo.jpg';

const Header = (props) => {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        section.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className={styleCSS.header}>
            <div className={styleCSS.gridHeader}>

                <div className={styleCSS.logo}>
                    <img src={logo} className={styleCSS.logo} />
                </div>

                <div className={styleCSS.nameFirma}>
                    <h1>{props.data.name}</h1>
                </div>

                <div className={styleCSS.telephoneFirma}>
                    <h1>{props.data.telephone}</h1>
                </div>

                <div>
                    {props.data.isMobile ? (
                        // Мобильное устройство: отображаем выпадающее меню
                        <Menu className={styleCSS.menuSandwich}/>
                    ) : (null)}
                </div>

            </div>

            <div>
                {props.data.isMobile ? (null) :
                    (
                    // Компьютер: отображаем меню в строчку
                    <nav className={styleCSS.menuLine}>
                        <div><a onClick={() => scrollToSection('home')}>HOME</a></div>
                        <div><a onClick={() => scrollToSection('services')}>SHOP</a></div>
                        <div><a onClick={() => scrollToSection('about')}>ABOUT US</a></div>
                        <div><a onClick={() => scrollToSection('contact')}>CONTACT</a></div>
                    </nav>
                )}
            </div>

        </header>
    );
}

export default Header;

{/* <img src="images/background_0.jpg" className={styleCSS.imageHeader} />

<div className={styleCSS.textHeader}>
    <h1>{state.name}</h1>
</div> */}