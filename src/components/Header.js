import React from "react";

export default function Header() {
    return (
        <header className="header">
            <img src={process.env.PUBLIC_URL + "/images/poker-face.png"} className="header--image"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Curso React - Projeto 3</h4>
        </header>
    )
}