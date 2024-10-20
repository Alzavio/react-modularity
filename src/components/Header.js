import React from 'react';

function Header(props) {
    return (
        <div>
            <a href={"#home"}>Home</a>
            <a href={"#about"} style={{marginLeft: '2rem'}}>About</a>
            <a href={"#contact"} style={{marginLeft: '2rem'}}>Contact</a>
        </div>
    );
}

export default Header;