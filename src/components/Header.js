import React from "react";

function Header (props) {

    return (
        <header>

            <h3>
            BEN TAN
            </h3>

            {props.children}
        </header>
    )
}

export default Header;