import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const menuItems = ['Blog', 'Garden', 'Talks', 'Contact'];

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <Link to="/" className="header__logo">
                        Kantinan.dev
                    </Link>
                </div>
                <nav className="header__nav">
                    {menuItems.map((item) => (
                        <Link
                            key={item}
                            to={`/${item.toLowerCase()}`} // เช่น /contact
                            className="header__link"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
