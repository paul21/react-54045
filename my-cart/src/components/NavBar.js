import React from "react";
import CartWidget from "./CartWidget";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/NavBar.css";

function NavBar() {
    const categories = ["Commodore", "Atari", "Machintosh"];

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">
                Retro World
            </a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    {categories.map((category) => (
                        <li className="nav-item" key={category}>
                            <a className="nav-link" href="#">
                                {category}
                            </a>
                        </li>
                    ))}
                </ul>
                <CartWidget />
            </div>
        </nav>
    );
}

export default NavBar;
