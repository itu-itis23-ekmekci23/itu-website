import React from "react";
import './navbar.css';

function Navbar() {
    return (
        <div className="bigdiv">
            <span> ITU WEBSITE</span>
            <a href="google.com" className="dib grow">Sahibinden</a>
            <a href="google.com" className="dib grow">Süreli İlanlar</a>
            <a href="google.com" className="dib grow">Ürün Kiralama</a>
            <a href="google.com" className="dib grow">Ders Yardımcısı</a>
            <a href="google.com" className="dib grow">Harf Notu Hesaplama</a>
        </div>
    )
}

export default Navbar;