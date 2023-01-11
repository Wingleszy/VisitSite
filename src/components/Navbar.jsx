import React from 'react';

const Navbar = () => {
    return (
        <nav>
        <div className="nav-wrapper deep-purple lighten-2">
          <a href="/" className="brand-logo">Wingleszy's design</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="https://github.com/Wingleszy" target="_blank" rel='noreferrer' className="links">Repo</a></li>
            <li><a href="https://wingleszy.github.io/FoodRecipes/" target="_blank" rel='noreferrer' className="links">Movies and Series</a></li>
            <li><a href="https://wingleszy.github.io/Fortnite-shop/" target="_blank" rel='noreferrer' className="links">Fortnite shop</a></li>
          </ul>
        </div>
      </nav>
    );
};

export default Navbar;