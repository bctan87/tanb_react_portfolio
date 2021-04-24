import React from "react";

function Header (props) {

    return (
        <header>

            <h3>
            <a href="#" className="brand-logo">BEN TAN</a>
            </h3>

            {props.children}
        </header>
    )
}

export default Header;