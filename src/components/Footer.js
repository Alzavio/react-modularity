import React from 'react';

function Footer(props) {
    return (
        <div style={{marginTop: "2rem"}}>
            <a href={"#home"}>Terms of Service</a>
            <a href={"#about"} style={{marginLeft: '2rem'}}>Privacy Policy</a>
            <a href={"#contact"} style={{marginLeft: '2rem'}}>Contact</a>
        </div>
    );
}

export default Footer;