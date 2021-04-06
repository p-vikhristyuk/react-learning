import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './styles.scss';

const Header = ({name = "", userName = '', getUserName = () => {}}) => {
    const history = useHistory();

    const [showEnterName, setShowEnterName] = useState(false);
    const [enteredName, setEnteredName] = useState('');
    const [tryAgain, setTryAgain] = useState(false);

    const handleClick = () => {
        getUserName(enteredName);
        setShowEnterName(false);
        history.push('/profile');
        setTryAgain(enteredName !== userName)
    };

    return(
        <header className="header">
            <Link to={'/'} className="header__logo">Logo</Link>
            <div className="header__right">
                <strong className="header__welcome">Hey {name && <span className="header__welcome-name">{name}</span>}, {!tryAgain && 'Welcome!'} {tryAgain && `Could you enter your user name ${tryAgain ? 'again' : ''}, please?`} <button onClick={() => setShowEnterName(!showEnterName)}>{showEnterName ? 'No': 'Yep'}</button></strong>
                {showEnterName && <div>
                    <input
                        type="text"
                        value={enteredName}
                        onChange={e => setEnteredName(e.target.value)}
                    />
                    <button
                        disabled={enteredName.length === 0}
                        onClick={handleClick}
                    >It's my user name</button>
                </div>}
            </div>
        </header>
    )
};

export default Header;
