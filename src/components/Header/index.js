import React from 'react';
import './styles.scss';

const Header = ({name = "User name"}) => {
    return(
        <header className="header">
            <a href="#" className="header__logo">Logo</a>
            <strong className="header__welcome">Hey <span className="header__welcome-name">{name}</span>, Welcome!</strong>
        </header>
    )
};

export default Header;