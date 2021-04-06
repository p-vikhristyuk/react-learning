import React from 'react';
import './styles.scss';

const ErrorPage = (props) => {
    const {errorType} = props.match.params;
    return (
        <div className='error-page'>
            <h1 className="title" style={{color: '#ff0000'}}>Error {errorType}</h1>
        </div>
    )
};

export default ErrorPage;
