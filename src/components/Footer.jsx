import React from 'react';

const Footer = () => {
    return (
        <footer className="page-footer deep-purple lighten-2">
          <div className="footer-copyright">
            <div className="container">
                <span className='date-footer'>{new Date().getFullYear()}</span>
            <a className="grey-text text-lighten-4 right links" href="https://github.com/Wingleszy" target="_blank" rel='noreferrer'>Repo</a>
            </div>
          </div>
        </footer>
    );
};

export default Footer;