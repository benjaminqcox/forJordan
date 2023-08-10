import React from "react";

import logo from "./images/qalogo.svg";

const Header = () => {

    return (
        <>
            <header className="header">
                <nav className="navbar navbar-expand-sm">
                    <a className="navbar-brand" href="https://www.qa.com" target="_blank" rel="noreferrer">
                        <img src={logo} alt="QA Ltd" style={{width: 100}}/>
                    </a>
                    <a className="navbar-brand" href="/" >
                        <p>TodoApp</p>
                    </a>
                </nav>
            </header>
        </>
    );
}

export default Header;