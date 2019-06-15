import React from 'react';
import logo from 'components/assets/images/logo.png';
import Navigation from 'components/common/Navigation';

const LINKS = [
    { label: 'Purchase', to: 'https://www.robinwieruch.de/' },
    { label: 'My Orders', to: 'https://twitter.com/rwieruch' },
    { label: 'Sell', to: 'https://twitter.com/rwieruch' }   
  ];

const Header = () => {
    return (
        <div>
            <img src={logo} alt="Logo" />
            <Navigation links={LINKS} />
            <hr className={'border-inline-end-color'} />
        </div>
    );
};


  


export default Header;